import React from "react";
import {HiOutlineArrowRight, HiOutlineCalendar, HiOutlineEye} from "react-icons/hi";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {newsData} from "../data/newsData";

const NewsSection = ({hideSeeAll = false, hideTitle = false}) => {
    const lang = useSelector((s) => s.language.current);
    const navigate = useNavigate();

    const isRu = lang === "ru";
    const title = isRu ? "Новости" : "Yangiliklar";
    const seeAllLabel = isRu ? "СМОТРЕТЬ ВСЕ" : "BARCHASINI KO‘RISH";
    const readMoreLabel = isRu ? "ПОДРОБНЕЕ" : "BATAFSIL";

    return (
        <section className="py-10 sm:py-12 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {!hideTitle && (
                    <div
                        className="
              flex flex-col gap-6
              sm:flex-row sm:items-center sm:justify-between
              mb-10 sm:mb-14
              px-1 sm:px-2
            "
                    >
                        <div>
                            <h2
                                className="
                  font-black tracking-tight text-[#30B34A]
                  text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                "
                            >
                                {title}
                            </h2>
                            <div
                                className="
                  mt-3 h-1.5 sm:h-2
                  w-20 sm:w-24 md:w-28
                  rounded-full shadow-md shadow-green-200
                  bg-[#30B34A]
                "
                            />
                        </div>

                        {/* Desktop/tablet see-all button */}
                        {!hideSeeAll && (
                            <button
                                type="button"
                                onClick={() => navigate("/yangiliklar")}
                                className="
                  hidden md:inline-flex
                  items-center gap-4
                  bg-[#30B34A] text-white
                  px-8 lg:px-10 py-4 lg:py-5
                  rounded-3xl
                  font-black text-lg lg:text-xl
                  shadow-xl hover:bg-green-600
                  transition-all
                "
                            >
                                <span>{seeAllLabel}</span>
                                <HiOutlineArrowRight className="text-base lg:text-lg" />
                            </button>
                        )}
                    </div>
                )}

                <div
                    className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8 md:gap-10 lg:gap-14
          "
                >
                    {newsData.map((item) => {
                        const t = isRu ? item.titleRu : item.titleUz;
                        const desc = isRu ? item.descRu : item.descUz;

                        return (
                            <article
                                key={item.id}
                                className="cursor-pointer group flex flex-col"
                                onClick={() =>
                                    navigate(`/yangilik/${item.id}`, {
                                        state: {item},
                                    })
                                }
                            >
                                <div className="relative mb-5 sm:mb-6 rounded-3xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow">
                                    <div className="aspect-4/3 w-full overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={t}
                                            className="
                        w-full h-full object-cover
                        transition-transform duration-700
                        group-hover:scale-105
                      "
                                        />
                                    </div>

                                    <span
                                        className="
                      absolute top-4 left-4
                      bg-[#30B34A] text-white
                      px-4 sm:px-6 py-1.5 sm:py-2
                      rounded-full
                      text-xs sm:text-sm font-black tracking-wide
                      shadow-md
                    "
                                    >
                                        {item.category.toUpperCase()}
                                    </span>
                                </div>

                                <div
                                    className="
                    flex flex-wrap items-center gap-3 sm:gap-6
                    text-xs sm:text-sm font-semibold text-gray-500
                    mb-2 sm:mb-3
                  "
                                >
                                    <span className="flex items-center gap-1.5 sm:gap-2">
                                        <HiOutlineCalendar className="text-base sm:text-lg" />
                                        {item.date}
                                    </span>
                                    <span className="flex items-center gap-1.5 sm:gap-2">
                                        <HiOutlineEye className="text-base sm:text-lg" />
                                        {item.views}
                                    </span>
                                </div>

                                <h3
                                    className="
                    font-black text-[#30B34A]
                    text-xl sm:text-2xl md:text-3xl
                    mb-2.5 sm:mb-3
                    group-hover:underline
                  "
                                >
                                    {t}
                                </h3>
                                <p
                                    className="
                    text-gray-600
                    text-sm sm:text-base md:text-lg
                    leading-relaxed
                    line-clamp-3
                    mb-4 sm:mb-6
                  "
                                >
                                    {desc}
                                </p>
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate(`/yangilik/${item.id}`, {state: {item}});
                                    }}
                                    className="inline-flex items-center gap-2 text-[#30B34A]font-semibold uppercase text-[11px] sm:text-xs tracking-[0.22em] group"
                                >
                                    {readMoreLabel}
                                    <HiOutlineArrowRight className=" text-xs sm:text-sm group-hover translate-x-1 transition-transform" />
                                </button>
                            </article>
                        );
                    })}
                </div>

                {!hideSeeAll && (
                    <div className="mt-6 flex justify-center md:hidden">
                        <button
                            type="button"
                            onClick={() => navigate("/yangiliklar")}
                            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-semibold text-white shadow-md hover:shadow-lg transition-all bg-[#30B34A] "
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

export default NewsSection;
