import Image from 'next/image';
import founderImg from "../assets/images/founder.png";
import signatureImg from "../assets/images/signature.png";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
});

interface FounderData {
  id: number;
  name: string;
  quote: string;
  signature: string;
  image: string;
}

const Founder = () => {
  const founderData: FounderData = {
    id: 1,
    name: "Mr. Noby Onamkulam",
    quote:
      "A home is the most honest story a person can tell. My work is simply to listen deeply and design a space where that story, your story - can unfold beautifully, year after year.",
    signature: signatureImg.src,
    image: founderImg.src,
  };

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center relative overflow-hidden py-12 lg:pt-24 lg:pb-12 xl:pt-16 xl:pb-12">
      <div className="absolute inset-0 bg-white" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 xl:gap-24">

          {/* Photo */}
          <div className="flex-shrink-0 w-72 sm:w-80 md:w-96 lg:w-[400px] xl:w-[480px] relative mt-10 lg:mt-0">
            <div className="rounded-[2rem] overflow-hidden bg-white">
              <Image
                src={founderImg}
                alt={founderData.name}
                className="w-full h-auto object-cover object-bottom"
                sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, (max-width: 1024px) 384px, (max-width: 1280px) 400px, 480px"
                priority
                quality={85}
              />
            </div>
          </div>

          {/* Content */}
          <div className={`flex flex-col text-left space-y-4 w-full ${poppins.className} pt-4 lg:pt-8`}>

            {/* Heading */}
            <div className="mb-4">
              <span className="block text-gray-900 text-[1.4rem] sm:text-2xl lg:text-3xl font-medium tracking-normal leading-snug lg:max-w-none mb-2">
                Meet The Visionary Behind Crafting Your Story
              </span>
              <h2 className="text-[#8B6F47] font-bold text-[2.5rem] sm:text-5xl lg:text-[3.5rem] tracking-tight mt-4">
                {founderData.name}
              </h2>
            </div>

            {/* Quote */}
            <div className="relative pt-6 pb-6 pr-8 max-w-2xl mt-8 mb-4 ml-10 sm:ml-16 lg:ml-16 xl:ml-20 border-l-[1.5px] border-transparent">

              {/* TOP LEFT BORDER CLUSTER */}
              {/* Top-left rounded corner */}
              <div className="absolute top-0 left-0 w-8 h-24 border-l-[1.5px] border-t-[1.5px] border-[#8B6F47] rounded-tl-[1.8rem]" />
              {/* Top Quote Mark (acting as the gap) */}
              <div className="absolute -top-[2.2rem] left-8 text-[#8B6F47] text-[5rem] font-serif leading-none font-extrabold tracking-tighter">
                &ldquo;
              </div>
              {/* Horizontal top line (long segment after quote) */}
              <div className="absolute top-0 left-20 w-48 sm:w-80 border-t-[1.5px] border-[#8B6F47]" />

              {/* Quote Text */}
              <blockquote className="text-[15px] sm:text-lg md:text-[1.1rem] text-gray-900 font-medium leading-[1.8] italic relative z-10 w-full pl-8 pr-4">
                {founderData.quote}
              </blockquote>

              {/* BOTTOM RIGHT BORDER CLUSTER */}
              {/* Horizontal bottom line (long segment before quote) */}
              <div className="absolute bottom-0 left-12 right-20 sm:right-24 border-b-[1.5px] border-[#8B6F47]" />
              {/* Bottom Quote Mark (acting as the gap) */}
              <div className="absolute -bottom-10 right-8 sm:right-12 text-[#8B6F47] text-[5rem] font-serif leading-none font-extrabold tracking-tighter">
                &rdquo;
              </div>
              {/* Bottom-right rounded corner */}
              <div className="absolute bottom-0 right-2 sm:right-6 w-8 h-24 border-r-[1.5px] border-b-[1.5px] border-[#8B6F47] rounded-br-[1.8rem]" />
            </div>

            {/* Signature */}
            <div className="mt-2 ml-8 sm:ml-14 lg:ml-14 xl:ml-[4.5rem]">
              <Image
                src={signatureImg}
                alt="Signature"
                height={48}
                className="w-32 sm:w-40 md:w-48 object-contain"
                quality={75}
              />
            </div>

          </div>
        </div>
      </div>

      {/* Ambient Effects */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gray-50 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-52 h-52 bg-gray-100 rounded-full blur-2xl opacity-20" />
    </div>
  );
};

export default Founder;
