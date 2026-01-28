import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import {
  HiChevronRight,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineBriefcase,
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineUserCircle,
} from "react-icons/hi";
import { useSelector } from "react-redux";

const brand = "#30B34A";

const VacancyDetailsPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const vacancy = state?.vacancy;

  const lang = useSelector((s) => s.language?.current || "uz");
  const isRu = lang === "ru";

  if (!vacancy) {
    return (
      <div className="text-center py-28 text-slate-500 font-semibold text-xl">
        {isRu ? "Вакансия не найдена." : "Vakansiya topilmadi."}
      </div>
    );
  }

  const title = isRu ? vacancy.titleRu : vacancy.titleUz;
  const city = isRu ? vacancy.cityRu : vacancy.cityUz;
  const type = isRu ? vacancy.typeRu : vacancy.typeUz;
  const department = isRu ? vacancy.departmentRu : vacancy.departmentUz;
  const level = isRu ? vacancy.levelRu : vacancy.levelUz;
  const salary = isRu ? vacancy.salaryRu : vacancy.salaryUz;
  const posted = isRu ? vacancy.postedRu : vacancy.postedUz;

  const breadcrumbHome = isRu ? "Главная" : "Bosh sahifa";
  const breadcrumbVacancies = isRu ? "Вакансии" : "Vakansiyalar";
  const detailTitle = isRu ? "Описание вакансии" : "Vakansiya tavsifi";

  return (
    <main className="bg-slate-50 min-h-screen pb-20">

      <section className="border-b border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 pt-6 pb-10">

          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mb-6">
            <Link
              to="/"
              className="hover:text-[#30B34A] font-medium transition"
            >
              {breadcrumbHome}
            </Link>
            <HiChevronRight className="text-slate-300 text-xs" />
            <Link
              to="/vakansiyalar"
              className="hover:text-[#30B34A] font-medium transition"
            >
              {breadcrumbVacancies}
            </Link>
            <HiChevronRight className="text-slate-300 text-xs" />
            <span className="font-semibold text-slate-500">{title}</span>
          </nav>

          <div className="space-y-5">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight"
              style={{ color: brand }}
            >
              {title}
            </h1>

            <p className="text-slate-500 text-sm sm:text-base font-semibold max-w-xl">
              {detailTitle}
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-2 bg-slate-50 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-600">
                <HiOutlineLocationMarker className="text-slate-400 text-base" />
                {city}
              </span>

              <span className="inline-flex items-center gap-2 bg-slate-50 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-600">
                <HiOutlineClock className="text-slate-400 text-base" />
                {type}
              </span>

              <span className="inline-flex items-center gap-2 bg-slate-50 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-600">
                {department}
              </span>

              <span className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-1.5 rounded-full text-xs font-semibold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {level}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 md:pt-14">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2 space-y-8">

            <div className="bg-white border border-slate-100 rounded-[28px] shadow-[0_22px_80px_rgba(15,23,42,0.1)] p-7 sm:p-10">
              <h2 className="text-xl sm:text-2xl font-black mb-5">
                {isRu ? "О должности" : "Lavozim haqida"}
              </h2>

              <p className="text-slate-600 leading-relaxed font-semibold">
                <strong className="text-slate-800">
                  {isRu ? "Обязанности: " : "Mas’uliyatlar: "}
                </strong>
                {isRu
                  ? "обслуживание клиентов, помощь в процессе продаж, консультация по товарам, оформление документов, работа с кассой и соблюдение внутренних стандартов."
                  : "mijozlarga xizmat ko‘rsatish, savdo jarayonida yordam berish, mahsulot tavsifi bo‘yicha maslahat berish, hujjatlarni rasmiylashtirish, kassaga xizmat ko‘rsatish va ichki standartlarga rioya qilish."}
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed font-semibold">
                <strong className="text-slate-800">
                  {isRu ? "Требования: " : "Talablar: "}
                </strong>
                {isRu
                  ? "минимум 1 год опыта, навыки продаж, умение работать с клиентами, ответственность, умение работать в команде."
                  : "kamida 1 yil tajriba, savdo ko‘nikmalari, mijozlar bilan muloqot qila olish, mas’uliyatlilik, jamoada ishlash ko‘nikmalari."}
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-[28px] shadow-[0_22px_80px_rgba(15,23,42,0.1)] p-7 sm:p-10">
              <h2 className="text-xl sm:text-2xl font-black mb-5">
                {isRu ? "Требования" : "Talablar"}
              </h2>

              <ul className="space-y-3 text-slate-600 font-semibold leading-relaxed">
                <li>
                  •{" "}
                  {isRu
                    ? "Высшее или средне-специальное образование"
                    : "Oliy yoki o‘rta-maxsus ma’lumot"}
                </li>
                <li>
                  •{" "}
                  {isRu
                    ? "Умение работать в команде"
                    : "Jamoada ishlash ko‘nikmasi"}
                </li>
                <li>
                  •{" "}
                  {isRu
                    ? "Понимание процессов продаж"
                    : "Savdo jarayonini tushunish"}
                </li>
                <li>
                  •{" "}
                  {isRu
                    ? "Навыки коммуникации и презентации"
                    : "Muloqot va prezentatsiya ko‘nikmalari"}
                </li>
                <li>
                  •{" "}
                  {isRu
                    ? "Стрессоустойчивость и ответственность"
                    : "Stressga chidamlilik va mas’uliyatlilik"}
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white border border-slate-100 rounded-[28px] shadow-[0_22px_80px_rgba(15,23,42,0.1)] p-7 sm:p-8 space-y-6">
              <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                <HiOutlineUserCircle className="text-3xl text-emerald-600" />
                {isRu ? "Отклик на вакансию" : "Ishga topshirish"}
              </h3>

              <div className="space-y-3 text-sm font-semibold text-slate-600">
                <p>
                  <span className="font-black text-slate-800">
                    {isRu ? "Оплата труда:" : "Maosh:"}
                  </span>{" "}
                  {salary}
                </p>
                <p>
                  <span className="font-black text-slate-800">
                    {isRu ? "Дата публикации:" : "E’lon sanasi:"}
                  </span>{" "}
                  {posted}
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  navigate(`/vakansiya/${vacancy.id}/ariza`, {
                    state: { vacancy },
                  })
                }
                className="
                  inline-flex items-center justify-center gap-3
                  rounded-2xl px-8 py-4
                  text-sm sm:text-base font-black text-white
                  shadow-[0_18px_45px_rgba(48,179,74,0.28)]
                  active:scale-[0.97] transition
                "
                style={{ backgroundColor: "#30B34A" }}
              >
                {isRu ? "Отправить резюме" : "Rezyume yuborish"}
                <HiOutlineArrowRight className="text-lg" />
              </button>

              <p className="text-xs text-slate-400 leading-relaxed">
                {isRu
                  ? "Вы также можете отправить резюме на адрес: "
                  : "Rezyumeni quyidagi manzilga ham yuborishingiz mumkin: "}
                <span className="font-bold">hr@ishonch.uz</span>
              </p>

              <button
                onClick={() => navigate(-1)}
                className="
                  mt-4 w-full inline-flex items-center justify-center gap-2
                  rounded-xl px-6 py-3 text-sm font-bold
                  bg-slate-100 text-slate-700 hover:bg-slate-200
                  transition
                "
              >
                <HiOutlineArrowLeft className="text-lg" />
                {isRu ? "Назад" : "Orqaga qaytish"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VacancyDetailsPage;
