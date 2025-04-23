import { useState } from 'react';

import AboutImg from '../../img/web/kopiGembira.png';
import AboutData from '../../data/AboutData.json';

function AboutSection() {
    const aboutData = AboutData.Text;
    const [ aboutText, setAboutText ] = useState(true);
    
    return (
        <div className="w-full h-[100dvh]">
            <div className='w-full h-full flex flex-col lg:flex-row'>

                <div className='basis-[28%] sm:basis-[35%]'>
                    <div className='w-full h-full flex justify-center items-end lg:items-center'>
                        <div className='w-auto h-auto flex flex-row lg:flex-col gap-2 items-center'>
                            <div className='w-full max-w-[90px] sm:max-w-[120px] lg:max-w-[200px] xl:max-w-[250px] h-auto dark:bg-slate-100/30 rounded-lg'>
                                <img src={AboutImg} alt="" />
                            </div>
                            <section className='flex flex-col'>
                                <p className='dark:text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl'>{aboutText ? 'Tentang' : 'Sejarah'}</p>
                                <p className='dark:text-white text-3xl myfont-Winky sm:text-4xl lg:text-5xl xl:text-6xl'>{`Kopi Nusa`}</p>
                            </section>
                        </div>
                    </div>
                </div>

                <div className='basis-[72%] sm:basis-[65%] lg:basis-[65%] lg:h-full'>
                    <div className='w-full h-full flex justify-center items-center lg:items-end'>
                        <div className='w-[86%] h-[84%]'>
                            <div className='w-full h-full flex flex-col'>
                                <div className='flex flex-row gap-5 ml-[1rem] sm:ml-[2rem] lg:ml-[1rem] xl:ml-[2rem]'>
                                    {['Tentang', 'Sejarah'].map((item, index) => (
                                        <button key={index} onClick={() => setAboutText(item === "Tentang" ? true : false)} className={`${aboutText === true && item === 'Tentang' && 'bg-gray-300 dark:bg-gray-600'} ${aboutText === false && item === 'Sejarah' && 'bg-gray-300 dark:bg-gray-600'} transition-all duration-300 py-1 px-3 rounded-lg`}>
                                            <span className='dark:text-white lg:text-lg'>{item}</span>
                                        </button>
                                    ))}
                                </div>
                                <div className='w-full h-full max-h-[] flex justify-center items-center'>
                                    <div className='w-[90%] h-[90%]'>
                                        <div className='w-full h-full max-h-[90%] sm:max-h-[90%] text-wrap overflow-y-auto '>
                                            <p className='dark:text-white text-xl tracking-wide'>{aboutText ? aboutData.About : aboutData.Sejarah}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutSection;