import React from "react";
import HeroSlider from "../components/home/HeroSlider";
import Categories from "../components/home/Categories";
import StoresSummary from "../components/home/StoresSummary";
import Promotions from "../components/home/Promotions";
import NewsSection from "../components/home/NewsSection";
import StoresSection from "../components/home/StoresSection";
import ContactSection from "../components/contact/ContactSection";

const HomePage = () => {
    return (
        <>
            <HeroSlider />

            <Categories />
            <StoresSummary />
            <Promotions />
            <NewsSection />
            <StoresSection />
            <ContactSection />
        </>
    );
};

export default HomePage;
