import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiChevronRight, HiOutlineUserGroup } from "react-icons/hi";
import VacanciesSection from "../components/vacancies/VacanciesSection";

const brand = "#30B34A";

const VacanciesPage = () => {
  const lang = useSelector((s) => s.language.current);
  const isRu = lang === "ru";

  return (
    <main className="bg-slate-50 min-h-screen pb-20">

      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-6 pb-10">

          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-[#30B34A] font-medium">
              {isRu ? "Главная" : "Bosh sahifa"}
            </Link>
            <HiChevronRight className="text-slate-300 text-xs" />

            <span className="font-semibold text-slate-500">
              {isRu ? "Вакансии" : "Vakansiyalar"}
            </span>
          </nav>
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 bg-emerald-50 px-5 py-2 rounded-full text-[11px] font-black text-emerald-700">
              <HiOutlineUserGroup className="text-base text-emerald-600" />
              {isRu ? "Работа в команде ISHONCH" : "ISHONCH jamoasida ish"}
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight"
              style={{ color: brand }}
            >
              {isRu ? "Открытые вакансии" : "Bo‘sh ish o‘rinlari"}
            </h1>

            <p className="max-w-2xl text-slate-500 font-semibold text-sm sm:text-base md:text-lg">
              {isRu
                ? "Присоединяйтесь к команде ISHONCH и развивайтесь вместе с нами."
                : "ISHONCH jamoasiga qo‘shiling va biz bilan birga rivojlaning."}
            </p>
          </div>
        </div>
      </section>
      <VacanciesSection />
    </main>
  );
};

export default VacanciesPage;
