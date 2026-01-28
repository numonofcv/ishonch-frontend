import React from "react";
import { HiChevronRight, HiOutlineCalendar, HiOutlineEye } from "react-icons/hi";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NewsDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const lang = useSelector((s) => s.language.current);

  const singleNews = location.state?.item;

  if (!singleNews) {
    return (
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-10">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-[#30B34A] font-semibold mb-6"
        >
          ← Ortga
        </button>
        <p className="text-slate-600">
          Yangilik maʼlumotlari topilmadi. Iltimos, yangiliklar sahifasidan qayta
          ochib ko‘ring.
        </p>
      </div>
    );
  }

  const title = lang === "ru" ? singleNews.titleRu : singleNews.titleUz;
  const desc = lang === "ru" ? singleNews.descRu : singleNews.descUz;
  const telegramCta =
    lang === "ru"
      ? "Подпишитесь на наш Telegram канал"
      : "Bizning telegram kanalimizga obuna bo'ling";

  return (
    <div className="pb-12">
      <section className="border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
          <nav className="flex items-center gap-3 text-lg font-semibold">
            <Link
              to="/"
              className="text-gray-400 hover:text-[#30B34A] transition-colors"
            >
              {lang === "ru" ? "Главная" : "Bosh sahifa"}
            </Link>

            <HiChevronRight className="lucide lucide-chevron-right text-gray-300" />

            <Link
              to="/yangiliklar"
              className="transition-colors text-gray-400 hover:text-[#30B34A]"
            >
              {lang === "ru" ? "Новости" : "Yangiliklar"}
            </Link>

            <HiChevronRight className="lucide lucide-chevron-right text-gray-300" />

            <span className="text-gray-900 font-black truncate max-w-50 md:max-w-xs">
              {title}
            </span>
          </nav>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-10 space-y-10">

          <div className="pt-2">
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 text-center md:text-left">
              {title}
            </h1>
          </div>

          <div className="mt-2 overflow-hidden rounded-[2.5rem] shadow-lg bg-white">
            <img
              src={singleNews.image}
              alt={title}
              className="w-full h-full max-h-105 object-cover"
            />
          </div>

          <div className="bg-white p-12 rounded-[3rem] shadow-sm space-y-10">
            <p className="prose prose-xl max-w-none text-gray-700 font-medium leading-[1.8] whitespace-pre-wrap">
              {desc}
            </p>

            <button
              type="button"
              className="block w-full bg-[#30a7db] text-white py-6 rounded-2xl font-black text-2xl text-center shadow-xl shadow-blue-100 hover:bg-[#2896c5] transition-all cursor-pointer"
            >
              {telegramCta}
            </button>

            <div className="flex items-center gap-8 pt-6 border-t border-gray-100 text-gray-400 font-black text-base uppercase tracking-widest">
              <span className="flex items-center gap-2.5">
                <HiOutlineCalendar className="lucide lucide-calendar text-[#30B34A]" />
                {singleNews.date}
              </span>
              <span className="flex items-center gap-2">
                <HiOutlineEye className="lucide lucide-eye text-[#30B34A]" />
                {singleNews.views}
              </span>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#"
                className="flex items-center gap-2 bg-[#1877f2] text-white px-6 py-3 rounded-2xl text-sm md:text-base font-semibold shadow-sm hover:shadow-md transition-all"
              >
                <FaFacebookF className="text-lg" />
                facebook
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-[#24a1de] text-white px-6 py-3 rounded-2xl text-sm md:text-base font-semibold shadow-sm hover:shadow-md transition-all"
              >
                <FaTelegramPlane className="text-lg" />
                telegram
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-[#e4405f] text-white px-6 py-3 rounded-2xl text-sm md:text-base font-semibold shadow-sm hover:shadow-md transition-all"
              >
                <FaInstagram className="text-lg" />
                instagram
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-[#cd201f] text-white px-6 py-3 rounded-2xl text-sm md:text-base font-semibold shadow-sm hover:shadow-md transition-all"
              >
                <FaYoutube className="text-lg" />
                youtube
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetailPage;
