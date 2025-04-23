import { useState, useEffect } from "react";
import { switchTheme, getTheme } from "../module/switchTheme";
import { GetHeight, GetScrollY } from "../module/getWindow";

import NavbarComponent from "../component/navbar/NavbarComponent";
import MobileMenu from "../component/navbar/MobileMenu";
import HeroSection from "../component/hero/HeroSection";
import AboutSection from "../component/about/AboutSection";
import QuoteSection from "../component/quote/QuoteSection";
import ContactSection from "../component/contact/ContactSection";

import WebData from '../WebData.json';

function HomeApp() {
    const [ isDark, setIsDark ] = useState(null);
    const [ menuMobileOpen, setMenuMobileOpen ] = useState(false);
    const [ devHeight, setDevHeight ] = useState(window.innerHeight);
    const [ scrollY, setScrollY ] = useState(0);
    const webData = WebData.data;
    
    useEffect(() => {
        document.title = webData.homeTitle
        GetHeight(setDevHeight);
        GetScrollY(setScrollY);
    }, [])

    useEffect(() => {
        const theme = getTheme();
        setIsDark(theme)
    }, [])

    useEffect(() => {
        if (isDark !== null) {
            switchTheme(isDark);
        }
    }, [isDark])

    return (
        <div>

            <div className='z-[0] fixed top-0 left-0 w-full h-[100dvh] bg-slate-100'></div>
            <div className={`${isDark ? 'scale-[500]' : 'scale-1'} z-[1] fixed -top-[17px] -right-[17px] w-[17px] h-[17px] bg-slate-800 rounded-full transition-transform will-change-transform duration-1000`}></div>
            
            <NavbarComponent isDark={isDark} setIsDark={setIsDark} setMenuMobileOpen={setMenuMobileOpen} menuMobileOpen={menuMobileOpen} devHeight={devHeight} scrollY={scrollY} />
            <MobileMenu menuMobileOpen={menuMobileOpen} setMenuMobileOpen={setMenuMobileOpen} devHeight={devHeight} />

            <div className="relative top-0 left-0 z-[2] bg-transparent w-full h-auto">
                <HeroSection />
                <AboutSection />
                <QuoteSection />
                <ContactSection />
            </div>

        </div>
    );
}

export default HomeApp;