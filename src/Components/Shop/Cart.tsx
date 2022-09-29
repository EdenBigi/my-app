
import React, { useRef } from 'react'
import { AiOutlinePlusSquare, AiOutlineMinusSquare, AiOutlineClose } from "react-icons/ai";

import { CartItemType } from '../../App';


type Props = {
    cart: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
    setIsShowCart: Function;
}

const Cart: React.FC<Props> = ({ cart, addToCart, removeFromCart, setIsShowCart }) => {


    const cartRef: any = useRef();
    const total = (items: CartItemType[]) => {
        return items.reduce((cal, item) => {
            return cal + item.price * item.amount;
        }, 0);
    };

    const handleCloseCart = () => {
        cartRef.current.classList.remove('animate-fade-in');
        cartRef.current.classList.add('animate-fade-out');
        setTimeout(() => {
            setIsShowCart(false);
        }, 250);
    };


    const DollarUsd = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <div className=' fixed inset-0 bg-[rgba(0,0,0,0.7)] z-10 ' onClick={handleCloseCart}>
            <div ref={cartRef} onClick={(e) => e.stopPropagation()} className='bg-white xl:w-[300px] lg:w-[400px] md:w-[600px] w-full h-full absolute right-0 overflow-y-scroll animate-fade-in ' >
                <h1 className='bg-black text-white py-2 text-center'>Cart</h1>
                <div className='flex flex-col items-center px-2 py-4'>
                    <button className=' fixed top-[50px] right-[20px]'><AiOutlineClose className='text-lg sm:text-base' onClick={handleCloseCart} /></button>
                    {cart.length === 0 ? <p>No items in cart.</p> : null}
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="text-center border-b-[3px] w-full mb-2 flex flex-col items-center"
                        >
                            <img
                                className="w-96 h-64 xl:w-32 xl:h-24 lg:w-58 lg:h-40 md:w-72 md:h-48  "
                                src={item.image}
                                alt={item.title}
                            />
                            <h3 className="Audiowide font-bold text-[0.8rem] mt-4">{item.title}</h3>
                            <p className="Googlefont flex font-bold mt-4 uppercase text-[12px]">
                                amount: <p className='text-sm ml-2 -mt-[2px]'>{item.amount}</p>
                            </p>

                            <div className="flex items-center my-4">
                                <button onClick={() => removeFromCart(item.id)}>
                                    <AiOutlineMinusSquare className="sm:text-[30px] text-[20px]" />
                                </button>
                                <p className=" Googlefont mx-2">
                                    {DollarUsd.format(item.price)}
                                </p>
                                <button onClick={() => addToCart(item)}>
                                    <AiOutlinePlusSquare className="sm:text-[30px] text-[20px]" />
                                </button>
                            </div>
                        </div>
                    ))}
                    {cart.length > 0 && <div className="flex w-full "><p className='Googlefont text-xl w-full '>Total: </p> <p className='Googlefont text-xl'> {DollarUsd.format(total(cart))}</p></div>}


                </div>
            </div>
        </div>
    )
}

export default Cart;
