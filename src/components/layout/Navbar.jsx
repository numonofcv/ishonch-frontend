// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  HiOutlineMenu,
  HiOutlinePhone,
  HiX,
  HiChevronRight,
} from "react-icons/hi";

import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaTelegramPlane,
} from "react-icons/fa";

import { setUzbek, setRussian } from "../../store/languageSlice";

const brand = "#30B34A";

const MENU = [
  { uz: "Biz haqimizda", ru: "О нас", path: "/" },
  { uz: "Aksiyalar", ru: "Акции", path: "/aksiyalar" },
  { uz: "Do‘konlar", ru: "Магазины", path: "/dokkonlar" },
  { uz: "Yangiliklar", ru: "Новости", path: "/yangiliklar" },
  { uz: "Vakansiyalar", ru: "Вакансии", path: "/vakansiyalar" },
  { uz: "Aloqa", ru: "Контакты", path: "/aloqa" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const lang = useSelector((s) => s.language.current);
  const dispatch = useDispatch();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-100">

      <div className="flex md:hidden items-center justify-between px-4 py-3">
        <button onClick={() => setOpen(true)}>
          <HiOutlineMenu className="text-[28px] text-gray-700" />
        </button>

        <h1 className="text-[22px] font-extrabold" style={{ color: brand }}>
          ISHONCH
        </h1>

        <HiOutlinePhone className="text-[28px]" style={{ color: brand }} />
      </div>

      <div className="hidden md:flex items-center justify-between max-w-1440 mx-auto px-6 py-3">

        <h1
          className="text-[42px] lg:text-[56px] font-bold tracking-tighter select-none"
          style={{ color: brand }}
        >
          ISHONCH
        </h1>

        <div className="flex items-center gap-6">

          <div className="flex items-center gap-3">
            {[FaYoutube, FaInstagram, FaFacebookF, FaTelegramPlane].map(
              (Icon, i) => (
                <button
                  key={i}
                  className="p-2 rounded-full transition hover:opacity-80"
                  style={{ backgroundColor: brand }}
                >
                  <Icon className="text-white text-[19px]" />
                </button>
              )
            )}
          </div>

          <div className="h-8 w-[1.5px] bg-gray-300" />

          <div className="flex items-center gap-2 cursor-pointer">
            <HiOutlinePhone className="text-[26px]" style={{ color: brand }} />
            <span className="font-semibold text-[22px]" style={{ color: brand }}>
              73 515 22 22
            </span>
          </div>

          <div className="border rounded-md overflow-hidden flex" style={{ borderColor: brand }}>
            <button
              onClick={() => dispatch(setUzbek())}
              className={`px-4 py-1 text-[16px] font-medium ${lang === "uz" ? "bg-[#30B34A] text-white" : "text-[#30B34A]"}`}
            >
              O‘z
            </button>
            <button
              onClick={() => dispatch(setRussian())}
              className={`px-4 py-1 text-[16px] font-medium ${lang === "ru" ? "bg-[#30B34A] text-white" : "text-[#30B34A]"}`}
            >
              Py
            </button>
          </div>
        </div>
      </div>

      <nav className="hidden md:flex justify-end gap-10 max-w-1440 mx-auto px-7 pb-4">
        {MENU.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `text-[18px] font-semibold transition ${
                isActive ? "text-[#30B34A]" : "text-[#111827] hover:text-[#30B34A]"
              }`
            }
          >
            {lang === "ru" ? item.ru : item.uz}
          </NavLink>
        ))}
      </nav>

      {open && (
        <div className="fixed inset-0 h-screen bg-white/95 backdrop-blur-md z-999 flex flex-col animate-fadeIn">

          <div className="flex items-center justify-between px-4 py-4 border-b">
            <button onClick={() => setOpen(false)}>
              <HiX className="text-[32px] text-gray-700" />
            </button>

            <h1 className="text-[22px] font-extrabold" style={{ color: brand }}>
              ISHONCH
            </h1>

            <HiOutlinePhone className="text-[28px]" style={{ color: brand }} />
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
            {MENU.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `
                flex items-center justify-between px-5 py-4
                rounded-2xl border font-semibold text-[18px]
                transition-all
                ${
                  isActive
                    ? "bg-[#30B34A]/10 border-[#30B34A] text-[#30B34A]"
                    : "border-gray-200 text-gray-700 hover:bg-gray-100"
                }
              `
                }
              >
                {lang === "ru" ? item.ru : item.uz}
                <HiChevronRight className="text-xl text-gray-400" />
              </NavLink>
            ))}
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-4 flex gap-3 shadow">
              <button
                onClick={() => dispatch(setUzbek())}
                className={`w-full py-3 rounded-xl font-bold ${
                  lang === "uz" ? "bg-[#30B34A] text-white" : "text-[#30B34A]"
                }`}
              >
                O‘zbekcha
              </button>
              <button
                onClick={() => dispatch(setRussian())}
                className={`w-full py-3 rounded-xl font-bold ${
                  lang === "ru" ? "bg-[#30B34A] text-white" : "text-[#30B34A]"
                }`}
              >
                Русский
              </button>
            </div>
          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;
