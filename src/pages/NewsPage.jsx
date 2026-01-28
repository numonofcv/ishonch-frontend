import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";
import NewsSection from "../components/home/NewsSection";

const brand = "#30B34A";

const NewsPage = () => {
  const lang = useSelector((s) => s.language.current);
  const isRu = lang === "ru";

  const title = isRu ? "Новости" : "Yangiliklar";
  const subtitle = isRu
    ? "Самые свежие новости и события от ISHONCH."
    : "ISHONCH tarmog‘idagi eng so‘nggi yangiliklar va voqealar.";
  const breadcrumbHome = isRu ? "Главная" : "Bosh sahifa";
  const breadcrumbNews = isRu ? "Новости" : "Yangiliklar";
  const statusLabel = isRu
    ? "АКТУАЛЬНЫЕ НОВОСТИ"
    : "AMALDAGI YANGILIKLAR";

  return (
    <main className="bg-slate-50 min-h-screen pb-20">

      <section className="border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10">

          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mb-5">
            <Link
              to="/"
              className="hover:text-[#30B34A] font-medium transition-colors"
            >
              {breadcrumbHome}
            </Link>
            <HiChevronRight className="text-slate-300 text-xs" />
            <span className="font-semibold text-slate-500">
              {breadcrumbNews}
            </span>
          </nav>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1
                className="
                  text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                  font-black tracking-tight
                "
                style={{ color: brand }}
              >
                {title}
              </h1>
              <p className="mt-3 text-sm sm:text-base text-slate-500 font-medium max-w-xl">
                {subtitle}
              </p>
            </div>

            <div className="mt-2 md:mt-0 flex justify-start md:justify-end">
              <div
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  bg-emerald-50 px-5 py-2.5
                  text-[10px] sm:text-xs
                  font-black uppercase tracking-[0.2em]
                  text-emerald-700
                  shadow-sm
                "
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.25)]" />
                {statusLabel}
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsSection hideSeeAll hideTitle />
    </main>
  );
};

export default NewsPage;
