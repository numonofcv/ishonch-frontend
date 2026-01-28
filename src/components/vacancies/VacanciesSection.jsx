import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  HiChevronDown,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineBriefcase,
  HiOutlineSearch,
  HiOutlineArrowRight,
} from "react-icons/hi";

const brand = "#30B34A";

const VACANCIES = [
  {
    id: 1,
    region: "tashkent",
    direction: "retail",
    titleUz: "Sotuv bo‘yicha mutaxassis",
    titleRu: "Специалист по продажам",
    cityUz: "Toshkent shahri",
    cityRu: "г. Ташкент",
    typeUz: "To‘liq stavka",
    typeRu: "Полная занятость",
    departmentUz: "Retail savdo",
    departmentRu: "Розничные продажи",
    levelUz: "Middle",
    levelRu: "Middle",
    salaryUz: "Kelishilgan holda",
    salaryRu: "По договоренности",
    postedUz: "2 kun oldin",
    postedRu: "2 дня назад",
  },
  {
    id: 2,
    region: "andijon",
    direction: "store",
    titleUz: "Kassir–operator",
    titleRu: "Кассир-оператор",
    cityUz: "Andijon shahri",
    cityRu: "г. Андижан",
    typeUz: "Smena asosida",
    typeRu: "Сменный график",
    departmentUz: "Do‘konlar tarmog‘i",
    departmentRu: "Сеть магазинов",
    levelUz: "Junior",
    levelRu: "Junior",
    salaryUz: "4 000 000 – 5 000 000 so‘m",
    salaryRu: "4 000 000 – 5 000 000 сум",
    postedUz: "1 hafta oldin",
    postedRu: "Неделю назад",
  },
  {
    id: 3,
    region: "samarqand",
    direction: "marketing",
    titleUz: "Marketing bo‘limi yetakchi mutaxassisi",
    titleRu: "Ведущий специалист отдела маркетинга",
    cityUz: "Samarqand shahri",
    cityRu: "г. Самарканд",
    typeUz: "To‘liq stavka",
    typeRu: "Полная занятость",
    departmentUz: "Marketing",
    departmentRu: "Маркетинг",
    levelUz: "Senior",
    levelRu: "Senior",
    salaryUz: "Kelishilgan holda",
    salaryRu: "По договоренности",
    postedUz: "3 kun oldin",
    postedRu: "3 дня назад",
  },
];

const VacanciesSection = () => {
  const lang = useSelector((s) => s.language.current);
  const isRu = lang === "ru";
  const navigate = useNavigate();

  const [region, setRegion] = useState("all");
  const [direction, setDirection] = useState("all");
  const [search, setSearch] = useState("");

  const regions = [
    { value: "all", labelUz: "Barcha hududlar", labelRu: "Все регионы" },
    { value: "tashkent", labelUz: "Toshkent shahri", labelRu: "г. Ташкент" },
    { value: "andijon", labelUz: "Andijon viloyati", labelRu: "Андижанская область" },
    { value: "samarqand", labelUz: "Samarqand viloyati", labelRu: "Самаркандская область" },
  ];

  const directions = [
    { value: "all", labelUz: "Barcha yo‘nalishlar", labelRu: "Все направления" },
    { value: "retail", labelUz: "Retail savdo", labelRu: "Розничные продажи" },
    { value: "store", labelUz: "Do‘konlar tarmog‘i", labelRu: "Сеть магазинов" },
    { value: "marketing", labelUz: "Marketing", labelRu: "Маркетинг" },
  ];

  const filtered = useMemo(() => {
    const s = search.toLowerCase().trim();

    return VACANCIES.filter((v) => {
      if (region !== "all" && v.region !== region) return false;
      if (direction !== "all" && v.direction !== direction) return false;

      if (s) {
        const t = (isRu ? v.titleRu : v.titleUz).toLowerCase();
        const dep = (isRu ? v.departmentRu : v.departmentUz).toLowerCase();
        if (!t.includes(s) && !dep.includes(s)) return false;
      }

      return true;
    });
  }, [region, direction, search, isRu]);

  return (
    <>
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div
            className="
              -mt-6 md:-mt-8 bg-white border border-slate-100 rounded-[26px]
              shadow-[0_30px_80px_rgba(15,23,42,0.16)]
              px-5 py-6 md:px-8 md:py-8 flex flex-col gap-5
            "
          >
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="flex-1">
                <label className="block text-[11px] uppercase text-slate-400 font-black mb-2">
                  {isRu ? "Поиск" : "Qidiruv"}
                </label>

                <div className="relative">
                  <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={isRu ? "Поиск..." : "Qidiruv..."}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-10 pr-3 py-3 font-semibold text-slate-700 focus:border-[#30B34A] outline-none"
                  />
                </div>
              </div>

              <button
                type="button"
                className="lg:w-48 w-full h-13 cursor-pointer sm:mt-0 md:mt-2 md:mb-4  lg:mt-5 flex items-center justify-center gap-2
                    bg-[#30B34A] text-white
                    rounded-2xl px-8 py-3
                    text-sm font-black
                    shadow-[0_18px_45px_rgba(48,179,74,0.28)]
                    active:scale-[0.98] transition"
              >
                {isRu ? "Искать" : "Izlash"}
                <HiOutlineSearch className="text-sm" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase text-slate-400 font-black mb-2">
                  {isRu ? "Регион" : "Hudud"}
                </label>
                <div className="relative">
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 pr-10 py-3 text-sm font-semibold"
                  >
                    {regions.map((r) => (
                      <option value={r.value} key={r.value}>
                        {isRu ? r.labelRu : r.labelUz}
                      </option>
                    ))}
                  </select>
                  <HiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase text-slate-400 font-black mb-2">
                  {isRu ? "Направление" : "Yo‘nalish"}
                </label>
                <div className="relative">
                  <select
                    value={direction}
                    onChange={(e) => setDirection(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 pr-10 py-3 text-sm font-semibold"
                  >
                    {directions.map((d) => (
                      <option value={d.value} key={d.value}>
                        {isRu ? d.labelRu : d.labelUz}
                      </option>
                    ))}
                  </select>
                  <HiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 md:pt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-6">
          {filtered.map((v) => {
            const title = isRu ? v.titleRu : v.titleUz;
            const city = isRu ? v.cityRu : v.cityUz;
            const type = isRu ? v.typeRu : v.typeUz;
            const department = isRu ? v.departmentRu : v.departmentUz;
            const level = isRu ? v.levelRu : v.levelUz;
            const salary = isRu ? v.salaryRu : v.salaryUz;
            const posted = isRu ? v.postedRu : v.postedUz;

            return (
              <article
                key={v.id}
                className="
                  bg-white border border-slate-100 rounded-[26px]
                  shadow-[0_22px_70px_rgba(15,23,42,0.1)]
                  px-6 py-7
                  flex flex-col md:flex-row md:items-center md:justify-between gap-5
                "
              >

                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div
                      className="h-12 w-12 rounded-2xl flex items-center justify-center shadow-[0_14px_35px_rgba(48,179,74,0.32)]"
                      style={{ backgroundColor: brand }}
                    >
                      <HiOutlineBriefcase className="text-2xl text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-black">{title}</h2>

                      <div className="flex flex-wrap gap-2 mt-2 text-xs font-semibold text-slate-600">
                        <span className="flex items-center gap-1 bg-slate-50 px-3 py-1 rounded-full">
                          <HiOutlineLocationMarker className="text-slate-400" />
                          {city}
                        </span>
                        <span className="flex items-center gap-1 bg-slate-50 px-3 py-1 rounded-full">
                          <HiOutlineClock className="text-slate-400" />
                          {type}
                        </span>
                        <span className="bg-slate-50 px-3 py-1 rounded-full">
                          {department}
                        </span>
                        <span className="bg-emerald-50 px-3 py-1 rounded-full text-emerald-700">
                          {level}
                        </span>
                      </div>

                      <div className="inline-flex items-center gap-2 bg-slate-50 px-4 py-1.5 rounded-full mt-4 text-sm font-semibold">
                        {isRu ? "Оплата труда:" : "Maosh:"}
                        <span className="font-black">{salary}</span>
                      </div>

                      <p className="text-slate-400 text-xs mt-1">{posted}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() =>
                    navigate(`/vakansiya/${v.id}`, { state: { vacancy: v } })
                  }
                  className="
                    flex items-center gap-2
                    bg-[#30B34A] text-white
                    rounded-2xl px-8 py-3
                    text-sm font-black
                    shadow-[0_18px_45px_rgba(48,179,74,0.28)]
                    active:scale-[0.98] transition
                  "
                >
                  {isRu ? "Подробнее" : "Batafsil"}
                  <HiOutlineArrowRight />
                </button>
              </article>
            );
          })}

          {filtered.length === 0 && (
            <p className="text-center text-slate-400 text-sm py-10">
              {isRu
                ? "По выбранным параметрам вакансии не найдены."
                : "Tanlangan parametrlar bo‘yicha vakansiya topilmadi."}
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default VacanciesSection;
