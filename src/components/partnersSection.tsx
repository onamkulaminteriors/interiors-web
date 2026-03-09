import React, { useEffect, useState, memo } from 'react';
import Image from 'next/image';
import { motion, useTransform, MotionValue } from 'framer-motion';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
});

//image imports
import winExt from '../assets/partners/1.png';
import rehau from '../assets/partners/2.png';
import master_edge from '../assets/partners/3.png';
import e3 from '../assets/partners/4.png'
import hopo from '../assets/partners/5.png'
import hafele from '../assets/partners/6.png'
import ebco from '../assets/partners/7.png'
import hettich from '../assets/partners/8.png'
import blum from '../assets/partners/9.png'
import stylam from '../assets/partners/10.png'
import virgo from '../assets/partners/11.png'
import mikasa_laminates from '../assets/partners/12.png'
import mikasa_ply from '../assets/partners/13.png'
import greenlam from '../assets/partners/14.png'
import austin from '../assets/partners/15.png'
import greenply from '../assets/partners/16.png'
import centuryPly from '../assets/partners/17.png'



type Brand = {
  name: string;
  position?: string;
  description?: string;
  founded?: string;
  specialty?: string;
};

// Define styles outside to prevent re-parsing
const marqueeStyle = `
  @keyframes marquee {
    0% { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(-50%, 0, 0); }
  }
  .marquee-inner {
    display: flex;
    width: calc(200%);
    will-change: transform;
  }
`;

const AnimatedChar = ({ char, index, progress, totalChars }: { char: string, index: number, progress: MotionValue<number>, totalChars: number }) => {
  const opacity = useTransform(progress, (p) => {
    const scrollTypingProgress = Math.min(1, Math.max(0, p / 0.23));
    const t = scrollTypingProgress;
    const easedProgress = t * t * (3 - 2 * t);
    const letterProgress = Math.max(0, Math.min(1, (easedProgress * totalChars - index) * 0.5));
    return letterProgress;
  });

  const transform = useTransform(opacity, (letterProgress) => {
    return `translate3d(0, ${Math.max(0, (1 - letterProgress) * 15)}px, 0)`;
  });

  return (
    <motion.span style={{ opacity, transform }} className="inline-block transition-opacity duration-200">
      {char}
    </motion.span>
  );
};

// Extracted Component for Title Words
const TitleWord = ({ text, index, progress }: { text: string, index: number, progress: MotionValue<number> }) => {
  const threshold = 0.1 + (index * 0.2);
  const opacity = useTransform(progress, p => p > threshold ? 1 : 0);
  const transform = useTransform(progress, p => `translate3d(0, ${p > threshold ? 0 : 20}px, 0)`);

  return (
    <motion.div
      style={{
        opacity,
        transform,
        transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s ease-out'
      }}
    >
      {text}
    </motion.div>
  );
};

// Extracted Component for Brand Cards
const BrandCard = ({ brand, index, progress, backgroundColor }: { brand: Brand, index: number, progress: MotionValue<number>, backgroundColor: MotionValue<string> }) => {
  const stagger = 0.05;
  const start = index * stagger;

  const brandProg = useTransform(progress, p => {
    const val = Math.max(0, p - start);
    return Math.min(1, val * 3);
  });

  const opacity = useTransform(brandProg, p => Math.min(1, p * 1.2));
  const transform = useTransform(brandProg, p => `translate3d(0, ${Math.max(0, (1 - p) * 25)}px, 0) scale(${0.94 + p * 0.06})`);
  const borderColor = useTransform(backgroundColor, c => c === '#ffffff' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)');

  return (
    <motion.div
      className="border rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 text-center min-h-[120px] sm:min-h-[160px] md:min-h-[180px] flex flex-col justify-center transition-colors duration-200"
      style={{
        opacity,
        transform,
        willChange: 'transform, opacity',
        borderColor
      }}
    >
      <h3 className="text-base sm:text-lg md:text-2xl font-light tracking-wide">
        {brand.name}
      </h3>
    </motion.div>
  );
};


const ExclusiveBrandsComplete: React.FC<{ scrollProgress: MotionValue<number> }> = memo(({ scrollProgress }) => {
  const [mounted, setMounted] = useState(false);
  const fullQuote = "From your vision to our hands: The simple journey to soul.";

  useEffect(() => {
    setMounted(true);
  }, []);

  const exclusiveBrands: Brand[] = [
    { name: 'MERIDIANI', position: 'top-left' },
    { name: 'Frigerio', position: 'top-right' },
    { name: 'FIAM', position: 'bottom-left' },
    { name: 'SANGIACOMO', position: 'bottom-right' },
  ];

  const partners = [
    { name: 'Winnext', image: winExt.src },
    { name: 'Rehau', image: rehau.src },
    { name: 'Ebco', image: ebco.src },
    { name: 'Master Edge', image: master_edge.src },
    { name: 'E3', image: e3.src },
    { name: 'Hopo', image: hopo.src },
    { name: 'Hafele', image: hafele.src },
    { name: 'Mikasa Laminates', image: mikasa_laminates.src },
    { name: 'Mikasa', image: mikasa_ply.src },
    { name: 'Green Ply', image: greenply.src },
    { name: 'Austin Ply', image: austin.src },
    { name: 'Green Lam', image: greenlam.src },
    { name: 'Century Ply', image: centuryPly.src },
    { name: 'Stylam', image: stylam.src },
    { name: 'Blum', image: blum.src },
    { name: 'Virgo', image: virgo.src },
    { name: 'Hettich', image: hettich.src, subtitle: 'BANG & OLUFSEN' },


    // { name: 'Mikasa', image: mikasaPly.src },
    // { name: 'greenPly', image: greenPly.src },
    // { name: 'Austin Ply', image: austinPly.src },
    // { name: 'GreenLam', image: greenLam.src },
    // { name: 'Virgo', image: virgo.src, subtitle: 'BANG & OLUFSEN' },
    // { name: 'Stylam', image: stylam.src },
    // { name: 'Blum', image: blum.src },
    // { name: 'Winnext', image: winnext.src },
    // { name: 'Winnext', image: ten.src },
    // { name: 'Winnext', image: eleven.src },
    // { name: 'Winnext', image: twelve.src },
    // { name: 'Winnext', image: thirteen.src },
    // { name: 'Winnext', image: fourteen.src },
    // { name: 'Winnext', image: fifteen.src },
    // { name: 'Winnext', image: sixteen.src },
    // { name: 'Winnext', image: seventeen.src },
    // { name: 'GAGGENAU', image: null },
    // { name: 'SUB•ZERO', image: null },
    // { name: 'smeg', image: null },
  ];

  // --- TOP LEVEL HOOKS ---
  // Define all MotionValues and transforms here, unconditionally.

  // 1. Current Section Logic (adjusted for commented-out Section 2)
  const currentSection = useTransform(scrollProgress, (p) => {
    if (p < 0.22) return 0;
    if (p < 0.25) return 0.5;
    // Skip section 1 (was brands grid, now commented out)
    if (p < 0.27) return 1.5;
    if (p < 0.52) return 2;
    if (p < 0.55) return 2.5;
    return 3;
  });

  // 2. Main Progress Values (adjusted for faster transitions)
  const quoteProgress = useTransform(scrollProgress, p => p < 0.25 ? Math.min(1, p / 0.22) : 1);
  const titleGridProgress = useTransform(scrollProgress, p => (p >= 0.22 && p < 0.47) ?
    Math.min(1, Math.max(0, (p - 0.25) / 0.20)) : 0);
  const partnersProgress = useTransform(scrollProgress, p => (p >= 0.25 && p < 0.55) ?
    Math.min(1, Math.max(0, (p - 0.27) / 0.25)) : 0);
  const finalQuoteProgress = useTransform(scrollProgress, p => p >= 0.52 ?
    Math.min(1, Math.max(0, (p - 0.55) / 0.20)) : 0);

  // 3. Derived Sub-Progress
  const titleProgress = useTransform(titleGridProgress, p => Math.min(1, p * 1.5));
  const gridProgress = useTransform(titleGridProgress, p => p > 0.2 ? Math.min(1, (p - 0.2) * 2) : 0);
  const colorTransitionProgress = useTransform(scrollProgress, p => p > 0.8 ? Math.min(1, (p - 0.8) * 5) : 0);

  // 4. Styles & Backgrounds
  const backgroundColor = useTransform(colorTransitionProgress, [0, 1], ['#000000', '#ffffff']);
  const textColor = useTransform(colorTransitionProgress, [0, 1], ['#ffffff', '#000000']);
  const sweepTransform = useTransform(colorTransitionProgress, p => `translate3d(${-100 + p * 200}%, 0, 0)`);
  const sweepOpacity = useTransform(colorTransitionProgress, p => p > 0 ? Math.min(1, p * 2) : 0);

  // 5. Container Transforms (Moved out of JSX)
  // Section 1: Opening Quote
  const section1Opacity = useTransform(currentSection, s => s <= 0.5 ? 1 : Math.max(0, 1 - ((s - 0.5) * 4)));
  const section1Transform = useTransform(currentSection, s => `translate3d(0, ${s <= 0.5 ? 0 : -(s - 0.5) * 100}px, 0)`);
  const section1ZIndex = useTransform(currentSection, s => s <= 0.8 ? 10 : 1);
  const section1ContentOpacity = useTransform(quoteProgress, p => Math.min(1, p * 1.2));
  const section1ContentTransform = useTransform(quoteProgress, p => `translate3d(0, ${Math.max(0, (1 - p) * 20)}px, 0) scale(${0.96 + p * 0.04})`);

  // Section 2: Brands Grid
  const section2Opacity = useTransform(currentSection, s => s >= 0.5 && s <= 1.5 ? 1 :
    (s > 1.5 ? Math.max(0, 1 - ((s - 1.5) * 4)) :
      (s < 0.5 ? 0 : Math.min(1, (s - 0.5) * 4))));
  const section2Transform = useTransform(currentSection, s => `translate3d(0, ${s < 0.5 ? 80 : s <= 1.5 ? 0 : -(s - 1.5) * 100}px, 0)`);
  const section2ZIndex = useTransform(currentSection, s => s >= 0.5 && s <= 1.8 ? 10 : 1);

  // Section 3: Partners (adjusted for faster entry)
  const section3Opacity = useTransform(currentSection, s => s >= 1.5 && s <= 2.5 ? 1 :
    (s > 2.5 ? Math.max(0, 1 - ((s - 2.5) * 4)) :
      (s < 1.5 ? 0 : Math.min(1, (s - 1.5) * 8))));
  const section3Transform = useTransform(currentSection, s => `translate3d(0, ${s < 1.5 ? 40 : s <= 2.5 ? 0 : -(s - 2.5) * 100}px, 0)`);
  const section3ZIndex = useTransform(currentSection, s => s >= 1.5 && s <= 2.6 ? 10 : 1);
  const section3TitleOpacity = useTransform(partnersProgress, p => Math.min(1, p * 1.5));
  const section3TitleTransform = useTransform(partnersProgress, p => `translate3d(0, ${Math.max(0, ((1 - p) * 25))}px, 0)`);
  const section3MarqueeOpacity = useTransform(partnersProgress, p => Math.min(1, p * 1.2));
  const section3MarqueeTransform = useTransform(partnersProgress, p => `scale(${0.95 + p * 0.05}) translate3d(0,0,0)`);

  // Section 4: Final Quote
  const section4Opacity = useTransform(currentSection, s => s >= 2.5 ? Math.min(1, (s - 2.5) * 2) : 0);
  const section4Transform = useTransform(currentSection, s => `translate3d(0, ${s < 2.5 ? 80 : Math.max(0, (1 - (s - 2.5) * 1.5) * 40)}px, 0)`);
  const section4ZIndex = useTransform(currentSection, s => s >= 2.5 ? 10 : 1);
  const section4ContentOpacity = useTransform(finalQuoteProgress, p => Math.min(1, p * 1.5));
  const section4ContentTransform = useTransform(finalQuoteProgress, p => `translate3d(0, ${Math.max(0, (1 - p) * 30)}px, 0) scale(${0.95 + p * 0.05})`);

  // --- Helper to render text word-by-word ---
  const renderAnimatedText = (text: string) => {
    const words = text.split(' ');
    let globalCharIndex = 0;

    return words.map((word, wordIndex) => {
      const wordEl = (
        <span
          key={wordIndex}
          className="inline-block whitespace-nowrap"
          style={{ marginRight: '0.25em' }}
        >
          {word.split('').map((char, charIndex) => {
            const el = <AnimatedChar
              key={charIndex}
              char={char}
              index={globalCharIndex}
              progress={scrollProgress}
              totalChars={fullQuote.length}
            />;
            globalCharIndex++;
            return el;
          })}
        </span>
      );

      globalCharIndex++;
      return wordEl;
    });
  };

  if (!mounted) return null;

  return (
    <motion.div
      className="relative w-full h-screen overflow-hidden"
      style={{
        backgroundColor,
        color: textColor,
        transition: 'background-color 0.6s ease, color 0.6s ease'
      }}
    >
      <style>{marqueeStyle}</style>

      {/* Color Sweep */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-[1]"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.95) 50%, transparent 100%)',
          opacity: sweepOpacity,
          transform: sweepTransform,
          willChange: 'transform'
        }}
      />

      <div className="relative z-10 w-full h-full">

        {/* --- SECTION 1: OPENING QUOTE --- */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center px-6 pt-20 sm:pt-0"
          style={{
            opacity: section1Opacity,
            transform: section1Transform,
            zIndex: section1ZIndex,
            pointerEvents: 'none',
          }}
        >
          <motion.div
            className="text-center max-w-4xl mx-auto"
            style={{
              opacity: section1ContentOpacity,
              transform: section1ContentTransform
            }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-relaxed tracking-wide">
              {renderAnimatedText(fullQuote)}
            </h2>
          </motion.div>
        </motion.div>

        {/* --- SECTION 2: BRANDS GRID --- */}
        {/* <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center px-4 pt-20 sm:pt-0"
          style={{
            opacity: section2Opacity,
            transform: section2Transform,
            zIndex: section2ZIndex,
          }}
        >
          <div className="mb-6 md:mb-12 lg:mb-16 text-center w-full">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider leading-tight flex flex-col items-center">
              {['OUR', 'EXCLUSIVE', 'BRANDS'].map((text, idx) => (
                <TitleWord
                  key={text}
                  text={text}
                  index={idx}
                  progress={titleProgress}
                />
              ))}
            </h2>
          </div>

          <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 lg:gap-8">
            {exclusiveBrands.map((brand, i) => (
              <BrandCard
                key={brand.name}
                brand={brand}
                index={i}
                progress={gridProgress}
                backgroundColor={backgroundColor}
              />
            ))}
          </div>
        </motion.div> */}

        {/* --- SECTION 3: PARTNERS --- */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center px-0 pt-16 sm:pt-12 lg:pt-0"
          style={{
            opacity: section3Opacity,
            transform: section3Transform,
            zIndex: section3ZIndex,
          }}
        >
          <motion.div
            className="mb-4 sm:mb-8 md:mb-12 lg:mb-14 text-center px-4 w-full"
          >
            <h2 className={`text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider flex flex-col items-center leading-none sm:leading-tight gap-0.5 sm:gap-1 md:gap-2 ${poppins.className}`}>
              {['OUR', 'EXCLUSIVE', 'BRANDS'].map((word, idx) => (
                <TitleWord
                  key={word}
                  text={word}
                  index={idx}
                  progress={partnersProgress}
                />
              ))}
            </h2>
          </motion.div>

          <motion.div
            className="w-full overflow-hidden"
            style={{
              opacity: section3MarqueeOpacity,
              transform: section3MarqueeTransform,
            }}
          >
            <div
              className="marquee-inner gap-4 md:gap-8"
              style={{
                animation: `marquee 20s linear infinite`
              }}
            >
              {/* We duplicate the array 3 times to guarantee enough content to loop seamlessly on very wide screens regardless of how many partners are added */}
              {[...partners, ...partners, ...partners].map((p, i) => (
                <div
                  key={`${p.name}-${i}`}
                  className="min-w-[130px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[260px] h-20 sm:h-24 md:h-28 lg:h-36 border rounded-lg flex flex-col items-center justify-center flex-shrink-0 px-3 sm:px-6 transition-colors duration-200 bg-transparent"
                  style={{ borderColor: 'inherit' }}
                >
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={200}
                      height={100}
                      loading="lazy"
                      quality={75}
                      className="max-w-[70%] max-h-[60%] w-auto h-auto object-contain"
                      style={{ mixBlendMode: 'multiply' }}
                    />
                  ) : p?.subtitle ? (
                    <div className="text-center">
                      <h3 className="text-base sm:text-lg md:text-xl font-light tracking-wide">{p.name}</h3>
                      <p className="text-xs sm:text-sm mt-1 tracking-wider opacity-60">{p?.subtitle}</p>
                    </div>
                  ) : (
                    <h3 className="text-sm sm:text-base md:text-lg font-light tracking-wide px-2 text-center">{p.name}</h3>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* --- SECTION 4: FINAL QUOTE --- */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center px-6 pt-20 sm:pt-0"
          style={{
            opacity: section4Opacity,
            transform: section4Transform,
            zIndex: section4ZIndex,
          }}
        >
          <motion.div
            className="text-center max-w-4xl mx-auto"
            style={{
              opacity: section4ContentOpacity,
              transform: section4ContentTransform
            }}
          >
            <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-light leading-relaxed">
              With unlimited creativity,{' '}
              <span className="italic">we transform your vision</span>
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
});

export default ExclusiveBrandsComplete;