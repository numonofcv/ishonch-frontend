import React from "react";
import {HiOutlineArrowRight, HiOutlineCalendar, HiOutlineEye} from "react-icons/hi";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import { newsData } from "../data/newsData";

const NewsSection = ({hideSeeAll = false, hideTitle = false}) => {
    const lang = useSelector((s) => s.language.current);
    const navigate = useNavigate();

    const isRu = lang === "ru";
    const title = isRu ? "Новости" : "Yangiliklar";
    const seeAllLabel = isRu ? "СМОТРЕТЬ ВСЕ" : "BARCHASINI KO‘RISH";
    const readMoreLabel = isRu ? "ПОДРОБНЕЕ" : "BATAFSIL";

    return (
        <section className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6">

                {!hideTitle && (
                    <div className="flex justify-between items-center mb-14 px-2">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-[#30B34A]">{title}</h2>
                            <div className="w-28 h-2 bg-[#30B34A] rounded-full mt-3 shadow-md shadow-green-200"></div>
                        </div>

                        {!hideSeeAll && (
                            <button
                                onClick={() => navigate("/yangiliklar")}
                                className="group flex items-center gap-5 bg-[#30B34A] text-white px-10 py-5 rounded-3xl 
                           font-black text-xl shadow-xl hover:bg-green-600 transition-all"
                            >
                                {seeAllLabel}
                                <HiOutlineArrowRight className="text-lg" />
                            </button>
                        )}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
                    {newsData.map((item) => {
                        const t = isRu ? item.titleRu : item.titleUz;
                        const desc = isRu ? item.descRu : item.descUz;

                        return (
                            <article
                                key={item.id}
                                className="cursor-pointer group"
                                onClick={() => navigate(`/yangilik/${item.id}`, {state: {item}})}
                            >
                                <div className="relative mb-6">
                                    <img
                                        src={item.image}
                                        alt={t}
                                        className="rounded-3xl w-full h-64 object-cover shadow-md group-hover:shadow-xl transition-all"
                                    />

                                    <span className="absolute top-4 left-4 bg-[#30B34A] text-white px-6 py-2 rounded-full text-sm font-black tracking-wide shadow-md">
                                        {item.category.toUpperCase()}
                                    </span>
                                </div>

                                <div className="flex items-center gap-6 text-gray-500 text-sm font-semibold mb-3">
                                    <span className="flex items-center gap-2">
                                        <HiOutlineCalendar className="text-xl" />
                                        {item.date}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <HiOutlineEye className="text-xl" />
                                        {item.views}
                                    </span>
                                </div>

                                <h3 className="text-3xl font-black text-[#30B34A] mb-3 group-hover:underline">{t}</h3>

                                <p className="text-gray-600 text-lg leading-relaxed line-clamp-3 mb-6">{desc}</p>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate(`/yangilik/${item.id}`, {state: {item}});
                                    }}
                                    className="flex items-center gap-2 text-[#30B34A] font-semibold uppercase tracking-[0.25em] group"
                                >
                                    {readMoreLabel}
                                    <HiOutlineArrowRight className="text-base group-hover:translate-x-1 transition-all" />
                                </button>
                            </article>
                        );
                    })}
                </div>

                {!hideSeeAll && (
                    <div className="mt-6 flex justify-center md:hidden">
                        <button
                            onClick={() => navigate("/yangiliklar")}
                            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold text-white shadow-md hover:shadow-lg transition-all"
                            style={{backgroundColor: "#30B34A"}}
                        >
                            <span>{seeAllLabel}</span>
                            <HiOutlineArrowRight className="text-base" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default NewsSection;
