
import { FiMessageSquare } from 'react-icons/fi'

const About = () => {
    return (<>

        <div className='px-4 sm:w-full w-screen xl:px-[150px] '>

            <div className='mainAbout backgroundArctic  text-left rounded-xl mb-4 px-8 py-1 pt-6'>
                <div className='flex'>
                    <FiMessageSquare className=' w-12 h-14' /> <p className=' uppercase text-xl font-bold font-serif mt-2 ml-2'>Аbout the marketplace</p>
                </div>
                <h1 className='text-4xl mb-4'>Buy & Sells
                    second hand fashion</h1>

                <p className=' mb-4 '>
                    YAD-2-YOKRA is a marketplace for purchasing and selling designer handbags and other luxury products. Sellers and buyers from all over the world meet at the YAD-2-YOKRA web site.
                </p >
                <p className=' mb-4'>
                    YAD-2-YOKRA is an ideal place where private sellers, outlet stores, small boutiques, and professional buyers can improve their sales efficiency, make secure transactions and sell internationally.
                </p ><p className=' mb-4'>
                    Thousands of YAD-2-YOKRA clients are waiting to purchase your product! If you are thinking of renewing your wardrobe, selling designer handbags or clothing, join us for one of the most pleasant shopping experiences you will ever have.
                </p > <p className=' mb-4'>
                    ✓ YAD-2-YOKRA verifies authentication of any brand name products such as handbags, shoes, or any other designer accessory!
                </p><p className=' mb-4'>
                    ✓ YAD-2-YOKRA is selling brand new and pre-owned luxury goods!
                </p><p className=' mb-4'>
                    ✓ With YAD-2-YOKRA, you can purchase CHANEL, LOUIS VUITTON, HERMES, DIOR, GUCCI, PRADA, and other leading brand name products for the best price.
                </p><p className=' mb-4'>
                    We guarantee professional authentication service, secure shopping experience, and timeliness payouts for sold goods.
                </p><p className=' mb-4'>
                    Shop with confidence at YAD-2-YOKRA!
                </p>
            </div>
        </div>
    </>
    )
}
export default About;
