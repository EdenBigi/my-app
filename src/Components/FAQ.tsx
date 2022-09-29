import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const FAQ = () => {
    const [isfirstOpen, setIsFirstOpen] = useState(false);
    const [isSecOpen, setIsSecOpen] = useState(false);
    const [isThirdOpen, setIsThirdOpen] = useState(false);
    const [isFourOpen, setIsFourOpen] = useState(false);
    const [isFiveOpen, setIsFiveOpen] = useState(false);


    return (
        <>
            <div className='Googlefont text-center text-xl my-10  '>
                <a className='text-gray-400' href="/">Home {">"} </a> <span className='text-gray-400'>Buying F.A.Qs</span>
                <div className=' text-black uppercase mt-4 mb-10'>
                    Buying F.A.Qs
                </div>

                {/* FIRST FAQ */}
                <div className=' container mx-auto 2xl:w-[1000px] xl:w-[800px] pb-2 w-[600px] text-left'>
                    {!isfirstOpen ?
                        <div className="relative flex justify-between items-center cursor-pointer bg-gray-400 rounded-lg p-4 "
                            onClick={() => {
                                setIsFirstOpen(!isfirstOpen)
                                setIsSecOpen(false)
                                setIsThirdOpen(false)
                                setIsFourOpen(false)
                                setIsFiveOpen(false)


                            }}>

                            <span className="ml-4 md:ml-0 2xl:text-xl xl:text-lg lg:text-md text-sm">1. What is the protected purchase on YAD-2-YOKRA?</span><IoIosArrowDown className="absolute right-5 top-5 md:right-2" />
                        </div>
                        :
                        <div className="relative flex cursor-pointer bg-gray-400 rounded-lg p-4 " onClick={() => { setIsFirstOpen(!isfirstOpen) }}>
                            <div className=''>
                                <span className="ml-4 md:ml-0 2xl:text-xl xl:text-lg lg:text-md text-sm">1. What is the protected purchase on YAD-2-YOKRA?</span>
                            </div>
                            <IoIosArrowUp className=" absolute right-5 top-5 md:right-2" />
                        </div>
                    }

                    <div className={`${!isfirstOpen ? "hidden" : ""} pb-8`}>
                        <div className=" 2xl:w-[1000px] xl:w-[800px] w-[600px] text-left pt-5  px-8 2xl:text-lg xl:text-base lg:text-sm md:text-xs" >
                            <p className="text-gray-500" >
                                You are protected every time you place an order on YAD-2-YOKRA. We are guarantee 100% authenticity of every product on our marketplace.
                                We keep your payment safe until we confirm the condition and authenticity of the item you purchased.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Second FAQ */}
                <div className=' container mx-auto 2xl:w-[1000px] xl:w-[800px] w-[600px] text-left pb-2 '>
                    {!isSecOpen ?
                        <div className="relative flex justify-between items-center cursor-pointer bg-gray-400 rounded-lg p-4 "
                            onClick={() => {
                                setIsFirstOpen(false)
                                setIsSecOpen(!isSecOpen)
                                setIsThirdOpen(false)
                                setIsFourOpen(false)
                                setIsFiveOpen(false)


                            }}>

                            <span className="ml-4 md:ml-0 2xl:text-xl xl:text-lg lg:text-md text-sm">2. What is the process of the protected purchase?</span><IoIosArrowDown className="absolute right-5 top-5 md:right-2" />
                        </div>
                        :
                        <div className="relative flex cursor-pointer bg-gray-400 rounded-lg p-4 " onClick={() => { setIsSecOpen(!isSecOpen) }}>
                            <div className=''>
                                <span className="ml-4 md:ml-0 2xl:text-xl xl:text-lg lg:text-md text-sm">2. What is the process of the protected purchase?</span>
                            </div>
                            <IoIosArrowUp className="absolute right-5 top-5 md:right-2" />
                        </div>
                    }

                    <div className={`${!isSecOpen ? "hidden" : ""} pb-8`}>
                        <div className=" 2xl:w-[1000px] xl:w-[800px] w-[600px]text-left pt-2 px-8 2xl:text-lg xl:text-base lg:text-sm text-sm"  >
                            <h1 className="uppercase font-bold  my-4">1. PLACEMENT OF ORDER</h1>
                            <p className="text-gray-500 " >
                                After you fill your order, we hold your payment until the condition and authenticity
                                of the item you purchased is being confirmed.мм
                            </p>
                            <h1 className=" font-bold my-4">2. We verify your item</h1>
                            <p className="text-gray-500" >
                                If the item won’t pass YAD-2-YOKRA authentication, we will return your money to the original method of payment.
                            </p>
                            <h1 className=" font-bold my-4">3. Delivery</h1>
                            <p className="text-gray-500" >
                                After a successful authentication, the item will be shipped to its buyer.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Third FAQ */}
                <div className=' container mx-auto 2xl:w-[1000px] xl:w-[800px] text-left  pb-2 w-[600px]  '>
                    {!isThirdOpen ?
                        <div className="relative flex justify-between items-center cursor-pointer bg-gray-400 rounded-lg p-4 "
                            onClick={() => {
                                setIsFirstOpen(false)
                                setIsSecOpen(false)
                                setIsThirdOpen(!isThirdOpen)
                                setIsFourOpen(false)
                                setIsFiveOpen(false)



                            }}>

                            <span className="ml-4 md:ml-0 2xl:text-xl xl:text-lg lg:text-md text-sm">3. I purchased from private seller, can I return the item?</span><IoIosArrowDown className="absolute right-5 top-5 md:right-2" />
                        </div>
                        :
                        <div className="relative flex cursor-pointer bg-gray-400 rounded-lg p-4 " onClick={() => { setIsThirdOpen(!isThirdOpen) }}>
                            <div className=''>
                                <span className="ml-4 md:ml-0 2xl:text-xl xl:text-lg lg:text-md text-sm ">3. I purchased from private seller, can I return the item?</span>
                            </div>
                            <IoIosArrowUp className="absolute right-5 top-5 md:right-2" />
                        </div>
                    }

                    <div className={`${!isThirdOpen ? "hidden" : ""} pb-8`}>
                        <div className=" 2xl:w-[1000px] xl:w-[800px] w-[600px] text-left pt-2 px-8 2xl:text-lg xl:text-base lg:text-sm text-sm"  >

                            <p className="text-gray-500 py-4 " >
                                No. 7 day return policy works only for items being sold by professional sellers, or «ready to ship» items.
                            </p>

                            <p className="text-gray-500" >
                                If you change your mind about the item you purchased you may publish it for sale.
                                If you publish your listing in 48 hours period after you receive your purchase, you will avoid YAD-2-YOKRA website seller fees.
                            </p>

                        </div>
                    </div>
                </div>


                {/* Four FAQ */}
                <div className=' container mx-auto 2xl:w-[1000px] xl:w-[800px] w-[600px] text-left pb-2  '>
                    {!isFourOpen ?
                        <div className="relative flex justify-between items-center cursor-pointer bg-gray-400 rounded-lg p-4 "
                            onClick={() => {
                                setIsFirstOpen(false)
                                setIsSecOpen(false)
                                setIsThirdOpen(false)
                                setIsFourOpen(!isFourOpen)
                                setIsFiveOpen(false)



                            }}>

                            <span className="ml-4 md:ml-0  2xl:text-xl xl:text-lg lg:text-md text-sm">4. What is the difference between a private seller and a professional seller?</span><IoIosArrowDown className="absolute right-5 top-5 md:right-2" />
                        </div>
                        :
                        <div className="relative flex cursor-pointer bg-gray-400 rounded-lg p-4 " onClick={() => { setIsFourOpen(!isFourOpen) }}>
                            <div className=''>
                                <span className="ml-4 md:ml-0 2xl:text-xl xl:text-lg lg:text-md text-sm ">4. What is the difference between a private seller and a professional seller?</span>
                            </div>
                            <IoIosArrowUp className="absolute right-5 top-5 md:right-2" />
                        </div>
                    }

                    <div className={`${!isFourOpen ? "hidden" : ""} pb-8`}>
                        <div className=" 2xl:w-[1000px] xl:w-[800px] w-[600px] text-left pt-2 px-8 2xl:text-lg xl:text-base lg:text-sm text-sm"  >

                            <p className="text-gray-500 py-4 " >
                                Items of private seller are non-returnable.
                            </p>

                            <p className="text-gray-500" >
                                Items of professional sellers have a seven day return policy.
                                Some professional seller items are located in YAD-2-YOKRA warehouse, which has a significantly reduced delivery time.
                            </p>

                        </div>
                    </div>
                </div>


                {/* Five FAQ */}
                <div className=' container mx-auto 2xl:w-[1000px] xl:w-[800px] w-[600px] text-left pb-2 '>
                    {!isFiveOpen ?
                        <div className="relative flex justify-between items-center cursor-pointer bg-gray-400 rounded-lg p-4 "
                            onClick={() => {
                                setIsFirstOpen(false)
                                setIsSecOpen(false)
                                setIsThirdOpen(false)
                                setIsFourOpen(false)
                                setIsFiveOpen(!isFiveOpen)



                            }}>

                            <span className="ml-4 md:ml-0 2xl:text-xl xl:text-lg lg:text-md text-sm">5. Why can’t I choose a straight delivery from the seller to me? </span><IoIosArrowDown className="absolute right-5 top-5 md:right-2" />
                        </div>
                        :
                        <div className="relative flex cursor-pointer bg-gray-400 rounded-lg p-4 " onClick={() => { setIsFiveOpen(!isFiveOpen) }}>
                            <div className=''>
                                <span className="ml-4 md:ml-0 2xl:text-xl xl:text-lg lg:text-md text-sm ">5. Why can’t I choose a straight delivery from the seller to me? </span>
                            </div>
                            <IoIosArrowUp className="absolute right-5 top-5 md:right-2" />
                        </div>
                    }

                    <div className={`${!isFiveOpen ? "hidden" : ""} pb-8`}>
                        <div className=" 2xl:w-[1000px] xl:w-[800px] w-[600px] text-left pt-2 px-8 2xl:text-lg xl:text-base lg:text-sm text-sm"  >
                            <p className="text-gray-500 py-4" >
                                YAD-2-YOKRA specializes in authentic products.
                                In order to avoid transactions of counterfeit item, this shipping method is not available on the YAD-2-YOKRA web site.
                            </p>

                        </div>
                    </div>
                </div>







            </div>



        </>
    )
}

export default FAQ;