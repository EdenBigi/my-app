
import { BsInfoCircle, BsSubtract } from "react-icons/bs";

// TODO: responsive css
const ContactUs = () => {

    return (
        <>
            <div className="flex min-h-screen py-2 px-2 mt-14" >
                <div className="relative flex flex-col w-2/5 px-2 py-6 ml-4 ">
                    <h1 className="SquareRegular uppercase text-[28px] ml-2 mb-4">Your FeedBack</h1>
                    <input type="text" className="border border-gray-500 p-3 mb-6 m-1" placeholder="Your name" />
                    <input type="text" className="border border-gray-500 p-3 mb-6 m-1" placeholder="Your e-mail" />
                    <input type="text" className="border border-gray-500 p-3 mb-6 m-1" placeholder="Your phone number (optional)" />
                    <input type="paragraph" className="border border-gray-500 mb-6 p-3 m-1" placeholder="Topic" />
                    <textarea placeholder="Your message" className="border border-gray-500 p-2 m-1" cols={5} rows={2}></textarea>

                    <div className=" text-right mt-8">
                        <button type="submit" className="p-1 border-[2px] border-solid border-black w-24 uppercase" >submit</button>
                    </div>
                </div>
                <div className="inline-block border-[1px] md:ml-[100px] ml-[50px] mr-[50px] border-black border-solid"></div>
                <div className=" " >
                    <h1 className="SquareRegular uppercase font-semibold text-2xl mt-8">address</h1>
                    <div className="flex flex-col mt-8 text-sm">
                        <span className="mb-1">Style Remains GmbH - REBELLE</span>
                        <span className="mb-1">Hammer Deich 10</span>
                        <span className="mb-1">20537 Hamburg</span>
                        <span>Germany</span>
                    </div>

                    <div className="backgroundArctic mt-8 relative flex justify-end  border-l-[6px] border-[#ffd9a8] ">
                        <BsInfoCircle className="md:text-[30px] text-[20px] text-[#f8ca8f] bg- absolute left-4 md:top-4 top-2" />
                        <p className="md:ml-10 py-4 md:px-10 px-2 text-sm md:mt-0 mt-4">Please use this address for parcels, consignments of goods, items to be sold and items already sold, as otherwise your consignment cannot be accepted.</p>

                    </div>
                </div>

            </div>
        </>
    )

}

export default ContactUs;