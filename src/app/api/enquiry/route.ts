import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Enquiry from '@/models/Enquiry';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        await dbConnect();
        const body = await req.json();
        const { name, email, phone, details } = body;

        // Save to Database
        const enquiry = await Enquiry.create({
            name,
            email,
            phone,
            details,
        });

        // Send Email Notification
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS && process.env.EMAIL_TO) {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            // 1. Admin Notification Email
            const adminMailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_TO,
                subject: `New Enquiry from ${name} - OnamKulam Interiors`,
                html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #8B6F47;">New Project Enquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Details:</strong></p>
            <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #8B6F47;">${details || 'No details provided'}</p>
            <p style="font-size: 12px; color: #999; margin-top: 30px;">Received via OnamKulam Interiors Website</p>
          </div>
        `,
            };

            // 2. User Acknowledgment Email
            const userMailOptions = {
                from: process.env.EMAIL_USER,
                to: email, // Send to the user's email
                subject: `Thank you for contacting OnamKulam Interiors`,
                html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #8B6F47;">Thank You, ${name}!</h2>
            <p>We have received your enquiry and appreciate you reaching out to <strong>OnamKulam Interiors</strong>.</p>
            <p>Our team will review your details and get back to you shortly.</p>
            <br/>
            <p>Best Regards,</p>
            <p><strong>OnamKulam Interiors Team</strong></p>
          </div>
        `,
            };

            // Send both emails
            await Promise.all([
                transporter.sendMail(adminMailOptions),
                transporter.sendMail(userMailOptions)
            ]);
        } else {
            console.warn("Email environment variables not set. Skipping email notification.");
        }

        return NextResponse.json({ success: true, daa: enquiry }, { status: 201 });
    } catch (error: any) {
        console.error('Enquiry API Error:', error);
        return NextResponse.json(
            { success: false, error: error.message || 'Something went wrong' },
            { status: 400 }
        );
    }
}
