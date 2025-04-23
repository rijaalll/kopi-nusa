import HeroImg from '../../img/web/kopiSenyum.png'

function HeroSection() {
    return (
        <div className="w-full h-[100dvh]">
            <div className='w-full h-full flex flex-col md:flex-row-reverse md:mt-[2rem]'>
                
                <div className='w-full basis-[60%] md:basis-1/2'>
                    <div className='w-full h-full flex items-end justify-center md:items-center'>
                        <div className='w-[100%] max-w-[200px] md:max-w-[250px] lg:max-w-[350px] xl:max-w-[450px]'>
                            <img src={HeroImg} alt={HeroImg} />
                        </div>
                    </div>
                </div>

                <div className='w-full basis-[40%] md:basis-1/2'>
                    <div className='w-full h-full flex items-start justify-center md:items-center md:pl-[3rem]'>
                        <div className='flex flex-col items-center gap-3 lg:gap-5'>
                            <div className='flex flex-row items-center gap-2'>
                                <section>
                                    <p className='dark:text-white text-5xl tracking-wide font-semibold md:text-6xl lg:text-7xl xl:text-8xl'>Kopi</p>
                                </section>
                                <section className='bg-[#FF9900] py-2 px-3 rounded-lg'>
                                    <p className='text-white dark:text-black text-5xl tracking-wide font-semibold md:text-6xl lg:text-7xl xl:text-8xl'>Nusa</p>
                                </section>
                            </div>
                            <p className='dark:text-white text-xl tracking-normal md:text-2xl lg:text-3xl xl:text-4xl'>coffe shop</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroSection;