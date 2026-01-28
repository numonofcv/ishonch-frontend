import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const slides = [
  {
    id: 1,
   imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=1920&h=600",
    title: {
      uz: "Sifatli texnika — ishonchli hamkor!",
      ru: "Качественная техника — надёжный партнёр!",
    },
    description: {
      uz: "Oʻzbekiston bo‘ylab 120 dan ortiq do‘konlarimizda sizni kutamiz.",
      ru: "Мы ждём вас более чем в 120 наших магазинах по всему Узбекистану.",
    },
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1920&h=600",
    title: {
      uz: "Muddati to‘lov endi yanada qulay!",
      ru: "Рассрочка стала ещё удобнее!",
    },

    description: {
      uz: "Faqat pasport orqali, boshlangʻich toʻlovsiz barcha mahsulotlar.",
      ru: "Только по паспорту, без первоначального взноса на все товары.",
    },
  },
 
];

const AUTO_PLAY_MS = 6000;

const HeroSlider = () => {
  const lang = useSelector((s) => s.language.current); 
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY_MS);
    return () => clearInterval(id);
  }, []);

  const goNext = () => setActive((prev) => (prev + 1) % slides.length);
  const goPrev = () =>
    setActive((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-100 md:h-162.5 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === active ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            >

              <div className="h-full w-full bg-linear-to-r from-black/70 via-black/40 to-black/10">
                <div className="mx-auto flex h-full max-w-7xl items-center px-4 md:px-8">
                  <div className="max-w-360 mx-auto w-full px-8 text-white">
                    <h1 className="text-4xl md:text-8xl font-black mb-8 max-w-4xl leading-tight tracking-tighter">
                      {slide.title[lang]}
                    </h1>
                    <p className="text-xl md:text-3xl font-medium opacity-90 max-w-2xl leading-relaxed">
                      {slide.description[lang]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={goPrev}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white text-2xl hover:bg-black/60 transition-colors"
        >
          ‹
        </button>
        <button
          onClick={goNext}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white text-2xl hover:bg-black/60 transition-colors"
        >
          ›
        </button>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setActive(index)}
              className={`h-2 rounded-full transition-all ${
                index === active ? "w-6 bg-white" : "w-2 bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
