import React from "react";
import { useSelector } from "react-redux";
import { HiOutlineArrowRight, HiOutlineCalendar } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const brand = "#30B34A";

const promotions = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?q=80&w=1600&auto=format&fit=crop",
    titleUz: "Yilning ilk chegirmalari!",
    titleRu: "Первые скидки года!",
    descriptionUz:
      "Barcha maishiy texnika mahsulotlariga 20% gacha chegirmalar va maxsus takliflar.",
    descriptionRu:
      "Скидки до 20% на всю бытовую технику и специальные предложения.",
    until: "31.05.2025 gacha",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1200&auto=format&fit=crop",
    titleUz: "Noutbuklar aksiyasi",
    titleRu: "Акция на ноутбуки",
    descriptionUz:
      "Talabalar uchun noutbuk xarid qilganda sichqoncha va sumka bepul taqdim etiladi.",
    descriptionRu:
      "При покупке ноутбука студентам — мышь и сумка в подарок.",
    until: "15.06.2025 gacha",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    titleUz: "Smartfonlar uchun maxsus taklif",
    titleRu: "Специальное предложение на смартфоны",
    descriptionUz:
      "Yangi flagmanlar endi 24 oygacha imtiyozli to‘lov asosida xarid qilish mumkin.",
    descriptionRu:
      "Новые флагманы теперь можно купить в рассрочку до 24 месяцев.",
    until: "20.06.2025 gacha",
  },
];

const Promotions = ({ hideSeeAll = false, hideTitle = false }) => {
  const lang = useSelector((s) => s.language.current);
  const navigate = useNavigate();

  const title = lang === "ru" ? "Акции" : "Aksiyalar";
  const seeAllLabel = lang === "ru" ? "СМОТРЕТЬ ВСЕ" : "BARCHASINI KO‘RISH";
  const detailsLabel = lang === "ru" ? "ПОДРОБНЕЕ" : "BATAFSIL";

  return (
    <section className="py-8 sm:py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
 
        {!hideTitle && (
          <div
            className="
              flex flex-col gap-6
              sm:flex-row sm:items-center sm:justify-between
              mb-10 sm:mb-14 lg:mb-20
            "
          >
            <div>
              <h2
                className="
                  text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                  font-black tracking-tight
                  mb-3
                "
                style={{ color: brand }}
              >
                {title}
              </h2>
              <div
                className="
                  w-20 sm:w-24
                  h-1.5 sm:h-2
                  rounded-full shadow-lg shadow-green-100
                "
                style={{ backgroundColor: brand }}
              />
            </div>

            {!hideSeeAll && (
              <button
                type="button"
                onClick={() => navigate("/aksiyalar")}
                className="
                  hidden md:inline-flex
                  items-center gap-4
                  px-8 py-4
                  rounded-3xl
                  font-black text-lg lg:text-xl
                  text-white shadow-xl
                  hover:shadow-2xl hover:-translate-y-0.5
                  transition-all
                  group
                "
                style={{ backgroundColor: brand }}
              >
                <span>{seeAllLabel}</span>
                <HiOutlineArrowRight className="text-base" />
              </button>
            )}
          </div>
        )}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6 sm:gap-8 lg:gap-12
          "
        >
          {promotions.map((promo) => {
            const titleText = lang === "ru" ? promo.titleRu : promo.titleUz;
            const desc =
              lang === "ru" ? promo.descriptionRu : promo.descriptionUz;

            return (
              <article
                key={promo.id}
                className="
                  bg-white rounded-3xl lg:rounded-4xl
                  overflow-hidden
                  shadow-sm hover:shadow-2xl
                  transition-all duration-500
                  group border border-gray-100
                  flex flex-col
                "
              >

                <div className="relative aspect-16/10 overflow-hidden cursor-pointer">
                  <img
                    src={promo.imageUrl}
                    alt={titleText}
                    className="
                      w-full h-full object-cover
                      group-hover:scale-105
                      transition-transform duration-1000
                    "
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-5 sm:p-6 lg:p-8 flex flex-col flex-1">
                  <h3
                    className="
                      text-xl sm:text-2xl lg:text-3xl
                      font-black text-gray-900 mb-4 lg:mb-6
                      leading-snug lg:leading-tight
                      group-hover:text-[#30B34A]
                      transition-colors
                      cursor-pointer
                    "
                  >
                    {titleText}
                  </h3>
                  <p
                    className="
                      text-sm sm:text-base lg:text-lg
                      text-gray-500 font-semibold
                      mb-6 lg:mb-10
                      leading-relaxed
                      line-clamp-3
                      opacity-80
                    "
                  >
                    {desc}
                  </p>

                  <div
                    className="
                      mt-auto
                      flex items-center justify-between
                      gap-3
                      pt-5 lg:pt-6
                      border-t border-gray-100
                      flex-wrap
                    "
                  >
                    <button
                      type="button"
                      onClick={() =>
                        navigate(`/aksiyalar/${promo.id}`, {
                          state: { promo },
                        })
                      }
                      className="
                        inline-flex items-center gap-2
                        text-xs sm:text-sm
                        font-bold uppercase
                        tracking-[0.22em]
                        cursor-pointer
                        transition-all
                        group/btn
                      "
                      style={{ color: brand }}
                    >
                      {detailsLabel}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-right stroke-2"
                        aria-hidden="true"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>

                    <div
                      className="
                        flex items-center gap-2 sm:gap-3
                        bg-gray-50
                        px-3 py-2 sm:px-4 sm:py-2.5
                        rounded-xl sm:rounded-2xl
                        text-[10px] sm:text-xs
                        font-black text-gray-500
                        uppercase tracking-[0.16em]
                      "
                    >
                      <HiOutlineCalendar className="text-base sm:text-lg text-slate-500" />
                      <span className="font-medium text-slate-500">
                        {promo.until}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {!hideSeeAll && !hideTitle && (
          <div className="mt-6 flex justify-center md:hidden">
            <button
              type="button"
              onClick={() => navigate("/aksiyalar")}
              className="
                inline-flex items-center gap-2
                rounded-full px-5 py-2.5
                text-[11px] font-semibold text-white
                shadow-md hover:shadow-lg
                transition-all cursor-pointer
              "
              style={{ backgroundColor: brand }}
            >
              <span>{seeAllLabel}</span>
              <HiOutlineArrowRight className="text-sm" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Promotions;
