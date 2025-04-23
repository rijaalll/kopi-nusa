import ContactImg from '../../img/web/kopiSyedi.png';
import ContactData from '../../data/ContactData.json';
import { href } from 'react-router-dom';

function ContactSection() {

    const contactData = ContactData.contact;

    return (
        <div className="w-full h-[100dvh]">
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="w-auto h-auto flex flex-col items-center gap-5">

                    <div className='w-auto h-auto flex flex-col'>
                        <div className='w-full h-full max-w-[200px]'>
                            <img src={ContactImg} />
                        </div>
                        <div className='w-full text-center'>
                            <p className='dark:text-white text-2xl'>{`Hubungi Saya`}</p>
                        </div>
                    </div>

                    <div className='w-[90%] h-auto flex flex-col gap-4 justify-center items-start'>
                        {contactData.map((contact, index) => (
                            <button key={index} onClick={() => window.open(contact.URL, '_blank')} className='flex relx-row gap-3'>
                                <span className={`bi ${contact.class} text-xl dark:text-white/90`}></span>
                                <span className='text-lg dark:text-white/90'>{contact.name}</span>
                            </button>
                        ))}
                    </div>

                </div>
            </div>
            <div className='absolute w-full h-auto left-0 bottom-0 text-center py-4 bg-gray-200 dark:bg-gray-700'>
                <p className='text-sm dark:text-white/50 text-black/50'>&copy;{`${new Date().getFullYear()}  by Ahmad Rizal`}</p>
                <p className='text-xs dark:text-white/50 text-black/50'>{`click github link to view code`}</p>
            </div>
        </div>
    )
}

export default ContactSection;