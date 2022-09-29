

import { useParams } from 'react-router';
import { CartItemType } from '../../App';


type Props = {
    products: CartItemType[];
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const ProductInfo: React.FC<Props> = ({ products, handleAddToCart }) => {
    const DollarUsd = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    const { id } = useParams();

    return (
        <>
            {products.filter(product => product._id === id).map(product => (
                <>
                    <div className='Googlefont text-gray-400 2xl:text-xl lg:text-lg text-base  text-center my-6'>
                        <a className="" href="/">Home</a> {">"} <a href="/shop"> Shop</a> {">"} <a href={`/shop/${product.category}`}>{product.category}</a> {">"} {product.description}
                        <div className=' text-black mt-1 uppercase 2xl:text-lg lg:text-base text-sm'>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col   w-2/4 mx-auto mt-14" >

                        <div className='lg:w-[500px] md:w-[400px] sm:w-[200px] '> <img src={`${product.image}`} alt="" /></div>

                        <div className=' w-[700px] h-[400px] relative  '>

                            <h1 className='SquareRegular font-bold absolute left-5 top-20 text-3xl'>{product.title}</h1>
                            <h2 className='SquareRegular  absolute left-5 top-28 text-2xl'>{product.description}</h2>
                            <span className='SquareRegular  absolute left-5 top-48 text-xl'>Price : {DollarUsd.format(product.price)} </span>
                            <span className='SquareRegular  absolute left-5 top-64 text-xl'>Color : {product.color}</span>

                            <button
                                onClick={() => handleAddToCart(product)}
                                className="absolute left-5 top-80 bg-black text-lg text-white uppercase font-semibold  lg:w-[300px] md:[200px] rounded-lg py-2
                                 cursor-pointer active:bg-black-200 active:text-white hover:bg-opacity-70 hover:text-white"
                            >
                                Add to cart
                            </button>
                        </div>

                    </div>
                </>

            ))}

        </>
    )
}

export default ProductInfo;