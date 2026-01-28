import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  HiChevronRight,
  HiOutlineArrowRight,
  HiOutlineUpload,
  HiOutlineUser,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineBriefcase,
} from "react-icons/hi";

const brand = "#30B34A";

const VacancyApplyPage = () => {
  const lang = useSelector((s) => s.language.current);
  const isRu = lang === "ru";
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const vacancy = location.state?.vacancy || null;

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");
  const [message, setMessage] = useState("");
  const [cvFileName, setCvFileName] = useState("");

  const pageTitle = isRu ? "Отклик на вакансию" : "Ishga ariza topshirish";
  const breadcrumbHome = isRu ? "Главная" : "Bosh sahifa";
  const breadcrumbVacancies = isRu ? "Вакансии" : "Vakansiyalar";
  const breadcrumbApply = isRu ? "Отклик" : "Ariza";

  const labelFullName = isRu ? "ФИО" : "To‘liq ism-familya";
  const labelPhone = isRu ? "Телефон" : "Telefon raqam";
  const labelEmail = isRu ? "Эл. почта" : "Email";
  const labelCity = isRu ? "Город / регион" : "Shahar / hudud";
  const labelExperience = isRu ? "Опыт работы" : "Ish tajribasi";
  const labelSalary = isRu ? "Желаемая зарплата" : "Kutilayotgan maosh";
  const labelMessage = isRu ? "Сопроводительное письмо" : "Qo‘shimcha izoh (xohishga ko‘ra)";
  const labelCV = isRu ? "Резюме (CV)" : "Rezyume (CV)";

  const submitLabel = isRu ? "Отправить резюме" : "Rezyumeni yuborish";
  const filePlaceholder = isRu
    ? "Файл не выбран"
    : "Fayl tanlanmagan";
  const fileHint = isRu
    ? "Допустимые форматы: PDF, DOC, DOCX. Размер до 10 МБ."
    : "Ruxsat etilgan formatlar: PDF, DOC, DOCX. Hajmi 10 MB gacha.";

  const vacancyTitle =
    vacancy && (isRu ? vacancy.titleRu : vacancy.titleUz);

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: backendga yuborish
    console.log({
      vacancyId: id,
      vacancyTitle,
      fullName,
      phone,
      email,
      city,
      experience,
      salary,
      message,
      cvFileName,
    });

    setFullName("");
    setPhone("");
    setEmail("");
    setCity("");
    setExperience("");
    setSalary("");
    setMessage("");
    setCvFileName("");

    alert(
      isRu
        ? "Спасибо! Ваше резюме отправлено."
        : "Rahmat! Rezyumingiz yuborildi."
    );
  };

  return (
    <main className="bg-slate-50 min-h-screen pb-16">
      <section className="border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-6 pb-10">

          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mb-5">
            <Link
              to="/"
              className="hover:text-[#30B34A] font-medium transition-colors"
            >
              {breadcrumbHome}
            </Link>
            <HiChevronRight className="text-slate-300 text-xs" />
            <Link
              to="/vakansiyalar"
              className="hover:text-[#30B34A] font-medium transition-colors"
            >
              {breadcrumbVacancies}
            </Link>
            <HiChevronRight className="text-slate-300 text-xs" />
            <span className="font-semibold text-slate-500">
              {breadcrumbApply}
            </span>
          </nav>

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <h1
                className="
                  text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                  font-black tracking-tight
                "
                style={{ color: brand }}
              >
                {pageTitle}
              </h1>

              {vacancyTitle && (
                <p className="text-sm sm:text-base md:text-lg font-semibold text-slate-600">
                  {isRu ? "По вакансии:" : "Vakansiya bo‘yicha:"}{" "}
                  <span className="font-black text-slate-900">
                    {vacancyTitle}
                  </span>
                </p>
              )}

              {!vacancyTitle && (
                <p className="text-sm sm:text-base md:text-lg font-semibold text-slate-500">
                  {isRu
                    ? "Вы можете отправить резюме, указав интересующую вакансию в описании."
                    : "Qaysi vakansiyaga ariza topshirayotganingizni izohda yozib qoldirishingiz mumkin."}
                </p>
              )}
            </div>

            {vacancy && (
              <button
                type="button"
                onClick={() =>
                  navigate(`/vakansiya/${vacancy.id}`, {
                    state: { vacancy },
                  })
                }
                className="
                  inline-flex items-center gap-2
                  text-xs sm:text-sm md:text-base
                  font-semibold text-slate-500
                  hover:text-[#30B34A] transition-colors
                "
              >
                ← {isRu ? "Назад к описанию вакансии" : "Vakansiya sahifasiga qaytish"}
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="pt-8 md:pt-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div
            className="
              rounded-[34px] md:rounded-[40px]
              bg-white
              shadow-[0_26px_90px_rgba(15,23,42,0.14)]
              border border-slate-100
              overflow-hidden
            "
          >
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
              <div className="px-6 sm:px-8 md:px-10 py-8 md:py-10">
                <div className="space-y-3 mb-8">
                  <p className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-300">
                    {isRu ? "Форма отклика" : "Ariza formasi"}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                    {isRu
                      ? "Заполните данные и прикрепите резюме"
                      : "Ma’lumotlarni to‘ldiring va rezyumeni yuklang"}
                  </h2>
                  <p className="text-sm md:text-base font-semibold text-slate-500">
                    {isRu
                      ? "Наш HR-отдел свяжется с вами после рассмотрения резюме."
                      : "HR bo‘lim rezyumeni ko‘rib chiqqach, siz bilan bog‘lanadi."}
                  </p>
                </div>

                <form onSubmit={onSubmit} className="space-y-6">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-300">
                        {labelFullName}
                      </label>
                      <div className="relative">
                        <HiOutlineUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          required
                          placeholder={isRu ? "Иванов Иван" : "Abdulloh Karimov"}
                          className="
                            w-full rounded-2xl border border-slate-200 bg-slate-50
                            pl-9 pr-3 py-3 text-sm sm:text-base font-semibold
                            text-slate-800 outline-none
                            focus:border-[#30B34A] focus:ring-2 focus:ring-[#30B34A26]
                          "
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-300">
                        {labelPhone}
                      </label>
                      <div className="relative">
                        <HiOutlinePhone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                          placeholder="+998 90 123 45 67"
                          className="
                            w-full rounded-2xl border border-slate-200 bg-slate-50
                            pl-9 pr-3 py-3 text-sm sm:text-base font-semibold
                            text-slate-800 outline-none
                            focus:border-[#30B34A] focus:ring-2 focus:ring-[#30B34A26]
                          "
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-300">
                        {labelEmail}
                      </label>
                      <div className="relative">
                        <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          placeholder={
                            isRu ? "example@mail.com" : "example@mail.com"
                          }
                          className="
                            w-full rounded-2xl border border-slate-200 bg-slate-50
                            pl-9 pr-3 py-3 text-sm sm:text-base font-semibold
                            text-slate-800 outline-none
                            focus:border-[#30B34A] focus:ring-2 focus:ring-[#30B34A26]
                          "
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-300">
                        {labelCity}
                      </label>
                      <div className="relative">
                        <HiOutlineLocationMarker className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder={
                            isRu ? "г. Ташкент" : "Toshkent shahri"
                          }
                          className="
                            w-full rounded-2xl border border-slate-200 bg-slate-50
                            pl-9 pr-3 py-3 text-sm sm:text-base font-semibold
                            text-slate-800 outline-none
                            focus:border-[#30B34A] focus:ring-2 focus:ring-[#30B34A26]
                          "
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-300">
                        {labelExperience}
                      </label>
                      <div className="relative">
                        <HiOutlineBriefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          value={experience}
                          onChange={(e) => setExperience(e.target.value)}
                          placeholder={
                            isRu
                              ? "Например: 3 года в розничной торговле"
                              : "Masalan: 3 yil retail sohasida"
                          }
                          className="
                            w-full rounded-2xl border border-slate-200 bg-slate-50
                            pl-9 pr-3 py-3 text-sm sm:text-base font-semibold
                            text-slate-800 outline-none
                            focus:border-[#30B34A] focus:ring-2 focus:ring-[#30B34A26]
                          "
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-300">
                        {labelSalary}
                      </label>
                      <input
                        type="text"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        placeholder={
                          isRu
                            ? "Например: от 5 000 000 сум"
                            : "Masalan: 5 000 000 so‘mdan"
                        }
                        className="
                          w-full rounded-2xl border border-slate-200 bg-slate-50
                          px-4 py-3 text-sm sm:text-base font-semibold
                          text-slate-800 outline-none
                          focus:border-[#30B34A] focus:ring-2 focus:ring-[#30B34A26]
                        "
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-300">
                      {labelMessage}
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      placeholder={
                        isRu
                          ? "Расскажите кратко о себе, опыте и мотивации..."
                          : "O‘zingiz, tajribangiz va motivatsiyangiz haqida qisqacha yozing..."
                      }
                      className="
                        w-full rounded-2xl border border-slate-200 bg-slate-50
                        px-4 py-3 text-sm sm:text-base font-semibold
                        text-slate-800 outline-none resize-none
                        focus:border-[#30B34A] focus:ring-2 focus:ring-[#30B34A26]
                      "
                    />
                  </div>

                  {/* CV upload + submit */}
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
\                    <div className="flex-1 space-y-1.5">
                      <label className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-300">
                        {labelCV}
                      </label>
                      <div
                        className="
                          flex items-center gap-3
                          rounded-2xl border border-dashed border-slate-300 
                          bg-slate-50 px-4 py-3
                        "
                      >
                        <label className="inline-flex items-center gap-2 cursor-pointer">
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              setCvFileName(file ? file.name : "");
                            }}
                          />
                          <span
                            className="
                              inline-flex items-center gap-2
                              rounded-xl bg-white px-3 py-2
                              text-xs sm:text-sm font-semibold text-slate-700
                              shadow-sm
                            "
                          >
                            <HiOutlineUpload className="text-base" />
                            {isRu ? "Выбрать файл" : "Fayl tanlash"}
                          </span>
                        </label>

                        <div className="flex-1">
                          <p className="text-[11px] sm:text-xs font-semibold text-slate-500 truncate">
                            {cvFileName || filePlaceholder}
                          </p>
                          <p className="text-[10px] text-slate-400 mt-0.5">
                            {fileHint}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="md:ml-4 mt-2 md:mt-7">
                      <button
                        type="submit"
                        className="
                          w-full md:w-auto
                          inline-flex items-center justify-center gap-3
                          rounded-2xl px-8 py-4
                          text-sm sm:text-base font-black text-white
                          shadow-[0_20px_55px_rgba(48,179,74,0.4)]
                          active:scale-[0.97] transition
                        "
                        style={{ backgroundColor: brand }}
                      >
                        {submitLabel}
                        <span className="h-8 w-8 rounded-full bg-white/15 flex items-center justify-center">
                          <HiOutlineArrowRight className="text-lg" />
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="relative bg-linear-to-br from-[#f3fbf5] via-white to-[#d9f6e2] p-8 md:p-10">
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900">
                    {isRu
                      ? "Почему стоит работать в ISHONCH?"
                      : "Nega ISHONCH jamoasida ishlash kerak?"}
                  </h3>

                  <ul className="space-y-4 text-sm md:text-base font-semibold text-slate-600">
                    <li>
                      •{" "}
                      {isRu
                        ? "Стабильная компания с широкой филиальной сетью по всему Узбекистану."
                        : "Butun O‘zbekiston bo‘ylab filiallari bor barqaror kompaniya."}
                    </li>
                    <li>
                      •{" "}
                      {isRu
                        ? "Возможность карьерного роста и внутреннего обучения."
                        : "Karyera o‘sishi va ichki o‘qitish tizimi."}
                    </li>
                    <li>
                      •{" "}
                      {isRu
                        ? "Дружный коллектив и комфортные условия труда."
                        : "Do‘stona jamoa va qulay ish sharoitlari."}
                    </li>
                    <li>
                      •{" "}
                      {isRu
                        ? "Оформление согласно трудовому законодательству."
                        : "Mehnat qonunchiligi asosida rasmiy ishga joylashish."}
                    </li>
                  </ul>

                  <div className="mt-6 p-4 rounded-2xl bg-white/80 border border-emerald-100">
                    <p className="text-xs md:text-sm font-semibold text-slate-500">
                      {isRu
                        ? "Если у вас нет подходящей вакансии, вы всё равно можете отправить резюме — мы добавим вас в кадровый резерв."
                        : "Ayni paytda mos vakansiya bo‘lmasa ham, rezyumeni yuborib qo‘yishingiz mumkin — biz sizni kadrlar zaxirasiga qo‘shamiz."}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 pointer-events-none rounded-[40px] border border-white/40" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VacancyApplyPage;
