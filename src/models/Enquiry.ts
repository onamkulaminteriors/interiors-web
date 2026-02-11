import mongoose from 'mongoose';

export interface IEnquiry extends mongoose.Document {
    name: string;
    email: string;
    phone?: string;
    details?: string;
    createdAt: Date;
}

const EnquirySchema = new mongoose.Schema<IEnquiry>({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please provide a valid email address',
        ],
    },
    phone: {
        type: String,
        maxlength: [20, 'Phone number cannot be more than 20 characters'],
    },
    details: {
        type: String,
        maxlength: [1000, 'Details cannot be more than 1000 characters'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Enquiry || mongoose.model<IEnquiry>('Enquiry', EnquirySchema);
