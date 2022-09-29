
import { useEffect, useState, useRef } from 'react'
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'



const featuredProducts = [
    './slide_2.jpg',
    './slide_3.jpg',
    './slide_new_mob.jpg',
]

let count = 0;
let slideInterval: any;

const Commercials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderRef: any = useRef();

    const removeAnimation = () => {
        sliderRef.current.classList.remove('fade-anim');
    }

    useEffect(() => {
        sliderRef.current.addEventListener('animationend', removeAnimation)
        startSlider();
        return () => {
            pauseSlider();
        };
    })

    const startSlider = () => {
        slideInterval = setInterval(() => {
            handleOnNextClick()
        }, 3500);
    }
    const pauseSlider = () => {
        clearInterval(slideInterval);
    }

    const handleOnPeviousClick = () => {
        const productsLength = featuredProducts.length;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count);
        sliderRef.current.classList.add('fade-anim');
    };
    const handleOnNextClick = (

    ) => {
        count = (count + 1) % featuredProducts.length;
        setCurrentIndex(count);
        sliderRef.current.classList.add('fade-anim');
    };




    return (

        <>
            <div ref={sliderRef} className="w-full select-none relative SquareRegular">
                <img src={featuredProducts[currentIndex]} className='w-full xl:h-[692px]' alt="" />

                {featuredProducts[currentIndex] === './slide_2.jpg' && <div className=' absolute top-5 right-4 w-36 sm:w-36 xl:w-96 xl:top-12 xl:right-20  text-center '><p className=' uppercase xl:text-[60px] text-[14px]  xl:w-96  xl:mb-8 mb-4'>Concierge <br /> Service</p>
                    <p className=' xl:w-96 xl:text-[30px] xl:mb-28 text-[13px] mb-2 '>Sell your unwanted luxury without leaving home</p><a href='/' className='uppercase xl:p-4 sm:text-[10px] sm:p-1 text-[10px] p-1 rounded-lg bg-black text-white font-semibold hover:bg-white hover:border hover:border-black hover:text-black' >Learn More</a></div>}

                {featuredProducts[currentIndex] === './slide_3.jpg' && <div className=' absolute top-20 xl:right-40 right-1 xl:top-1/2 text-center w-[200px] xl:w-[700px]'><p className=' xl:text-[50px] xl:mb-14 mb-3'>All You Need is LV</p><a href='/shop/brand/louisvuitton' className='uppercase text-center xl:p-4 p-1 text-[14px] rounded-lg bg-rose-300 font-semibold hover:bg-white hover:border hover:border-black' >Shop Louis Vuitton</a>
                </div>}

                {featuredProducts[currentIndex] === './slide_new_mob.jpg' && <div className='absolute xl:top-40 xl:left-28 top-5 left-10 text-center xl:w-[450px]'><p className=' uppercase xl:text-[60px]'>Sell your</p><p className=' uppercase xl:text-[60px] xl:-mt-6 xl:-mb-2'>first item</p>
                    <p className=' xl:text-[40px] xl:mb-28 mb-8'>Fast. Secure. Reliable.</p><a href='/' className='uppercase xl:p-4 p-1 text-[12px] rounded-lg bg-black text-white font-semibold hover:bg-white hover:border hover:border-black hover:text-black' >Learn More</a></div>}


                <div className="absolute top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center w-full">
                    <button onClick={handleOnPeviousClick}><IoIosArrowDropleft className='xl:w-6 xl:h-6' /></button>
                    <button onClick={handleOnNextClick}><IoIosArrowDropright className='xl:w-6 xl:h-6' /></button>
                </div>

            </div>


        </>
    )
}

export default Commercials;