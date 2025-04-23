import quoteData from '../../data/Quote.json';

function QuoteSection() {
    const quoteText = quoteData.quotes;
    return (
        <div className="w-full h-[100dvh]">
            <div className="w-full h-full">
                <div className="w-full h-full flex flex-col"> 

                    <div className="basis-[20%] lg:basis-[25%]">
                        <div className="w-full h-full flex flex-col justify-end items-center">
                            <p className="text-2xl lg:text-4xl dark:text-white">{`Apa kata mereka?`}</p>
                        </div>
                    </div>

                    <div className="basis-[80%] max-h-[80%]">
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-[85%] h-[80%]">
                                <div className="w-full h-full px-2">
                                    <div className="w-full h-full flex flex-col lg:flex-row lg:flex-wrap gap-5 overflow-y-auto">
                                        {quoteText.map((item, index) => (
                                            <div key={index} className='w-full lg:w-[48%] h-auto flex flex-row justify-between bg-slate-300/30 dark:bg-slate-700/30 py-2 px-4 rounded-lg'>
                                                <div className='flex flex-col'>
                                                    <div className='w-full text-wrap'>
                                                        <p className='dark:text-white'>{item.quote}</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-gray-500 dark:text-gray-300'>-{item.author}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
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

export default QuoteSection;