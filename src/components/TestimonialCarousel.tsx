import { motion } from "framer-motion";
import { fadeUp } from "../types/animations";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { testimonials } from "../data/testimonial";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useState } from "react";

export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 30 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <section className="bg-[#F7F8F9] py-10 md:py-20 relative">
      <div className="max-w-[1600px] mx-auto px-5 md:px-10">
        <motion.h2
          {...fadeUp}
          className="text-2xl md:text-4xl text-center font-semibold mb-10"
        >
          What our clients say
        </motion.h2>

        <div className="relative md:px-12">
          {/* CAROUSEL */}
          <motion.div {...fadeUp} ref={sliderRef} className="keen-slider">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="keen-slider__slide bg-white p-6 rounded shadow-md flex flex-col items-center text-center"
              >
                <p className="text-gray-700 italic mb-4">“{t.comment}”</p>
                <h4 className="font-semibold">{t.name}</h4>
                {t.position && (
                  <p className="text-sm text-gray-500">{t.position}</p>
                )}
              </div>
            ))}
          </motion.div>

          {/* ROW LEFT */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 shadow-md rounded-full p-2 hover:bg-gray-100 transition hidden md:block"
            aria-label="Previous"
          >
            <ArrowBackIosNewOutlinedIcon fontSize="small" />
          </button>

          {/* ROW RIGHT */}
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 shadow-md rounded-full p-2 hover:bg-gray-100 transition hidden md:block"
            aria-label="Next"
          >
            <ArrowForwardIosOutlinedIcon fontSize="small" />
          </button>
        </div>

        {/* PAGINATION DOTS*/}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === idx
                  ? "bg-[var(--color-primary)]"
                  : "bg-blue-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
