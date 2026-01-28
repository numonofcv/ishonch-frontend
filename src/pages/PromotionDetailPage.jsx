import React from "react";
import {
  HiChevronRight,
  HiOutlineCalendar,
  HiOutlineEye,
} from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const brand = "#30B34A";

const PromotionDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const lang = useSelector((s) => s.language.current);

  const promo = location.state?.promo;

  const t = {
    back: lang === "ru" ? "← Назад" : "← Ortga",
    notFound:
      lang === "ru"
        ? "Информация об акции не найдена. Пожалуйста, откройте акцию заново со страницы акций."
        : "Aksiya maʼlumotlari topilmadi. Iltimos, aksiyalar sahifasidan qayta ochib ko‘ring.",
    breadcrumbHome: lang === "ru" ? "Главная" : "Bosh sahifa",
    breadcrumbPromotions: lang === "ru" ? "Акции" : "Aksiyalar",
    periodPrefix:
      lang === "ru" ? "С 1 января по " : "1-yanvardan ",
      remainingBadge:
      lang === "ru" ? "0 дней осталось" : "0 kun qoldi",
    introTitle:
      lang === "ru"
        ? "Скидки до 30% или бонусы до 35% на множество товаров!"
        : "Ko‘plab mahsulotlarga 30% gacha CHEGIRMA yoki 35% gacha BONUS!",
    introSubtitle:
      lang === "ru"
        ? "Условия акции и дополнительная информация"
        : "Aksiya shartlari va qo‘shimcha maʼlumotlar",
    moreLabel: lang === "ru" ? "Подробнее:" : "Batafsil:",
    countdownTitle:
      lang === "ru"
        ? "До окончания акции осталось мало времени"
        : "Aksiya tugashiga oz vaqt qoldi",
    countdownSubtitle:
      lang === "ru"
        ? "Поспешите стать участником акции"
        : "Siz ham aksiya ishtirokchisi bo'lishga shoshiling",
    unitDay: lang === "ru" ? "дней" : "kun",
    unitHour: lang === "ru" ? "часов" : "soat",
    unitMinute: lang === "ru" ? "минут" : "daqiqa",
    telegramCta:
      lang === "ru"
        ? "Подпишитесь на наш Telegram-канал"
        : "Bizning telegram kanalimizga obuna bo'ling",
  };

  const conditions = lang === "ru"
    ? [
        "На автомагнитолы, видеорегистраторы и сигнализации — скидка 15% или бонус 20%.",
        "На антирадары и автопокрышки — скидка 20% или бонус 25%, либо возможность покупки в рассрочку на 6 месяцев без первоначального взноса и переплат.",
        "На технику Artel, Shivaki и Avalon — скидка 25% или бонус 30%.",
        "На кондиционеры Artel Baraka, Marvard, Avalon AC 12 — скидка 30% или бонус 35%.",
        "На технику LG — скидка 25% или бонус 30%.",
        "На ювелирные изделия — скидка до 15%.",
      ]
    : [
        "Avtomagnitola, videoregistrator va signalizatsiyalarga 15% chegirma yoki 20% bonus.",
        "Antiradar va avtoshinalarga 20% chegirma yoki 25% bonus yoki 6 oyga boshlang‘ich to‘lovsiz va ustamasiz xarid qilish imkoniyati!",
        "Artel, Shivaki va Avalon texnikalariga 25% chegirma yoki 30% bonus!",
        "Artel Baraka, Marvard, Avalon AC 12 konditsioneriga 30% chegirma yoki 35% bonus!",
        "LG texnikalariga 25% chegirma yoki 30% bonus!",
        "Tilla taqinchoqlar 15% gacha chegirma.",
      ];

      if (!promo) {
    return (
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-10">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-[#30B34A] font-semibold mb-6"
        >
          {t.back}
        </button>
        <p className="text-slate-600">{t.notFound}</p>
      </div>
    );
  }

  const title = lang === "ru" ? promo.titleRu : promo.titleUz;
  const untilText = promo.until;
  const periodText = t.periodPrefix + untilText;

  return (
    <div className="pb-12" data-id={id}>
      <section className="border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
          <nav className="flex items-center gap-3 text-lg font-semibold">
            <Link
              to="/"
              className="text-gray-400 hover:text-[#30B34A] transition-colors"
            >
              {t.breadcrumbHome}
            </Link>
            <HiChevronRight className="text-slate-300 text-sm" />
            <Link
              to="/aksiyalar"
              className="transition-colors text-gray-400 hover:text-[#30B34A]"
            >
              {t.breadcrumbPromotions}
            </Link>
            <HiChevronRight className="text-slate-300 text-sm" />
            <span className="text-gray-900 font-black truncate max-w-50 md:max-w-xs">
              {title}
            </span>
          </nav>
        </div>
      </section>

      <section className="bg-slate-50 min-h-screen">
        <div className="max-w-6xl mx-auto space-y-16 px-6 md:px-8 py-10">

          <div className="text-center md:text-left space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight">
              {title}
            </h1>

            <div className="flex flex-col md:flex-row md:gap-4 flex-wrap items-center gap-6">
              <p className="text-xl md:text-2xl text-gray-500 font-bold">
                {periodText}
              </p>
              <span className="bg-[#b3f4c6] text-[#1e5a2d] px-6 md:px-8 py-3 rounded-2xl font-black text-lg md:text-xl">
                {t.remainingBadge}
              </span>
            </div>
          </div>

          <div className="relative rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white aspect-21/9">
            <img
              src={promo.imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-white p-6 md:p-10 lg:p-20 rounded-[3rem] md:rounded-[4rem] shadow-sm space-y-16 md:space-y-20 border border-gray-100">
            <div className="space-y-6 md:space-y-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.3]">
                {t.introTitle}
              </h2>
              <p
                className="text-2xl md:text-3xl font-black"
                style={{ color: brand }}
              >
                {t.introSubtitle}
              </p>
            </div>

            <ul className="space-y-5 md:space-y-6">
              {conditions.map((item, idx) => (
                <li
                  key={idx}
                  className="text-lg md:text-xl text-gray-700 font-bold leading-relaxed pl-8 relative before:absolute before:left-0 before:top-3 before:w-3 before:h-3 before:bg-[#30B34A] before:rounded-full"
                >
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-8 md:pt-10 border-t border-gray-100">
              <p className="text-xl md:text-2xl font-black text-gray-900 mb-2">
                {t.moreLabel}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-lg md:text-xl font-bold">
                <FiPhoneCall className="text-2xl md:text-3xl" style={{ color: brand }} />
                <a
                  href="tel:+998735152222"
                  className="flex items-center gap-3 text-[#30B34A] text-2xl md:text-3xl font-black hover:underline"
                  style={{ color: brand }}
                >
                  +998 73 515 22 22
                </a>
              </div>
            </div>

            <div className="pt-16 md:pt-20 border-t border-gray-100 text-center space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">
                {t.countdownTitle}
              </h2>
              <p className="text-xl md:text-2xl text-gray-500 font-bold">
                {t.countdownSubtitle}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-10 py-10 md:py-16">
                <div className="text-center">
                  <div className="text-[72px] md:text-[100px] lg:text-[140px] font-black text-[#30B34A] leading-none mb-4">
                    00
                  </div>
                  <div className="text-base md:text-xl font-bold text-gray-500 uppercase tracking-widest">
                    {t.unitDay}
                  </div>
                </div>

                <div className="hidden sm:block w-0.5 h-24 md:h-32 bg-gray-200 mt-6 md:mt-10" />

                <div className="text-center">
                  <div className="text-[72px] md:text-[100px] lg:text-[140px] font-black text-[#30B34A] leading-none mb-4">
                    00
                  </div>
                  <div className="text-base md:text-xl font-bold text-gray-500 uppercase tracking-widest">
                    {t.unitHour}
                  </div>
                </div>

                <div className="hidden sm:block w-0.5 h-24 md:h-32 bg-gray-200 mt-6 md:mt-10" />

                <div className="text-center">
                  <div className="text-[72px] md:text-[100px] lg:text-[140px] font-black text-[#30B34A] leading-none mb-4">
                    00
                  </div>
                  <div className="text-base md:text-xl font-bold text-gray-500 uppercase tracking-widest">
                    {t.unitMinute}
                  </div>
                </div>
              </div>

              <a
                href="https://t.me/ishonch"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#30B34A] text-white py-6 md:py-8 rounded-3xl md:rounded-4xl font-black text-xl md:text-2xl text-center shadow-2xl shadow-green-100 hover:bg-green-600 transition-all active:scale-[0.98]"
              >
                {t.telegramCta}
              </a>

              <div className="flex flex-wrap items-center justify-center gap-6 pt-8 md:pt-12 text-gray-400 font-black text-base md:text-lg">
                <span className="flex items-center gap-3">
                  <HiOutlineCalendar className="text-xl md:text-2xl" />
                  27/01/2026
                </span>
                <span className="flex items-center gap-3">
                  <HiOutlineEye className="text-2xl md:text-3xl" />
                  3847
                </span>
              </div>

              <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-8">
                <a
                  href="#"
                  className="flex items-center gap-3 bg-[#1877f2] text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-black text-base md:text-lg transition-all hover:-translate-y-1 shadow-md"
                >
                  <FaFacebookF className="text-xl md:text-2xl" /> facebook
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 bg-[#24a1de] text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-black text-base md:text-lg transition-all hover:-translate-y-1 shadow-md"
                >
                  <FaTelegramPlane className="text-xl md:text-2xl" /> telegram
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 bg-[#e4405f] text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-black text-base md:text-lg transition-all hover:-translate-y-1 shadow-md"
                >
                  <FaInstagram className="text-xl md:text-2xl" /> instagram
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 bg-[#cd201f] text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-black text-base md:text-lg transition-all hover:-translate-y-1 shadow-md"
                >
                  <FaYoutube className="text-xl md:text-2xl" /> youtube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PromotionDetailPage;
