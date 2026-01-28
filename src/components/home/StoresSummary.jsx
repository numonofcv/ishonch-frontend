import React from "react";
import { useSelector } from "react-redux";
import {
  HiOutlineInformationCircle,
  HiOutlineLocationMarker,
  HiOutlineCreditCard,
  HiOutlineTruck,
} from "react-icons/hi";

const brand = "#30B34A";

const StoresSummary = () => {
  const lang = useSelector((s) => s.language.current);

  const title =
    lang === "ru" ? "Магазины ISHONCH" : "ISHONCH do‘konlari";

  const paragraph1 =
    lang === "ru"
      ? "ISHONCH — это одна из крупнейших торговых сетей Узбекистана, предоставляющая возможность покупать бытовую технику, электронику и товары для дома в рассрочку."
      : "ISHONCH – muddatli to‘lovga maishiy texnika, elektronika va uy jihozlarini xarid qilish imkoniyatini taqdim etuvchi O‘zbekistondagi eng yirik savdo do‘konlar tarmog‘i.";

  const paragraph2 =
    lang === "ru"
      ? "В магазинах представлено более 7000 видов товаров."
      : "Do‘konlarda 7000 xildan ortiq mahsulot turlari taqdim etilgan.";

  const stats = [
    {
      id: 1,
      icon: <HiOutlineLocationMarker className="text-5xl text-white" />,
      value: "120+",
      labelUz: "DO‘KONLAR TARMOQ I",
      labelRu: "СЕТЬ МАГАЗИНОВ",
    },
    {
      id: 2,
      icon: <HiOutlineCreditCard className="text-5xl text-white" />,
      value: "7000+",
      labelUz: "MAHSULOT TURLARI",
      labelRu: "ВИДОВ ТОВАРОВ",
    },
    {
      id: 3,
      icon: <HiOutlineTruck className="text-5xl text-white" />,
      valueUz: "Ochiq",
      valueRu: "Открыто",
      labelUz: "BEPUL YETKAZISH VA O‘RNATISH",
      labelRu: "БЕСПЛАТНАЯ ДОСТАВКА И УСТАНОВКА",
    },
  ];

  return (
    <section className="py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
    
          <div className="lg:w-1/2 space-y-4">
            <div className="flex items-center gap-1">
              <div
                className="flex h-15 w-15 items-center justify-center rounded-full"
            
              >
                <HiOutlineInformationCircle
                  className="text-5xl"
                  style={{ color: brand }}
                />
              </div>
              <h2
                className="text-2xl md:text-5xl font-bold tracking-tight "
                style={{ color: brand }}
              >
                {title}
              </h2>
            </div>

            <p className="space-y-8 text-xl text-gray-600 leading-relaxed font-bold">
              {paragraph1}
            </p>
            <p className="space-y-8 text-xl text-gray-600 leading-relaxed font-bold">
              {paragraph2}
            </p>
          </div>

          <div className="lg:w-1/2 space-y-4">
            {stats.map((item) => {
              const value =
                item.value ??
                (lang === "ru" ? item.valueRu : item.valueUz);
              const label =
                lang === "ru" ? item.labelRu : item.labelUz;

              return (
                <div
                  key={item.id}
                  className="bg-white p-10 rounded-3xl shadow-md border border-gray-100 flex items-center gap-12 group hover:border-[#30B34A] hover:shadow-xl transition-all"
                >
    
                  <div
                    className="w-20 h-20 bg-[#30B34A] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-green-100"
                    style={{ backgroundColor: brand }}
                  >
                    {item.icon}
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xl md:text-2xl font-extrabold text-slate-900">
                      {value}
                    </span>
                    <span className="text-[11px] md:text-xs font-semibold tracking-wide text-slate-500 uppercase">
                      {label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoresSummary;
