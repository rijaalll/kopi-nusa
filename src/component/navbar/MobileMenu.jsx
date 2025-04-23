import { useState, useEffect } from 'react';

import mobileNavData from '../../data/NavbarData.json';

function MobileMenu({ menuMobileOpen, setMenuMobileOpen, devHeight }) {
    const navPath = mobileNavData.NavbarPath;

    const mobileToggle = () => {
        setMenuMobileOpen(!menuMobileOpen);
    } 

    return (
        <>

            <div onClick={() => mobileToggle()} className={`${menuMobileOpen ? 'left-0' : 'left-[100%]'} transition-all duration-300 fixed w-full h-[100dvh] top-0 z-[3] bg-slate-200/10 dark:bg-slate-800/10 backdrop-blur-sm`}></div>
            
            <div className={`${menuMobileOpen ? 'right-4' : '-right-[100%] delay-200'} transition-all duration-500 fixed w-auto h-auto top-[50%] -translate-y-1/2 bg-slate-200/80 dark:bg-slate-700/80 backdrop-blur-sm z-[4] rounded-xl`}>
                <div className='w-auto h-auto py-5 px-7'>
                    <div className='flex flex-col items-start gap-4'>
                        {navPath.map((item, index) => (
                            <button onClick={() => {window.scrollTo(0, (eval(devHeight * item.location))); mobileToggle()}} key={index} className={`${menuMobileOpen ? `opacity-100 delay-[400ms]` : 'opacity-0'} transition-all duration-300 w-full text-start`}>
                                <span className='text-lg dark:text-white'>{item.path}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default MobileMenu;