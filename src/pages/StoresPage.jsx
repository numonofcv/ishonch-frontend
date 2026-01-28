import React, { useState } from "react";
import { useSelector } from "react-redux";

import StoresFilter from "../components/stores/StoresFilter";
import StoreCard from "../components/stores/StoreCard";
import { StoresTags } from "../components/stores/StoresTags";

const brand = "#30B34A";

const StoresPage = () => {
  const lang = useSelector((s) => s.language?.current || "uz");

  const [filters, setFilters] = useState({
    region: null,
    city: null,
  });

  const handleFilter = (next) => setFilters(next);

  const pageTitle = lang === "ru" ? "Наши магазины" : "Do‘konlarimiz";
  const pageDesc =
    lang === "ru"
      ? "Найдите ближайший магазин и ознакомьтесь с графиком работы."
      : "O'zingizga yaqin bo'lgan filialni toping va ish vaqti bilan tanishing.";

  const breadcrumbHome = lang === "ru" ? "Главная" : "Bosh sahifa";
  const breadcrumbStores = lang === "ru" ? "Магазины" : "Do‘konlar";

  return (
    <main className="w-full bg-[#f8fafc] min-h-screen">

      <section className="relative w-full bg-white overflow-hidden border-b border-gray-100">

        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
            alt="background"
            className="w-full h-full object-cover opacity-[0.08]"
          />
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-10 pb-24">
          
          <nav className="flex items-center gap-2 text-[13px] text-gray-400 mb-6 font-medium">
            <span className="cursor-pointer hover:text-[#30B34A] transition-colors">
              {breadcrumbHome}
            </span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-bold">{breadcrumbStores}</span>
          </nav>

          <h1
            className="text-[42px] md:text-[60px] font-black leading-tight tracking-tight"
            style={{ color: brand }}
          >
            {pageTitle}
          </h1>

          <p className="text-gray-500 text-lg mt-3 max-w-2xl font-medium leading-relaxed">
            {pageDesc}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <StoresTags />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white rounded-4xl hadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-50 p-1">
          <StoresFilter onFilter={handleFilter} />
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <StoreCard region={filters.region} city={filters.city} lang={lang} />
      </section>
    </main>
  );
};

export default StoresPage;
