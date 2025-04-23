import "@theme-toggles/react/css/Around.css"
import { Around } from "@theme-toggles/react"
import NavbarData from '../../data/NavbarData.json'

function NavbarComponent({ isDark, setIsDark, menuMobileOpen, setMenuMobileOpen, devHeight, scrollY }) { 
    const navbarPath = NavbarData.NavbarPath;

    const mobileToggle = () => {
        setMenuMobileOpen(!menuMobileOpen)
    } 

    return (
        <div className={`${scrollY > (devHeight / 2) ? 'bg-slate-200/30 dark:bg-slate-700/30 border-b-slate-800/30 dark:border-b-slate-200/30' : 'bg-slate-100/30 dark:bg-slate-800/30 border-b-transparent'} ${isDark === false && 'delay-500'} border-b-[1px] transition-all duration-500 fixed top-0 left-0 z-[10] backdrop-blur-sm w-full h-auto`}>
            <div className="w-full h-auto flex flex-row justify-between items-center py-[0.9rem] px-[2rem] lg:py-[1.4rem] lg:px-[4rem]">
                <div onClick={() => {window.scrollTo(0, 0); menuMobileOpen && mobileToggle()}} className="flex flex-col">
                    <p className="dark:text-white text-4xl myfont-Winky">Kopi Nusa</p>
                </div>
                <div className="flex flex-row items-center gap-6">
                    <div className="hidden w-auto h-auto sm:flex flex-row items-center gap-6">
                        {navbarPath.map((path, index) => (
                            <button onClick={() => {window.scrollTo(0, (eval(devHeight * path.location))); menuMobileOpen && mobileToggle()}} key={index}>
                                <span className="sm:text-lg dark:text-white">{path.path}</span>
                            </button>
                        ))}
                    </div>
                    <Around className={`text-yellow-500 dark:text-gray-400 text-3xl`} toggled={isDark} toggle={setIsDark} duration={600} />
                    <button onClick={() => mobileToggle()} className={`${menuMobileOpen ? 'rotate-[360deg]' : ' -rotate-[360deg]'} sm:hidden transition-all duration-200`}>
                        <span className={`${menuMobileOpen ? 'bi-x' : 'bi-list'} dark:text-white transition-all duration-500 text-3xl bi`}></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavbarComponent;