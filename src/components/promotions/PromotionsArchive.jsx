import React from "react";
import { useSelector } from "react-redux";
import { HiOutlineCalendar } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const brand = "#30B34A";

const archivePromotions = [
  {
    id: 101,
    imageUrl:
      "https://images.unsplash.com/photo-1515165562835-c4c9e0737eaa?q=80&w=1200&auto=format&fit=crop",
    titleUz: "Yangi yil mega aksiyasi 2024",
    titleRu: "Новогодняя мега-акция 2024",
    descriptionUz:
      "Yangi yil munosabati bilan maishiy texnikaga katta chegirmalar va bonuslar taqdim etildi.",
    descriptionRu:
      "В честь Нового года были предоставлены большие скидки и бонусы на бытовую технику.",
    until: "10.01.2024 gacha",
  },
  {
    id: 102,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    titleUz: "Bahorgi texno-festival",
    titleRu: "Весенний техно-фестиваль",
    descriptionUz:
      "Televizor, kir yuvish mashinasi va muzlatkichlarga maxsus bahorgi takliflar amal qilgan.",
    descriptionRu:
      "На телевизоры, стиральные машины и холодильники действовали специальные весенние предложения.",
    until: "30.04.2024 gacha",
  },
];

const PromotionsArchive = () => {
  const lang = useSelector((s) => s.language.current);
  const navigate = useNavigate();

  const title = lang === "ru" ? "Архив акций" : "Arxiv aksiyalar";
  const detailsLabel = lang === "ru" ? "ПОДРОБНЕЕ" : "BATAFSIL";

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-8 text-center md:text-left">
          <h2
            className="text-2xl md:text-3xl font-black tracking-tight"
            style={{ color: brand }}
          >
            {title}
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-500">
            {lang === "ru"
              ? "Здесь отображаются завершённые акции."
              : "Bu yerda muddati tugagan aksiyalar ko‘rsatiladi."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {archivePromotions.map((promo) => {
            const titleText = lang === "ru" ? promo.titleRu : promo.titleUz;
            const desc =
              lang === "ru" ? promo.descriptionRu : promo.descriptionUz;

            return (
              <article
                key={promo.id}
                className="
                  bg-white rounded-3xl
                  overflow-hidden
                  shadow-sm hover:shadow-xl
                  transition-all duration-500
                  group border border-gray-100
                  flex flex-col
                "
              >
                <div className="relative aspect-16/10 overflow-hidden">
                  <img
                    src={promo.imageUrl}
                    alt={titleText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <span className="absolute top-3 left-3 rounded-full bg-black/70 text-white text-[10px] font-semibold uppercase tracking-[0.18em] px-3 py-1">
                    {lang === "ru" ? "Архив" : "Arxiv"}
                  </span>
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-2 group-hover:text-[#30B34A] transition-colors">
                    {titleText}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
                    {desc}
                  </p>

                  <div className="mt-auto pt-3 flex items-center justify-between border-t border-gray-100 text-[11px] sm:text-xs text-slate-500">
                    <span className="inline-flex items-center gap-2 font-semibold">
                      <HiOutlineCalendar className="text-base text-slate-400" />
                      {promo.until}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        navigate(`/aksiyalar/${promo.id}`, { state: { promo } })
                      }
                      className="
                        inline-flex items-center gap-2
                        font-bold uppercase tracking-[0.2em]
                        text-[#30B34A] text-[10px] sm:text-xs
                      "
                    >
                      {detailsLabel}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PromotionsArchive;
