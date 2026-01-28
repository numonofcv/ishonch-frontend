import React, { useState } from "react";
import {
  HiOutlineGlobeAlt,
  HiOutlineArrowRight,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineChatAlt2,
} from "react-icons/hi";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const brand = "#30B34A";

const TEXTS = {
  uz: {
    badge: "Biz bilan bog‘laning",
    title: "Aloqa",
    subtitle: "O'zbekistondagi eng yirik retail savdo tarmoqlaridan biri.",

    cards: [
      {
        overline: "MIJOZLAR SERVISI",
        title: "73 515 22 22",
        desc: "Bizning operatorlar sizga har kuni 08:00 dan 20:00 gacha yordam beradi.",
        cta: "Bog'lanish",
      },
      {
        overline: "E-POCHTA MANZILI",
        title: "info@ishonch.uz",
        desc: "Kompaniya bilan hamkorlik yoki shikoyatlar bo‘yicha bizga yozing.",
        cta: "Bog'lanish",
      },
      {
        overline: "IJTIMOIY YORDAM",
        title: "@ishonch_bot",
        desc: "Telegram botimiz orqali tezkor savollaringizga javob olishingiz mumkin.",
        cta: "Bog'lanish",
      },
    ],

    formTitleLine1: "Savollaringiz",
    formTitleLine2: "bormi?",
    formSubtitle:
      "Xabaringizni qoldiring, mutaxassislarimiz imkon qadar tezroq siz bilan bog‘lanishadi.",
    fullNameLabel: "To'liq ismingiz",
    fullNamePlaceholder: "Azizbek Rahim",
    phoneLabel: "Telefon",
    phonePlaceholder: "+998 90 123 45 67",
    messageLabel: "Xabar yozing",
    messagePlaceholder: "Savolingiz yoki taklifingizni batafsil yozing...",
    submit: "Yuborish",

    workTimeLabel: "Ish vaqti",
    workTimeText: "Har kuni:",
    workTimeValue: "08:00 — 20:00",
  },

  ru: {
    badge: "Свяжитесь с нами",
    title: "Контакты",
    subtitle:
      "Одна из крупнейших розничных торговых сетей Узбекистана.",

    cards: [
      {
        overline: "СЛУЖБА ПОДДЕРЖКИ",
        title: "73 515 22 22",
        desc: "Наши операторы помогут вам каждый день с 08:00 до 20:00.",
        cta: "Позвонить",
      },
      {
        overline: "АДРЕС E-MAIL",
        title: "info@ishonch.uz",
        desc: "Пишите нам по вопросам сотрудничества или жалоб.",
        cta: "Написать",
      },
      {
        overline: "ОНЛАЙН-ПОДДЕРЖКА",
        title: "@ishonch_bot",
        desc: "Задайте любой вопрос в нашем Telegram-боте и получите быстрый ответ.",
        cta: "Открыть",
      },
    ],

    formTitleLine1: "Есть",
    formTitleLine2: "вопросы?",
    formSubtitle:
      "Оставьте ваше сообщение, и наши специалисты свяжутся с вами в ближайшее время.",
    fullNameLabel: "Ваше имя",
    fullNamePlaceholder: "Алиджон Абдуллаев",
    phoneLabel: "Телефон",
    phonePlaceholder: "+998 90 123 45 67",
    messageLabel: "Сообщение",
    messagePlaceholder: "Подробно опишите ваш вопрос или предложение...",
    submit: "Отправить",

    workTimeLabel: "График работы",
    workTimeText: "Каждый день:",
    workTimeValue: "08:00 — 20:00",
  },
};

const ContactSection = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const lang = useSelector((s) => s.language.current);
  const t = TEXTS[lang] || TEXTS.uz;

  const social = [
    {
      key: "yt",
      label: "youtube",
      href: "#",
      icon: <FaYoutube className="text-xl" />,
    },
    {
      key: "ig",
      label: "instagram",
      href: "#",
      icon: <FaInstagram className="text-xl" />,
    },
    {
      key: "fb",
      label: "facebook",
      href: "#",
      icon: <FaFacebookF className="text-xl" />,
    },
    {
      key: "tg",
      label: "telegram",
      href: "#",
      icon: <FaTelegramPlane className="text-xl" />,
    },
  ];

  const cards = [
    {
      icon: <HiOutlinePhone className="text-2xl text-white" />,
      overline: t.cards[0].overline,
      title: t.cards[0].title,
      desc: t.cards[0].desc,
      cta: { label: t.cards[0].cta, href: "tel:+998735152222" },
    },
    {
      icon: <HiOutlineMail className="text-2xl text-white" />,
      overline: t.cards[1].overline,
      title: t.cards[1].title,
      desc: t.cards[1].desc,
      cta: { label: t.cards[1].cta, href: "mailto:info@ishonch.uz" },
    },
    {
      icon: <HiOutlineChatAlt2 className="text-2xl text-white" />,
      overline: t.cards[2].overline,
      title: t.cards[2].title,
      desc: t.cards[2].desc,
      cta: { label: t.cards[2].cta, href: "https://t.me/ishonch_bot" },
    },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    setFullName("");
    setPhone("");
    setMessage("");
  };

  return (
    <section className="bg-linear-to-b from-[#f3fbf5] via-[#f3fbf5] to-white">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-14 pb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-5 py-2 text-[12px] font-black uppercase tracking-[0.25em] text-[#1f7a31] shadow-sm">
              <HiOutlineGlobeAlt
                className="text-base"
                style={{ color: brand }}
              />
              <span>{t.badge}</span>
            </div>

            <h2
              className="text-[56px] md:text-[76px] font-black leading-none tracking-tight"
              style={{ color: brand }}
            >
              {t.title}
            </h2>

            <p className="max-w-xl text-lg md:text-xl font-bold text-slate-600">
              {t.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            {social.map((s) => (
              <a
                key={s.key}
                href={s.href}
                aria-label={s.label}
                className="h-10 w-10 md:h-11 md:w-11 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition"
                style={{ backgroundColor: brand }}
              >
                <span className="text-white">{s.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-0 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-14 space-y-12 md:space-y-16">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {cards.map((c, idx) => (
              <div
                key={idx}
                className="rounded-[34px] border border-slate-100 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)] p-8 md:p-10"
              >
                <div
                  className="h-14 w-14 rounded-2xl flex items-center justify-center shadow-[0_14px_35px_rgba(48,179,74,0.22)]"
                  style={{ backgroundColor: brand }}
                >
                  {c.icon}
                </div>

                <div className="mt-7 space-y-3">
                  <p className="text-[12px] font-black uppercase tracking-[0.28em] text-slate-300">
                    {c.overline}
                  </p>

                  <h3 className="text-2xl md:text-[28px] font-black text-slate-900">
                    {c.title}
                  </h3>

                  <p className="text-sm md:text-[15px] font-semibold leading-relaxed text-slate-500">
                    {c.desc}
                  </p>
                </div>

                <a
                  href={c.cta.href}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-black"
                  style={{ color: brand }}
                >
                  <span>{c.cta.label}</span>
                  <HiOutlineArrowRight className="text-base" />
                </a>
              </div>
            ))}
          </div>

          <div className="rounded-[44px] border border-slate-100 bg-white shadow-[0_24px_90px_rgba(15,23,42,0.08)] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              <div className="p-10 md:p-14">
                <div className="space-y-4">
                  <h3 className="text-4xl md:text-5xl font-black leading-tight">
                    <span style={{ color: brand }}>{t.formTitleLine1}</span>
                    <br />
                    {t.formTitleLine2}
                  </h3>
                  <p className="max-w-md text-sm md:text-base font-semibold text-slate-500 leading-relaxed">
                    {t.formSubtitle}
                  </p>
                </div>

                <form onSubmit={onSubmit} className="mt-10 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-200">
                        {t.fullNameLabel}
                      </label>
                      <input
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder={t.fullNamePlaceholder}
                        className="w-full rounded-2xl border border-slate-100 bg-[#f7faf8] px-4 py-3 text-sm font-semibold text-slate-700 outline-none focus:border-[#30B34A] focus:ring-2 focus:ring-[#30B34A26]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-200">
                        {t.phoneLabel}
                      </label>
                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={t.phonePlaceholder}
                        className="w-full rounded-2xl border border-slate-100 bg-[#f7faf8] px-4 py-3 text-sm font-semibold text-slate-700 outline-none focus:border-[#30B34A] focus:ring-2 focus:ring-[#30B34A26]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-200">
                      {t.messageLabel}
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t.messagePlaceholder}
                      rows={6}
                      className="w-full resize-none rounded-2xl border border-slate-100 bg-[#f7faf8] px-4 py-4 text-sm font-semibold text-slate-700 outline-none focus:border-[#30B34A] focus:ring-2 focus:ring-[#30B34A26]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-4 text-base font-black text-white shadow-[0_18px_45px_rgba(48,179,74,0.25)] active:scale-[0.98] transition"
                    style={{ backgroundColor: brand }}
                  >
                    <span>{t.submit}</span>
                    <span className="h-8 w-8 rounded-full bg-white/15 flex items-center justify-center">
                      <HiOutlineArrowRight className="text-lg" />
                    </span>
                  </button>
                </form>
              </div>

              <div className="relative min-h-105 lg:min-h-140">
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80"
                  alt="Support"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/5" />

                <div className="absolute bottom-8 right-8 left-8 lg:left-auto lg:w-90">
                  <div className="rounded-[28px] bg-[#2f2f2f]/55 backdrop-blur-xl border border-white/15 p-6 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div
                        className="h-12 w-12 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: brand }}
                      >
                        <HiOutlinePhone className="text-2xl text-white" />
                      </div>

                      <div className="flex-1">
                        <p className="text-[11px] font-black uppercase tracking-[0.25em] text.white/70 text-white/70">
                          {t.workTimeLabel}
                        </p>
                        <p className="mt-1 text-white font-black text-lg">
                          {t.workTimeText}{" "}
                          <span className="font-black text-white/95">
                            {t.workTimeValue}
                          </span>
                        </p>

                        <div className="mt-4 flex items-center gap-3">
                          {social.map((s) => (
                            <a
                              key={`card-${s.key}`}
                              href={s.href}
                              aria-label={s.label}
                              className="h-9 w-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/15 transition"
                            >
                              <span className="text-white">{s.icon}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 pointer-events-none ring-1 ring-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
