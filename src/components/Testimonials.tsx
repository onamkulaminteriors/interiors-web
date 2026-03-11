import { useRef, memo, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useTransform, MotionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface TestimonialScrollProps {
  scrollProgress: MotionValue<number>;
}

import sony from '../assets/testimonials/sony_sebastial.jpeg'
import joseph from '../assets/testimonials/joseph.jpeg'

// --- STATIC DATA ---
const testimonials = [
  {
    id: 1,
    quote: "I met Mr. Jose P Abraham (Noby) MD, Onamkulam interiors way back in 1999, ever since then all my interior works are being done by Onamkulam interiors. He is having a perfect team and well equipped modern work shop. He always uses top brands and best quality fixtures at very reasonable price. He complete his works well in time and his after sales service is extremely good. Strongly recommend.",
    author: "Joseph Mathew Illiparambil",
    role: "Homeowner",
    project: "Pulincunnoo Residence",
    location: "Pulincunnoo, Kerala",
    projectImage: "/images/testimonials/proj_pulincunnoo_1773070337252.webp",
    authorImage: joseph.src,
    number: "01",
  },
  {
    id: 2,
    quote: "Onamkulam Interiors is an integral part of my house interiors - doors, windows, tables and chairs, kitchen shelves, book and crockery shelves, sofas and side tables, beds and wardrobes - since more than a quarter century, and all still fully functional. The young carpenters were full of ideas and energy. They had the willingness to listen and learn my likes and needs.",
    author: "Sony Sebastian Vattamala",
    role: "Long-term Client",
    project: "Heritage Interiors",
    location: "Kerala, India",
    projectImage: "/images/testimonials/proj_heritage_1773070358082.webp",
    authorImage: sony.src,
    number: "02",
  },
  {
    id: 3,
    quote: "I am happy with the interior work done by Onamkulam Interiors. The entire work was carried out with sheer dedication and professionalism. I am impressed that the team adhered strictly to the promised completion date on time without compromising on quality. Onamkulam team of dedicated professionals and courteous work force handled the work efficiently and responsibly from the start to finish.",
    author: "Alexander Wright",
    role: "Business Owner",
    project: "Dubai Client Project",
    location: "Kerala, India",
    projectImage: "/images/testimonials/proj_dubai_1773070376282.webp",
    authorImage: "/images/testimonials/auth_alexander_1773070463526.webp",
    number: "03",
  },
];

// Reusable styles to prevent object creation on every render
const LAYER_STYLE: React.CSSProperties = {
  willChange: "transform",
  backfaceVisibility: "hidden",
  WebkitBackfaceVisibility: "hidden",
  perspective: 1000,
};

const TestimonialCard = ({
  testimonial,
  index,
  totalCards,
  progress,
  isDesktop,
}: {
  testimonial: any;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  isDesktop: boolean;
}) => {
  const translateY = useTransform(progress, (p) => {
    const sectionStart = index / totalCards;
    const sectionEnd = (index + 1) / totalCards;
    const rawSectionProgress = (p - sectionStart) / (sectionEnd - sectionStart);
    const sectionProgress = Math.max(0, Math.min(1, rawSectionProgress));
    return (1 - sectionProgress) * 100;
  });

  const scale = useTransform(progress, (p) => {
    if (!isDesktop) return 1;
    const sectionStart = index / totalCards;
    const sectionEnd = (index + 1) / totalCards;
    const rawSectionProgress = (p - sectionStart) / (sectionEnd - sectionStart);
    const sectionProgress = Math.max(0, Math.min(1, rawSectionProgress));
    return 1 + (1 - sectionProgress) * 0.1;
  });

  const isSecondSection = index === 1;
  const textColor = isSecondSection ? "text-white" : "text-black";
  const bgColor = isSecondSection ? "bg-black" : "bg-white";

  return (
    <motion.div
      className="absolute inset-0 w-full h-full flex flex-col lg:flex-row"
      style={{
        ...LAYER_STYLE,
        top: 0,
        y: useTransform(translateY, (v) => `${v}%`),
        zIndex: index + 1,
      }}
    >
      {/* Image Section */}
      <div className="w-full h-1/2 lg:w-2/3 lg:h-full relative overflow-hidden">
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{
            scale: scale,
            translateZ: 0,
          }}
        >
          <Image
            src={testimonial.projectImage}
            alt={testimonial.project}
            fill
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover"
            priority={index === 0}
            quality={90}
          />
        </motion.div>

        {/* Mobile/Tablet Overlay Content */}
        <div
          className={`lg:hidden absolute bottom-0 left-0 right-0 pt-32 pb-6 px-6 md:px-10 flex flex-col justify-end bg-gradient-to-t ${isSecondSection
            ? "from-black/90 to-transparent text-white"
            : "from-white/95 to-transparent text-black"
            }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
            {testimonial.number}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
            {testimonial.project}
          </h2>
          <p className="text-sm md:text-base opacity-80">{testimonial.location}</p>
        </div>
      </div>

      {/* Content Section */}
      <div
        className={`flex flex-col justify-center w-full h-1/2 lg:w-1/3 lg:h-full ${bgColor} ${textColor} p-6 sm:p-8 md:p-12 lg:p-12`}
      >
        <h1 className="hidden lg:block text-5xl lg:text-7xl font-bold mb-4 lg:mb-6">
          {testimonial.number}
        </h1>
        <h2 className="hidden lg:block text-2xl lg:text-4xl font-semibold mb-3 lg:mb-4">
          {testimonial.project}
        </h2>

        <p className="text-sm sm:text-base md:text-xl lg:text-lg italic mb-4 lg:mb-6 leading-relaxed">
          &ldquo;{testimonial.quote}&rdquo;
        </p>

        <div className="flex items-center gap-4 mt-2">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-200 border border-black/10 flex items-center justify-center relative">
            {testimonial.authorImage ? (
              <Image
                src={testimonial.authorImage}
                alt={testimonial.author}
                fill
                sizes="48px"
                className="object-cover"
              />
            ) : (
              <span className="text-gray-500 font-semibold text-sm sm:text-base">
                {testimonial.author
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")
                  .toUpperCase()
                  .slice(0, 2)}
              </span>
            )}
          </div>

          <div className="space-y-0.5">
            <p className="font-medium text-sm sm:text-base md:text-lg">
              {testimonial.author}
            </p>
            <p
              className={`text-xs sm:text-sm md:text-base ${isSecondSection ? "opacity-70" : "opacity-60"
                }`}
            >
              {testimonial.role}
            </p>
            <p
              className={`hidden lg:block text-xs sm:text-sm ${isSecondSection ? "opacity-50" : "opacity-40"
                }`}
            >
              {testimonial.location}
            </p>
          </div>
        </div>

        <div className="mt-6 lg:mt-8 flex items-center justify-center lg:justify-start gap-2 cursor-pointer group">
          {/* Read More button commented out as per original */}
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialIndicator = ({
  index,
  totalCards,
  progress,
}: {
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
}) => {
  const sectionStart = index / totalCards;
  const sectionEnd = (index + 1) / totalCards;

  const backgroundColor = useTransform(progress, (p) =>
    p >= sectionStart && p < sectionEnd ? "#1f2937" : "#9ca3af"
  );

  return (
    <motion.div
      className="w-2 h-2 rounded-full transition-colors duration-300"
      style={{ backgroundColor }}
    />
  );
};

const TestimonialScroll = memo(({ scrollProgress }: TestimonialScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const totalCards = testimonials.length;
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-screen overflow-hidden bg-white"
      style={{ zIndex: 50 }}
    >
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={testimonial.id}
          testimonial={testimonial}
          index={index}
          totalCards={totalCards}
          progress={scrollProgress}
          isDesktop={isDesktop}
        />
      ))}

      {/* Progress indicator */}
      <div className="absolute bottom-6 right-6 z-[60] flex items-center gap-2">
        {testimonials.map((_, index) => (
          <TestimonialIndicator
            key={index}
            index={index}
            totalCards={totalCards}
            progress={scrollProgress}
          />
        ))}
      </div>

      {/* View All button */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[60]">
        <Link
          href="/testimonials"
          className="flex items-center gap-2 bg-black/40 hover:bg-black/60 border border-white/20 backdrop-blur-md text-white text-xs font-medium px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:gap-3 group"
        >
          <span className="tracking-wide">View All Testimonials</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-[55]"
        style={{
          opacity: useTransform(scrollProgress, [0, 0.15, 0.3], [1, 0.6, 0]),
        }}
      >
        {/* Scroll hint text commented out as per original */}
      </motion.div>
    </div>
  );
});

export default TestimonialScroll;