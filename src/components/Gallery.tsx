import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import gallery1 from "../assets/images/gallery-1.jpeg";
import gallery2 from "../assets/images/gallery-2.jpeg";
import gallery3 from "../assets/images/gallery-3.jpeg";
import gallery4 from "../assets/images/gallery-14.jpeg";
import gallery5 from "../assets/images/gallery-5.jpeg";
import gallery6 from "../assets/images/gallery-17.jpeg";
import gallery7 from "../assets/images/gallery-7.jpeg";
import gallery8 from "../assets/images/gallery-8.jpeg";
import gallery9 from "../assets/images/gallery-9.jpeg";
import gallery10 from "../assets/images/gallery-10.jpeg";
import gallery11 from "../assets/images/gallery-11.jpeg";
import gallery12 from "../assets/images/gallery-12.jpeg";
import gallery13 from "../assets/images/gallery-13.jpeg";
import gallery14 from "../assets/images/gallery-4.jpeg";
import gallery15 from "../assets/images/gallery-15.jpeg";
import gallery16 from "../assets/images/gallery-16.jpeg";
import gallery17 from "../assets/images/gallery-17.jpeg";
import gallery18 from "../assets/images/gallery-18.jpeg";
import gallery19 from "../assets/images/gallery-19.jpeg";
import gallery20 from "../assets/images/gallery-20.jpeg";

const images = [
  { id: 1, src: gallery1, alt: "A memory with my department head dean Mr. Ashenafi at my 4th year" },
  { id: 2, src: gallery2, alt: "An unforgattable memory with the Dean of CNCS Addis Ababa University Professor. Tilye Feyissa" },
  { id: 3, src: gallery3, alt: "The photo of the final year project defense with my examiner and also lecturer Dr. Mekonnen" },
  { id: 4, src: gallery4, alt: "I was entertaining the 80+ cultures of Ethiopia during cultural event at the university" },
  { id: 5, src: gallery5, alt: "The final year project defense presentation memory with my teams and the examiner Dr. Mekonnen" },
  { id: 6, src: gallery6, alt: "The Graduation ceremony with my friends at Addis Ababa University" },
  { id: 7, src: gallery7, alt: "The graduation ceremony with my Computer Science department 2024 batch at Addis Ababa University" },
  { id: 8, src: gallery8, alt: "A memory with folks at the graduation ceremony" },
  { id: 9, src: gallery9, alt: "Presenting the final year project defense" },
  { id: 10, src: gallery10, alt: "Culture day celebration" },
  { id: 11, src: gallery11, alt: "Culture day celebration in which I was leading the event" },
  { id: 12, src: gallery12, alt: "Ethiopianism showcasing traditional attire" },
  { id: 13, src: gallery13, alt: "A moment of joy and celebration" },
  { id: 14, src: gallery14, alt: "The final day of ERP training at the lovely place--Addis Software/Swenetix" },
  { id: 15, src: gallery15, alt: "A panel discussion on software development" },
  { id: 16, src: gallery16, alt: "A memory of my days at Guba Technology as a full stack developer" },
  { id: 17, src: gallery17, alt: "Unforgettable moments with folks" },
  { id: 18, src: gallery18, alt: "A memory of ERP training sessions at Addis Software/Swenetix--one of the lovliest place in my time" },
  { id: 19, src: gallery19, alt: "A memory of joy and celebration for the implmentation of ERP project at Addis Software/Swenetix" },
  { id: 20, src: gallery20, alt: "A memory of collaboration and teamwork during the ERP project" },
];

export const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();

    setTouchStart(0);
    setTouchEnd(0);
  };

  const getSlideIndex = (offset: number) => {
    return (currentIndex + offset + images.length) % images.length;
  };

  return (
    <div className="w-full min-h-screen bg-background py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-16 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
          Gallery
        </h2>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
            Explore my curated collection through an elegant sliding experience
          </p>
        </header>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex items-center justify-center gap-4 md:gap-6 px-4 md:px-12 py-8">
              {/* Previous slide peek */}
              <div className="hidden md:block w-1/4 opacity-40 transition-all duration-500 hover:opacity-60">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                  <img
                    src={images[getSlideIndex(-1)].src}
                    alt={images[getSlideIndex(-1)].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Current slide */}
              <div className="w-full md:w-1/2 animate-slide-in">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500">
                  <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-6 text-center">
                  <p className="text-lg text-white font-medium">
                    {images[currentIndex].alt}
                  </p>
                  <p className="text-sm text-white mt-2">
                    {currentIndex + 1} / {images.length}
                  </p>
                </div>
              </div>

              {/* Next slide peek */}
              <div className="hidden md:block w-1/4 opacity-40 transition-all duration-500 hover:opacity-60">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                  <img
                    src={images[getSlideIndex(1)].src}
                    alt={images[getSlideIndex(1)].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 
                     bg-[#6c80e4] hover:bg-[#5067d7]
                     text-white
                     w-12 h-12 md:w-14 md:h-14 rounded-full 
                     flex items-center justify-center
                     shadow-lg hover:shadow-2xl
                     transition-all duration-300 
                     hover:scale-110 active:scale-95
                     disabled:opacity-50 disabled:cursor-not-allowed
                     focus:outline-none focus:ring-2 focus:ring-[#5166ac] focus:ring-offset-2
                     z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 
                     bg-[#4861dd] hover:bg-[#182a85]
                     text-white
                     w-12 h-12 md:w-14 md:h-14 rounded-full 
                     flex items-center justify-center
                     shadow-lg hover:shadow-2xl
                     transition-all duration-300 
                     hover:scale-110 active:scale-95
                     disabled:opacity-50 disabled:cursor-not-allowed
                     focus:outline-none focus:ring-2 focus:ring-[#243c8a] focus:ring-offset-2
                     z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsTransitioning(false), 600);
                  }
                }}
                className={`transition-all duration-300 rounded-full
                  ${
                    index === currentIndex
                      ? "w-8 h-2 bg-[#1486ac]"
                      : "w-2 h-2 bg-[#6579db] hover:bg-[#1c2b7a]/50"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-12 text-center text-sm text-white animate-fade-in">
          <p>Use arrow keys, swipe, or click buttons to navigate</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
