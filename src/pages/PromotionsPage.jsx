// src/pages/PromotionsPage.jsx
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiChevronRight, HiChevronDown, HiChevronUp } from "react-icons/hi";
import Promotions from "../components/home/Promotions";
import PromotionsArchive from "../components/promotions/PromotionsArchive";

const brand = "#30B34A";

const PromotionsPage = () => {
  const lang = useSelector((s) => s.language.current);
  const [showArchive, setShowArchive] = useState(false);

  const toggleArchive = () => setShowArchive((prev) => !prev);

  const title = lang === "ru" ? "Акции" : "Aksiyalar";
  const subtitle =
    lang === "ru"
      ? "Самые выгодные предложения и специальные акции для клиентов."
      : "Mijozlar uchun eng foydali takliflar va maxsus aksiyalar.";
  const breadcrumbHome = lang === "ru" ? "Главная" : "Bosh sahifa";
  const breadcrumbPromos = lang === "ru" ? "Акции" : "Aksiyalar";
  const statusLabel =
    lang === "ru"
      ? "ДЕЙСТВУЮЩИЕ ПРЕДЛОЖЕНИЯ"
      : "AMALDAGI TAKLIFLAR";

  const archiveOpenLabel =
    lang === "ru" ? "Смотреть архив акций" : "Arxiv aksiyalarni ko‘rish";
  const archiveCloseLabel =
    lang === "ru" ? "Скрыть архив акций" : "Arxiv aksiyalarni yopish";

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
              {breadcrumbPromos}
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

    <Promotions hideSeeAll hideTitle />

      {!showArchive && (
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mt-10 flex justify-center">
            <button
              onClick={toggleArchive}
              className="
                flex items-center gap-3
                bg-[#30B34A] text-white
                px-10 py-5
                rounded-3xl font-black text-lg
                shadow-xl
                hover:bg-green-600 transition-all
                active:scale-95
              "
            >
              {archiveOpenLabel}
              <HiChevronDown className="text-2xl" />
            </button>
          </div>
        </div>
      )}

      {showArchive && (
        <div className="max-w-7xl mx-auto px-4 md:px-6 mt-14">
          <PromotionsArchive />

          <div className="mt-12 flex justify-center">
            <button
              onClick={toggleArchive}
              className="
                flex items-center gap-3
                bg-[#30B34A] text-white
                px-10 py-5
                rounded-3xl font-black text-lg
                shadow-xl
                hover:bg-green-600 transition-all
                active:scale-95
              "
            >
              {archiveCloseLabel}
              <HiChevronUp className="text-2xl" />
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default PromotionsPage;
