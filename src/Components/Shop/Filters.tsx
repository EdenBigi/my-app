import React, { useEffect, useState } from "react";
import { CartItemType } from '../../App';
import { FiFilter } from 'react-icons/fi'
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type Props = {
    activeCategory: string;
    setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
    products: CartItemType[];
    setFilters: React.Dispatch<React.SetStateAction<CartItemType[]>>;
    activePrice: string;
    setActivePrice: React.Dispatch<React.SetStateAction<string>>;
    activeBrand: string;
    setActiveBrand: React.Dispatch<React.SetStateAction<string>>;
    activeColor: string;
    setActiveColor: React.Dispatch<React.SetStateAction<string>>;
}

const categories = [
    {
        id: 1,

        name: "",
    },
    {
        id: 2,
        name: "Bags",

    },
    {
        id: 3,
        name: "Wallets",

    },
    {
        id: 4,
        name: "Accessories",

    },
    {
        id: 5,
        name: "Shoes",

    },
    {
        id: 6,
        name: "Clothing",

    },
    {
        id: 7,
        name: "Watches",

    },
    {
        id: 8,
        name: "Jewellery",

    },
];

const brand = [
    {
        id: 1,
        name: "",
    },
    {
        id: 2,
        name: "Chanel",
    },
    {
        id: 3,
        name: "Louis Vuitton",
    },
    {
        id: 4,
        name: "Christian Dior",
    },

    {
        id: 5,
        name: "Prada",
    },
    {
        id: 6,

        name: "Fendi",
    },
    {
        id: 7,

        name: "Valentino Garavani",
    },
    {
        id: 8,

        name: "Dolce & Gabbana",
    },
    {
        id: 9,
        name: "Versace",
    },
    {
        id: 10,
        name: "Jimmy Choo",
    },
    {
        id: 11,
        name: "Gucci",
    },
    {
        id: 12,
        name: "Michael Kors",
    },


    {
        id: 13,
        name: "Rolex",
    },
];

const prices = [
    {
        id: 1,
        name: '500-1000',

    },
    {
        id: 2,
        name: '1000-2500',

    },
    {
        id: 3,
        name: '2500-5000',

    },
    {
        id: 4,
        name: '5000-10000',
    },
    {
        id: 5,
        name: '10000+',
    }

];

const color = [
    {
        id: 1,
        name: '',

    },
    {
        id: 2,
        name: 'Black',

    },
    {
        id: 3,
        name: 'Red',

    },
    {
        id: 4,
        name: 'Pink',

    },
    {
        id: 5,
        name: 'Brown',

    },
    {
        id: 6,
        name: 'Gold',

    },
    {
        id: 7,
        name: 'White',

    },
    {
        id: 8,
        name: 'Turquoise',

    },
    {
        id: 9,
        name: 'Silver',

    },
    {
        id: 10,
        name: 'Gray',

    },
    {
        id: 11,
        name: 'Navy',

    },
    {
        id: 12,
        name: 'Purple',

    },
    {
        id: 13,
        name: 'Blue',

    },
    {
        id: 14,
        name: 'Bordo',

    },
    {
        id: 15,
        name: 'Rose',

    },
    {
        id: 16,
        name: 'Green',

    },
    {
        id: 17,
        name: 'Orange',

    },
    {
        id: 18,
        name: 'Yellow',

    },

];

const Filters: React.FC<Props> = ({ activeCategory, setActiveCategory, activePrice, setActivePrice, activeBrand, setActiveBrand, activeColor, setActiveColor, products, setFilters }) => {
    const [isFilterOpen, setFilterIsOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isBrandOpen, setIsBrandOpen] = useState(false);
    const [isPriceOpen, setIsPriceOpen] = useState(false);
    const [isColorOpen, setIsColorOpen] = useState(false);



    useEffect(() => {
        if (activeCategory === 'All' && activePrice === '' && activeBrand === 'All' && activeColor === 'All') {
            setFilters(products);
            return;
        }

        const filterCategory = products.filter(item =>
            activeCategory === 'All' ? item : item.category === activeCategory);

        const filterBrand = filterCategory.filter(item =>
            activeBrand === 'All' ? item : item.title === activeBrand);

        const filterColor = filterBrand.filter(item =>
            activeColor === 'All' ? item : item.color === activeColor);

        const filterPrice = filterColor.filter(item =>
            activePrice === '' ? item :
                activePrice === '10000+' ? item.price >= 10000 :
                    activePrice === '5000-10000' ? item.price >= 5000 && item.price <= 10000 :
                        activePrice === '2500-5000' ? item.price >= 2500 && item.price <= 5000 :
                            activePrice === '1000-2500' ? item.price >= 1000 && item.price <= 2500 :
                                activePrice === '500-1000' ? item.price >= 500 && item.price <= 1000 : ""
        );

        setFilters(filterPrice);


    }, [activeCategory, activePrice, activeBrand, activeColor, products, setFilters]);




    return (
        <>

            <div className="sm:hidden flex  cursor-pointer w-24 border-2 border-gray-300 rounded-lg mx-auto p-1 " onClick={() => { setFilterIsOpen(!isFilterOpen) }}>
                <FiFilter className='mt-1 mr-2 ' />
                <span className='uppercase '>Filters</span>
            </div>

            <div className={` uppercase sm:hidden backgroundArctic font-mono fixed flex flex-col top-20 h-full min-h-screen pb-32 w-full text-xl  ${!isFilterOpen ? "-translate-y-full" : "translate-y-0"} ease-in-out duration-2000`}>
                <div className={`flex flex-wrap sm:hidden items-start z-0 max-w-[1056px] mx-auto -mb-4 mt-8 ${activeColor === "All" && activeCategory === "All" && activePrice === "" && activeBrand === "All" ? "hidden" : ""}`}>
                    <div onClick={() => {
                        setActiveCategory("All");
                        setActiveBrand("All");
                        setActiveColor("All");
                        setActivePrice("");
                    }}
                        className="flex text-sm ml-1 mb-1 p-2 border-black border rounded-lg"> Clear All<AiOutlineClose className="ml-1 -mr-1 text-[12px]" />
                    </div>

                    <div className={`flex ml-1 mb-1 text-sm p-2 border-black border rounded-lg ${activeCategory !== "All" ? "" : "hidden"}`} onClick={() => setActiveCategory("All")}>{activeCategory !== "All" && "Catergory: " + activeCategory}<AiOutlineClose className="ml-1 -mr-1 text-[12px]" /></div>
                    <div className={`flex ml-1 mb-1 text-sm p-2 border-black border rounded-lg ${activeBrand !== "All" ? "" : "hidden"}`} onClick={() => setActiveBrand("All")}>{activeBrand !== "All" && "Brand: " + activeBrand}<AiOutlineClose className="ml-1 -mr-1 text-[12px]" /></div>
                    <div className={`flex ml-1 mb-1 text-sm p-2 border-black border rounded-lg ${activePrice !== "" ? "" : "hidden"}`} onClick={() => setActivePrice("")}>{activePrice !== "" && "Price: " + activePrice} <AiOutlineClose className="ml-1 -mr-1 text-[12px]" /></div>
                    <div className={`flex ml-1 mb-1text-sm p-2 border-black border rounded-lg ${activeColor !== "All" ? "" : "hidden"}`} onClick={() => setActiveColor("All")}>{activeColor !== "All" && "Color: " + activeColor}<AiOutlineClose className="ml-1 -mr-1 text-[12px]" /></div>


                </div>

                {!isFilterOpen ?
                    ""
                    :
                    <div className="flex">
                        <AiOutlineClose className=' cursor-pointer ml-2 mt-4 sm:hidden' onClick={() => {
                            setFilterIsOpen(!isFilterOpen)
                            setIsBrandOpen(false)
                            setIsPriceOpen(false)
                            setIsColorOpen(false)
                            setIsCategoryOpen(false)

                        }} />
                    </div>}


                {!isCategoryOpen ?
                    <div className="flex mx-8 mt-4 justify-between items-center cursor-pointer " onClick={() => {
                        setIsBrandOpen(false)
                        setIsPriceOpen(false)
                        setIsColorOpen(false)
                        setIsCategoryOpen(!isCategoryOpen)
                    }}>

                        Category<IoIosArrowDown />
                    </div>
                    :
                    <div className="flex mx-8 mt-4 justify-between items-center cursor-pointer" onClick={() => { setIsCategoryOpen(!isCategoryOpen) }}>
                        Category<IoIosArrowUp />
                    </div>
                }


                <div className={`${!isCategoryOpen ? "hidden" : ""} `}>
                    {
                        categories.map((item) => (

                            <button
                                onClick={() => setActiveCategory(item.name)}
                                key={item.id}
                                className={`flex uppercase ml-12 text-base ${activeCategory === item.name && 'bg-blue-400 text-white'
                                    }`}
                            >

                                {item.name}
                            </button>

                        ))}
                </div>



                {!isBrandOpen ?
                    <div className="flex mt-2 mx-8 justify-between items-center cursor-pointer" onClick={() => {

                        setIsPriceOpen(false)
                        setIsColorOpen(false)
                        setIsCategoryOpen(false)
                        setIsBrandOpen(!isBrandOpen)
                    }}>
                        Brand<IoIosArrowDown />

                    </div>
                    :
                    <div className="flex mt-2 mx-8 justify-between items-center cursor-pointer" onClick={() => { setIsBrandOpen(!isBrandOpen) }}>
                        Brand<IoIosArrowUp />
                    </div>

                }


                <div className={`${!isBrandOpen ? "hidden" : ""} `}>
                    {

                        brand.map((item) => (
                            <button
                                onClick={() => setActiveBrand(item.name)}
                                key={item.id}
                                className={`flex uppercase ml-12 text-base ${activeBrand === item.name && 'bg-blue-400 text-white font-bold'
                                    }`}
                            >
                                {item.name}
                            </button>

                        ))}
                </div>

                {!isPriceOpen ?
                    <div className="flex mt-2 mx-8 justify-between items-center cursor-pointer" onClick={() => {
                        setIsBrandOpen(false)
                        setIsColorOpen(false)
                        setIsCategoryOpen(false)
                        setIsPriceOpen(!isPriceOpen)
                    }}>
                        Price<IoIosArrowDown />

                    </div>
                    :
                    <div className="flex mt-2 mx-8 justify-between items-center cursor-pointer" onClick={() => { setIsPriceOpen(!isPriceOpen) }}>
                        Price<IoIosArrowUp />
                    </div>

                }


                <div className={`${!isPriceOpen ? "hidden" : ""} `}>
                    {prices.map((item) => (
                        <button
                            key={item.id}
                            onClick={() =>
                                item.name !== ''
                                    ? setActivePrice(item.name)
                                    : setActivePrice('')
                            }
                            className={`flex uppercase ml-12 text-base ${activePrice === item.name && 'bg-lime-400 text-white font-bold'
                                }`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>


                {!isColorOpen ?
                    <div className="flex mt-2 mx-8 justify-between items-center cursor-pointer" onClick={() => {
                        setIsBrandOpen(false)
                        setIsPriceOpen(false)
                        setIsCategoryOpen(false)
                        setIsColorOpen(!isColorOpen)
                    }}>
                        Color<IoIosArrowDown />

                    </div>
                    :
                    <div className="flex mt-2 mx-8 justify-between items-center cursor-pointer" onClick={() => { setIsColorOpen(!isColorOpen) }}>
                        Color<IoIosArrowUp />
                    </div>

                }


                <div className={`${!isColorOpen ? "hidden" : ""} `}>
                    {color.map((item) => (
                        <button
                            onClick={() => setActiveColor(item.name)}
                            key={item.id}
                            className={`flex uppercase ml-12 text-base ${activeColor === item.name && ' bg-blue-400'
                                } `}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

            </div>




            {/* ===========================filter width ======================================================= */}



            <div className="hidden sm:flex items-start justify-between max-w-[1056px] mx-auto bg-gray-200 px-32 p-1">
                <div className=" flex items-center cursor-pointer relative ">
                    <div className={`block items-center ${isCategoryOpen ? "bg-white rounded-md" : ""}`} >
                        <div className="flex p-1" onClick={() => {
                            setIsBrandOpen(false)
                            setIsPriceOpen(false)
                            setIsColorOpen(false)
                            setIsCategoryOpen(!isCategoryOpen)
                        }}>Category
                            {isCategoryOpen ?
                                <IoIosArrowUp className="ml-1 mt-[6px]" /> :
                                <IoIosArrowDown className="ml-1 mt-[6px]" />
                            }

                        </div>
                        <div className={`${!isCategoryOpen ? "hidden" : ""} mt-2 px-2 py-2 absolute top-7 left-0 z-[10] bg-white border border-t-white  border-gray-200 w-[160px] `}>
                            {
                                categories.map((item) => (
                                    <button
                                        onClick={() => setActiveCategory(item.name)}
                                        key={item.id}
                                        className={`flex  text-base ${activeCategory === item.name && 'bg-blue-400 text-white'
                                            }`}
                                    >
                                        {item.name}
                                    </button>

                                ))}
                        </div>
                    </div>
                </div>

                <div className=" flex items-center cursor-pointer relative ">
                    <div className={`block items-center ${isBrandOpen ? "bg-white rounded-md" : ""}`} >
                        <div className="flex p-1" onClick={() => {
                            setIsPriceOpen(false)
                            setIsColorOpen(false)
                            setIsCategoryOpen(false)
                            setIsBrandOpen(!isBrandOpen)
                        }}>Brand
                            {isBrandOpen ?
                                <IoIosArrowUp className="ml-1 mt-[6px]" /> :
                                <IoIosArrowDown className="ml-1 mt-[6px]" />
                            }

                        </div>
                        <div className={`${!isBrandOpen ? "hidden" : ""} mt-2 px-2 py-2 absolute top-7 left-0 z-[10] bg-white border border-t-white  border-gray-200 w-[157px] `}>
                            {
                                brand.map((item) => (
                                    <button
                                        onClick={() => setActiveBrand(item.name)}
                                        key={item.id}
                                        className={`flex text-base ${activeBrand === item.name && 'bg-blue-400 text-white'}`}
                                    >
                                        {item.name}
                                    </button>

                                ))}
                        </div>
                    </div>
                </div>


                <div className=" flex items-center cursor-pointer relative ">
                    <div className={`block items-center ${isPriceOpen ? "bg-white rounded-md" : ""}`} >
                        <div className="flex p-1" onClick={() => {
                            setIsColorOpen(false)
                            setIsCategoryOpen(false)
                            setIsBrandOpen(false)
                            setIsPriceOpen(!isPriceOpen)
                        }}>Price
                            {isPriceOpen ?
                                <IoIosArrowUp className="ml-1 mt-[6px]" /> :
                                <IoIosArrowDown className="ml-1 mt-[6px]" />
                            }

                        </div>
                        <div className={`${!isPriceOpen ? "hidden" : ""} mt-2 px-2 py-2 absolute top-7 left-0 z-[10] bg-white border border-t-white  border-gray-200 w-[157px] `}>

                            {prices.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() =>
                                        item.name !== ''
                                            ? setActivePrice(item.name)
                                            : setActivePrice('')
                                    }
                                    className={`flex  text-base ${activePrice === item.name && 'bg-blue-400 text-white'
                                        }`}
                                >
                                    {item.name}
                                </button>

                            ))}
                        </div>
                    </div>
                </div>

                <div className=" flex items-center cursor-pointer relative ">
                    <div className={`block items-center ${isColorOpen ? "bg-white rounded-md" : ""}`} >
                        <div className="flex p-1" onClick={() => {
                            setIsPriceOpen(false)
                            setIsCategoryOpen(false)
                            setIsBrandOpen(false)
                            setIsColorOpen(!isColorOpen)

                        }}>Color
                            {isColorOpen ?
                                <IoIosArrowUp className="ml-1 mt-[6px]" /> :
                                <IoIosArrowDown className="ml-1 mt-[6px]" />
                            }

                        </div>
                        <div className={`${!isColorOpen ? "hidden" : ""} mt-2 px-2 py-2 absolute top-7 left-0 z-[10] bg-white border border-t-white  border-gray-200 w-[157px] `}>
                            {
                                color.map((item) => (
                                    <button
                                        onClick={() => setActiveColor(item.name)}
                                        key={item.id}
                                        className={`flex  text-base ${activeColor === item.name && 'bg-blue-400 text-white'
                                            }`}
                                    >
                                        {item.name}
                                    </button>

                                ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Title Filter */}
            <div className={`hidden sm:flex items-start max-w-[1056px] mx-auto -mb-2 mt-2 ${activeColor === "All" && activeCategory === "All" && activePrice === "" && activeBrand === "All" ? "sm:hidden" : ""}`}>
                <div onClick={() => {
                    setActiveCategory("All");
                    setActiveBrand("All");
                    setActiveColor("All");
                    setActivePrice("");
                }}
                    className="flex bg-gray-200 p-1"> Clear All<AiOutlineClose className="ml-1 -mr-1 text-[12px]" />
                </div>

                <div className={`flex ml-1 bg-gray-200 p-1 ${activeCategory !== "All" ? "" : "hidden"}`} onClick={() => setActiveCategory("All")}>{activeCategory !== "All" && "Catergory: " + activeCategory}<AiOutlineClose className="ml-1 -mr-1 text-[12px]" /></div>
                <div className={`flex ml-1 bg-gray-200 p-1 ${activeBrand !== "All" ? "" : "hidden"}`} onClick={() => setActiveBrand("All")}>{activeBrand !== "All" && "Brand: " + activeBrand}<AiOutlineClose className="ml-1 -mr-1 text-[12px]" /></div>
                <div className={`flex ml-1 bg-gray-200 p-1 ${activePrice !== "" ? "" : "hidden"}`} onClick={() => setActivePrice("")}>{activePrice !== "" && "Price: " + activePrice} <AiOutlineClose className="ml-1 -mr-1 text-[12px]" /></div>
                <div className={`flex ml-1 bg-gray-200 p-1 ${activeColor !== "All" ? "" : "hidden"}`} onClick={() => setActiveColor("All")}>{activeColor !== "All" && "Color: " + activeColor}<AiOutlineClose className="ml-1 -mr-1 text-[12px]" /></div>


            </div>


        </>);
}

export default Filters;