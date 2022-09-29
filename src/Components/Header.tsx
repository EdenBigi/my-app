import React, { useState } from 'react';
import logo from '../imgs/logo.png'
import { BiSearchAlt } from 'react-icons/bi'
import { AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'
import { FaUser } from 'react-icons/fa'
import { CartItemType } from '../App';



type Props = {
    cartItems: CartItemType[];
    isShowCart: boolean;
    setIsShowCart: React.Dispatch<React.SetStateAction<boolean>>;

}

const Header: React.FC<Props> = ({ setIsShowCart, cartItems, isShowCart }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='SquareRegular relative w-full flex items-center justify-between py-2'>
                <a href='https://edenbigi.github.io/my-app' >
                    <img src={logo} alt="logoImage" className='md:h-20 h-14 mt-2' />
                </a>
                <div className='hidden sm:flex mt-4  absolute left-72  '>
                    <a className='mr-4 xl:mr-14 xl:-ml-10 lg:-ml-28 md:-ml-32 -ml-40 lg:mr-10 hover:text-[#f4c860] xl:text-2xl lg:text-xl md:text-lg sm:text-base' href='https://edenbigi.github.io/my-app/shop'>Shop</a>

                    <a className='mr-4 xl:mr-14 lg:mr-10 hover:text-[#f4c860]  xl:text-2xl lg:text-xl md:text-lg sm:text-base ' href='https://edenbigi.github.io/my-app/contactus'>Contact-Us</a>
                    <a className='hover:text-[#f4c860]  xl:text-2xl lg:text-xl md:text-lg sm:text-base' href='https://edenbigi.github.io/my-app/about'>About</a>
                </div>

                <div className='absolute right-40 searchInput hidden sm:block md:top-11 sm:top-8'>
                    <form>
                        <button type='submit' className=' relative' ><BiSearchAlt className=' absolute -top-[13px] left-1 xl:text-xl ' />
                        </button><input type='search' placeholder=' search' className='pl-6 py-1  xl:py-2 xl:text-sm xl:uppercase border-black border-[1px] rounded-2xl xl:w-80 w-32 sm:w-40 md:w-44 lg:w-48' />
                    </form>

                </div>

                <div className='-ml-10 flex text-center group'>
                    <a className='mr-2 mt-1 absolute top-9 md:top-12 right-11 z-10 ' href='https://edenbigi.github.io/my-app/signin' >
                        <FaUser />
                    </a>
                    <div className='log invisible  group-hover:visible border-black border rounded-lg sm:w-24 md:w-24 lg:w-32 sm:right-[48px] right-[58px]  sm:h-10 bg-gray-500 sm:top-8 md:top-11 absolute'>
                        <a className='mr-2 hidden sm:block sm:text-[14px] w-16 group' href='https://edenbigi.github.io/my-app/signin'>
                            <span className='absolute top-1 left-1 p-1 w-16 border-black border rounded-lg' >Sign In</span>
                        </a>

                    </div>
                </div>


                <div className='absolute md:top-12 right-5 top-9 ' >
                    <AiOutlineShoppingCart className='text-2xl cursor-pointer ' onClick={() => { console.log(isShowCart); setIsShowCart(true) }} />
                    <span className='bg-gray-300 text-black w-6 h-6 rounded-full absolute -top-6 left-0 text-center leading-5 ' >
                        {cartItems.length}
                    </span>
                </div>



                {/* ======== Mobile menu ========== */}
                <div className={`sm:hidden backgroundArctic -z-10 fixed top-20  flex flex-col items-center h-full w-full text-xl space-y-3  ${!isOpen ? "-translate-y-full" : "translate-y-0"} ease-in-out duration-700`}>

                    <a className="pt-28" href='https://edenbigi.github.io/my-app/shop'>Shop</a>
                    <a className="" href='https://edenbigi.github.io/my-app/contactus'>Contact</a>
                    <a className="" href='https://edenbigi.github.io/my-app/about'>About</a>
                    <a className="" href="https://edenbigi.github.io/my-app/privacy-policy">Privacy-Policy</a>

                </div>
                {
                    !isOpen ?
                        <FiMenu className='cursor-pointer sm:hidden absolute top-10 right-20' onClick={() => { setIsOpen(!isOpen) }} />
                        :

                        <AiOutlineClose className='cursor-pointer absolute  top-10 right-20 ' onClick={() => { setIsOpen(!isOpen) }} />
                }
            </div>

        </>
    )

}

export default Header;
