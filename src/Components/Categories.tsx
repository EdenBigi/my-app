
const Categories = () => {
    return (
        <>
            <p className='SquareRegular uppercase text-center xl:text-4xl text-[18px] Audiowide lg:py-2 sm:px-32  '>
                Categories</p>
            <div className="grid grid-cols-4 gap-4 textFont uppercase text-lg Audiowide py-4 w-full  xl:px-36 2xl:px-40 md:px-16 lg:px-20 sm:px-14 px-4">

                <div className='row-span-2 backgroundArctic relative  text-left rounded-xl cursor-pointer'  >
                    <a href="/shop/bags" className='' >
                        <img src="./categoriesImgs/bagsCategory.png" alt="" className='absolute xl:top-10 xl:right-3 right-2 top-5 xl:w-70  h-20 lg:w-48 lg:h-32 lg:ml-8 sm:w-32 sm:h-20 xl:w-[300px] xl:h-[170px] ' />
                        <span className=' absolute xl:bottom-3 xl:left-4 lg:left-4 bottom-2 left-2 text-[14px] lg:text-[20px] md:text-[18px] xl:text-[26px]  '>bags</span>
                    </a>
                </div>

                <div className='backgroundArctic relative text-left rounded-xl 2xl:py-20 px-4 xl:py-20  lg:py-16 py-10'>
                    <a href='/shop/wallets' title='wallets' className=''>
                        <img src="./categoriesImgs/walletsCategory.png" alt="" className=' absolute top-3 right-0 w-26 h-12 xl:w-[200px] xl:h-[130px] lg:w-32 lg:h-24 md:w-24 md:h-16  sm:w-16  ' />
                        <p className=' absolute xl:bottom-3 xl:left-5 lg:bottom-2 text-[11px] xl:text-[20px] lg:text-[16px] md:text-[14px] bottom-0' > wallets</p>
                    </a>
                </div>

                <div className='backgroundArctic relative pt-4 text-left rounded-xl  px-2  py-10'>
                    <a href='/shop/accessories' title='accessories'  >
                        <img src="./categoriesImgs/accessoriesCategory.png" alt="" className=' absolute w-16 top-5 md:top-2 right-0 xl:top-8 lg:-right-3 lg:top-6 mb-5 h-8 sm:w-16 md:w-24 md:h-16 xl:w-64 xl:h-24 lg:w-36 lg:h-20' />
                        <span className='absolute xl:bottom-3 xl:left-5 lg:bottom-2 bottom-0 xl:text-[20px] lg:text-[16px] md:text-[14px] text-[11px]'> accessories</span>
                    </a>
                </div>

                <div className='backgroundArctic relative text-left rounded-xl pt-0 px-4 xl:py-14 py-10'>
                    <a href='/shop/shoes' title='shoes' >
                        <img src="./categoriesImgs/shoesCategory.png" alt="" className='absolute  xl:top-1 lg:right-2 lg:top-1 right-0 mt-4 -mb-2 xl:w-52 sm:w-16  xl:h-32 lg:w-36 lg:h-24 w-14 h-14 md:w-24 md:h-16 ' />
                        <span className='absolute xl:bottom-3 xl:left-5 bottom-0 lg:bottom-2 xl:text-[20px] lg:text-[16px] md:text-[14px] text-[11px]' > shoes</span>
                    </a>
                </div>

                <div className='backgroundArctic relative text-left rounded-xl 2xl:py-20 xl:py-20 px-4  lg:py-16 py-10'>
                    <a href='/shop/clothing' title='clothing' className=''>
                        <img src="./categoriesImgs/clothingCategory1.png" alt="" className=' absolute  top-2 right-0 xl:right-3 xl:w-28 xl:h-36 lg:w-36 lg:h-24 w-14 h-12 md:w-24 md:h-16' />
                        <span className='absolute xl:bottom-3 xl:left-5 bottom-0 lg:bottom-2 xl:text-[20px] lg:text-[16px] md:text-[14px] text-[11px]'> clothing</span>
                    </a>
                </div>

                <div className='backgroundArctic relative pt-6 text-left rounded-xl px-4 xl:py-14 py-10'>
                    <a href='/shop/watches' title='watches' >
                        <img src="./categoriesImgs/watchesCategory.png" alt="" className='absolute xl:top-5 right-2 md:top-5 top-3  xl:w-52 xl:h-32 lg:w-36 lg:h-24 h-12 md:w-24 md:h-12 ' />
                        <span className='absolute xl:bottom-3 xl:left-5 bottom-0 lg:bottom-2 xl:text-[20px] lg:text-[16px] md:text-[14px] text-[11px]'> watches</span>
                    </a>
                </div>

                <div className='backgroundArctic relative pt-6 text-left rounded-xl px-4 xl:py-14 py-10'>
                    <a href='/shop/jewellery' title='jewellery' >
                        <img src="./categoriesImgs/jewelleryCategory.png" alt="" className='absolute top-6 right-4 xl:top-8 lg:top-9 -mt-4 mb-1 xl:w-44 xl:h-32 w-12 h-12 lg:w-28 lg:h-20 md:w-20 md:h-16' />
                        <span className='absolute xl:bottom-3 xl:left-5 bottom-0 lg:bottom-2 xl:text-[20px] lg:text-[16px] md:text-[14px] left-3 text-[11px]'> jewellery</span>
                    </a>
                </div>
            </div >
        </>
    )
}
export default Categories;