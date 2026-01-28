import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";

import HomePage from "./pages/HomePage";
import PromotionsPage from "./pages/PromotionsPage";
import PromotionDetailPage from "./pages/PromotionDetailPage";

import NewsPage from "./pages/NewsPage";
import NewsDetailPage from "./pages/NewsDetailPage";

import ContactPage from "./pages/ContactPage";

import StoresPage from "./pages/StoresPage";

import VacanciesPage from "./pages/VacanciesPage";
import VacancyDetailsPage from "./pages/VacancyDetailsPage"; 
import VacancyApplyPage from "./pages/VacancyApplyPage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/aksiyalar" element={<PromotionsPage />} />
        <Route path="/aksiyalar/:id" element={<PromotionDetailPage />} />

        <Route path="/yangiliklar" element={<NewsPage />} />
        <Route path="/yangilik/:id" element={<NewsDetailPage />} />

        <Route path="/aloqa" element={<ContactPage />} />

        <Route path="/dokkonlar" element={<StoresPage />} />


        <Route path="/vakansiyalar" element={<VacanciesPage />} />
        <Route path="/vakansiya/:id" element={<VacancyDetailsPage />} /> 
<Route path="/vakansiya/:id/ariza" element={<VacancyApplyPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </Layout>
  );
};

export default App;
