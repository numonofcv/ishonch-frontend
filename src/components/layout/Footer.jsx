import React from "react";

const brand = "#30B34A";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050B18] text-slate-200">
      <div className="mx-auto max-w-7xl px-4 md:px-6 pt-12 pb-8">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          <div className="space-y-4">
            <div className="text-2xl md:text-[26px] font-black tracking-tight">
              <span style={{ color: brand }}>ISHONCH</span>
            </div>
            <p className="max-w-xs text-[13px] leading-relaxed text-slate-400 font-medium">
              O&apos;zbekistondagi eng yirik retail savdo tarmoqlaridan biri.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-300">
              Kompaniya
            </p>
            <ul className="space-y-2 text-[13px] font-semibold">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  Biz haqimizda
                </a>
              </li>
              <li>
                <a href="/aksiyalar" className="hover:text-white transition-colors">
                  Aksiyalar
                </a>
              </li>
              <li>
                <a href="/stores" className="hover:text-white transition-colors">
                  Do&apos;konlar
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-300">
              Xizmatlar
            </p>
            <ul className="space-y-2 text-[13px] font-semibold">
              <li>
                <a href="/installment" className="hover:text-white transition-colors">
                  Muddati to&apos;lov
                </a>
              </li>
              <li>
                <a href="/delivery" className="hover:text-white transition-colors">
                  Yetkazib berish
                </a>
              </li>
              <li>
                <a href="/bonus" className="hover:text-white transition-colors">
                  Bonus tizimi
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-300">
              Aloqa
            </p>
            <a
              href="tel:+998735152222"
              className="block text-2xl md:text-[26px] font-black tracking-tight"
              style={{ color: brand }}
            >
              73 515 22 22
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-4">
          <p className="text-[11px] md:text-xs text-slate-500 font-medium text-center md:text-left">
            © {year} &quot;ISHONCH&quot; Savdo do&apos;konlar tarmog&apos;i. Barcha huquqlar
            himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
