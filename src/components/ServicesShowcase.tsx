import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';

import one from '../assets/process/1.jpg';
import two from '../assets/process/2.jpg';
import three from '../assets/process/3.jpg';
import four from '../assets/process/4.jpg';
import five from '../assets/process/5.jpg';
import six from '../assets/process/6.jpg';
import seven from '../assets/process/7.jpg';

const ServicesShowcase = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const [isUserInteracting, setIsUserInteracting] = useState<boolean>(false);

  const services: { id: string; title: string; description: string; image: StaticImageData; secondaryImage: string }[] = [
    {
      id: '01',
      title: 'Consultation & Vision',
      description: 'Your story begins with us listening. Our experts visit your space to understand your dreams, your needs, and the life you envision living there.',
      image: one,
      secondaryImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop'
    },
    {
      id: '02',
      title: '3D Visualisation',
      description: 'This is where your vision takes shape. We create detailed 3D renders, allowing you to walk through your future home and make sure every detail is a part of your story.',
      image: two,
      secondaryImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=800&fit=crop'
    },
    {
      id: '03',
      title: 'Detailed Drawings & Approval',
      description: 'We turn your dream into a solid plan. Once you love every detail, we finalize the drawings and sign the contract, officially beginning the creation of your story.',
      image: three,
      secondaryImage: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=800&fit=crop'
    },
    {
      id: '04',
      title: 'Production & Quality Check',
      description: 'Behind the scenes, our skilled artisans begin to craft the elements of your home. Each piece is meticulously made in-house and passes a rigorous quality check, ensuring every detail is perfect for your story.',
      image: four,
      secondaryImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=800&fit=crop'
    },
    {
      id: '05',
      title: 'Installation & Unboxing',
      description: "The moment your story becomes a reality. Our professional team installs every piece with precision, transforming your space into the home you've always imagined.",
      image: five,
      secondaryImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=800&fit=crop'
    },
    {
      id: '06',
      title: 'Handover & Walk-through',
      description: 'This is your moment. We do a final walk-through with you to ensure every detail is just right before handing over the keys to your new home and all the warranty details.',
      image: six,
      secondaryImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=800&fit=crop'
    },
    {
      id: '07',
      title: 'Post-Handover Support',
      description: 'Breathe new life into existing spaces with our comprehensive renovation services. We specialize in updating and modernizing homes and commercial spaces while preserving their unique character and maximizing their potential.',
      image: seven,
      secondaryImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=800&fit=crop'
    }
  ];

  // Auto-cycle through services every 3 seconds on desktop
  useEffect(() => {
    if (!isUserInteracting && window.innerWidth >= 1024) {
      const interval = setInterval(() => {
        setHoveredIndex((prev) => (prev + 1) % services.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isUserInteracting, services.length]);

  const handleMouseEnter = (index: number) => {
    setIsUserInteracting(true);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setIsUserInteracting(false);
  };

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-0 overflow-hidden">
      <div className="max-w-none w-full h-screen overflow-y-auto lg:overflow-hidden">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-5 h-full">
          {/* Left Side - Service List & Description */}
          <div
            className="bg-stone-50 flex flex-col justify-center px-8 xl:px-16 pt-24 pb-8 xl:pt-16 xl:pb-16 col-span-2"
            onMouseLeave={handleMouseLeave}
          >
            <div className="space-y-1.5 xl:space-y-4 mb-4 xl:mb-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`flex items-center gap-3 xl:gap-6 py-1 xl:py-3 transition-all duration-300 ${hoveredIndex === index
                    ? 'text-gray-800'
                    : 'text-gray-400 hover:text-gray-600'
                    }`}
                >
                  <div className="text-sm font-light min-w-[2rem]">
                    {service.id}
                  </div>

                  <div
                    className="flex-1"
                  >
                    <h3
                      className="text-sm lg:text-sm xl:text-xl font-light cursor-pointer inline-block"
                      onMouseEnter={() => handleMouseEnter(index)}
                    >
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Description Paragraph */}
            <div className="max-w-xs xl:max-w-lg">
              <p className="text-gray-600 text-xs xl:text-base leading-relaxed font-light">
                {services[hoveredIndex].description}
              </p>
            </div>
          </div>

          {/* Right Side - Scroll Up Image Display */}
          <div className="relative overflow-hidden bg-gray-100 col-span-3 p-4 xl:p-12">
            <div className="relative h-full w-full overflow-hidden">
              <div
                className="h-full w-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateY(-${hoveredIndex * 100}%)` }}
              >
                {services.map((service, index) => (
                  <div key={service.id} className="h-full w-full flex-shrink-0 relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      priority={index === 0}
                      loading={index === 0 ? undefined : 'lazy'}
                      quality={75}
                      placeholder="blur"
                      className="object-cover"
                      style={{ backfaceVisibility: 'hidden' }}
                    />
                    <div className="absolute inset-0 bg-black/5"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden h-full flex flex-col">
          {/* Service Navigation */}
          <div className="bg-stone-50 flex-1 px-4 sm:px-6 md:px-8 py-8 overflow-y-auto">
            <div className="space-y-3 sm:space-y-4 mb-6">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`flex items-center gap-3 sm:gap-4 py-2 sm:py-3 cursor-pointer transition-all duration-300 ${hoveredIndex === index
                    ? 'text-gray-800'
                    : 'text-gray-400'
                    }`}
                  onClick={() => setHoveredIndex(index)}
                >
                  <div className="text-xs sm:text-sm font-light min-w-[1.5rem] sm:min-w-[2rem]">
                    {service.id}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-light">
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Description for Mobile */}
            <div className="max-w-none">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                {services[hoveredIndex].description}
              </p>
            </div>
          </div>

          {/* Image Display for Mobile */}
          <div className="relative h-48 sm:h-64 md:h-80 bg-gray-100 p-4">
            <div className="relative h-full w-full">
              <Image
                src={services[hoveredIndex].image}
                alt={services[hoveredIndex].title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 60vw"
                loading="lazy"
                quality={75}
                placeholder="blur"
                className="object-cover transition-all duration-700 ease-out"
                style={{ backfaceVisibility: 'hidden' }}
              />
              <div className="absolute inset-0 bg-black/5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesShowcase;