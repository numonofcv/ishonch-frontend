# 🛒 ISHONCH.UZ Frontend

React + Redux Toolkit + TailwindCSS + Vite asosida yaratilgan korporativ veb platforma.  
Loyiha ISHONCH do‘konlari tarmog‘i uchun aksiyalar, yangiliklar, do‘konlar, vakansiyalar va aloqa bo‘limlarini birlashtiradi.

---

## 📦 Texnologiyalar

- **React 18**
- **React Router DOM**
- **Redux Toolkit**
- **TailwindCSS**
- **Vite**
- **React Icons**

---

## 📁 Loyiha Strukturasi

```
project/
│   index.html
│   package.json
│   vite.config.js
│   tailwind.config.js
│   postcss.config.js
│   .gitignore
│
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│
│   ├── store/
│   │   ├── index.js
│   │   └── languageSlice.js
│
│   ├── data/
│   │   ├── storesData.js
│   │   └── newsData.js
│
│   ├── components/
│   │   ├── home/
│   │   │   ├── HeroSlider.jsx
│   │   │   ├── Categories.jsx
│   │   │   ├── StoresSummary.jsx
│   │   │   ├── Promotions.jsx
│   │   │   ├── NewsSection.jsx
│   │   │   └── StoresSection.jsx
│   │
│   │   ├── stores/
│   │   │   ├── StoresFilter.jsx
│   │   │   ├── StoresTags.jsx
│   │   │   └── StoreCard.jsx
│   │
│   │   ├── promotions/
│   │   │   └── PromotionsArchive.jsx
│   │
│   │   ├── vacancies/
│   │   │   └── VacanciesSection.jsx
│   │
│   │   └── contact/
│   │       └── ContactSection.jsx
│
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── NewsPage.jsx
│   │   ├── NewsDetailPage.jsx
│   │   ├── PromotionsPage.jsx
│   │   ├── StoresPage.jsx
│   │   ├── VacanciesPage.jsx
│   │   ├── VacancyDetailsPage.jsx
│   │   └── VacancyApplyPage.jsx
│
│   └── components/ui/
│       └── CustomSelect.jsx
│
└── ...
```

---

## 🚀 O‘rnatish va Ishga Tushirish

### 1️⃣ Repository’ni klon qiling
```bash
git clone your-repo-url
cd project
```

### 2️⃣ Paketlarni o‘rnating
```bash
npm install
```

### 3️⃣ Development serverni ishga tushiring
```bash
npm run dev
```

### 4️⃣ Production build
```bash
npm run build
```

### 5️⃣ Buildni preview qilish
```bash
npm run preview
```

---

## 🌐 Asosiy Bo‘limlar

### 🏠 Bosh sahifa  
Kategoriya, aksiya, yangilik, filiallar va aloqa bloklarini o‘z ichiga oladi.

### 📰 Yangiliklar  
- Yangiliklar ro‘yxati  
- Yangilik tafsiloti (rasm, matn, ulashish)

### 🎉 Aksiyalar  
- Amaldagi aksiyalar  
- Arxiv aksiyalari  

### 🏬 Do‘konlar  
- Hudud / shahar bo‘yicha filtrlash  
- Filiallar ro‘yxati (StoreCard)  

### 👔 Vakansiyalar  
- Vakansiyalar ro‘yxati  
- Tafsilot sahifasi  
- Ishga ariza topshirish (CV upload bilan)

### 📞 Aloqa  
Kontakt sahifasi va aloqa bo‘limi.

---

## 🌍 Til Boshqaruvi

Til holati Redux Toolkit orqali boshqariladi:

```js
setUzbek()
setRussian()
toggleLanguage()
```

Ikki til qo‘llab-quvvatlanadi:

- 🇺🇿 O‘zbek tili  
- 🇷🇺 Rus tili  

---

## 🎨 UI Dizayn Yondashuvi

- TailwindCSS asosida full responsive UI  
- Brend rangi: **#30B34A**
- Katta radiuslar (`rounded-[28px]`, `rounded-4xl`)  
- Yumshoq soyalar (`shadow-xl`, `shadow-lg`)  
- Korporativ minimalistik dizayn  

---

## 📌 Xulosa

Bu loyiha:

- Toza React arxitekturasiga ega  
- Modulli komponentlar bilan qurilgan  
- Kengaytirish uchun qulay  
- Katta data bilan ishlashga optimallashtirilgan  
- Tailwind asosida professional dizaynga ega  

Loyiha ISHONCH do‘konlari tarmog‘i uchun zamonaviy va qulay veb platforma yaratishda yordam beradi.