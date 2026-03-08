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
              <img
                src={founderData.image}
                alt={founderData.name}
                className="w-full h-auto object-cover object-bottom"
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
            <div className="relative pt-6 pb-6 pr-8 max-w-2xl mt-8 mb-4 ml-6 sm:ml-8">

              {/* TOP LEFT BORDER CLUSTER */}
              {/* Vertical left line */}
              <div className="absolute top-0 -left-6 w-0 h-24 border-l-[1.5px] border-[#8B6F47] rounded-tl-xl" />
              {/* Horizontal top line (short segment before quote) */}
              <div className="absolute top-0 -left-6 w-4 border-t-[1.5px] border-[#8B6F47] rounded-tl-xl" />
              {/* Top Quote Mark (acting as the gap) */}
              <div className="absolute -top-[2.2rem] -left-1 text-[#8B6F47] text-[5rem] font-serif leading-none font-extrabold tracking-tighter">
                &ldquo;
              </div>
              {/* Horizontal top line (long segment after quote) */}
              <div className="absolute top-0 left-12 w-48 sm:w-64 border-t-[1.5px] border-[#8B6F47]" />

              {/* Quote Text */}
              <blockquote className="text-base sm:text-lg md:text-[1.1rem] text-gray-900 font-medium leading-relaxed italic relative z-10 w-full pr-4">
                {founderData.quote}
              </blockquote>

              {/* BOTTOM RIGHT BORDER CLUSTER */}
              {/* Horizontal bottom line (long segment before quote) */}
              <div className="absolute bottom-0 left-12 right-14 border-b-[1.5px] border-[#8B6F47]" />
              {/* Bottom Quote Mark (acting as the gap) */}
              <div className="absolute -bottom-10 right-2 text-[#8B6F47] text-[5rem] font-serif leading-none font-extrabold tracking-tighter">
                &rdquo;
              </div>
              {/* Horizontal bottom line (short segment after quote) */}
              <div className="absolute bottom-0 -right-4 w-6 border-b-[1.5px] border-[#8B6F47] rounded-br-xl" />
              {/* Vertical right line */}
              <div className="absolute bottom-0 -right-4 w-0 h-24 border-r-[1.5px] border-[#8B6F47] rounded-br-xl" />
            </div>

            {/* Signature */}
            <div className="mt-2 ml-4">
              <img
                src={founderData.signature}
                alt="Signature"
                className="w-32 sm:w-40 md:w-48 object-contain"
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
