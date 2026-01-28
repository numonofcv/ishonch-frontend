import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";
import ContactSection from "../components/contact/ContactSection";

const ContactPage = () => {
  const lang = useSelector((s) => s.language.current);

  const breadcrumbHome = lang === "ru" ? "Главная" : "Bosh sahifa";
  const breadcrumbContact = lang === "ru" ? "Контакты" : "Aloqa";

  return (
      <section className="border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
            <Link
              to="/"
              className="hover:text-[#30B34A] font-medium text-xl transition-colors"
            >
              {breadcrumbHome}
            </Link>

            <HiChevronRight className="text-slate-300 text-xl" />

            <span className="font-semibold text-slate-500 text-xl">
              {breadcrumbContact}
            </span>
          </nav>
        </div>
      <ContactSection />
      </section>
  );
};

export default ContactPage;
