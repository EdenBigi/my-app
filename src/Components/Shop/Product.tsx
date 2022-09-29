
import { Link } from 'react-router-dom';

import { CartItemType } from '../../App';


type Props = {
    product: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
};

const Product: React.FC<Props> = ({ product, handleAddToCart }) => {
    const DollarUsd = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return (
        <>
            <div className=" flex flex-col items-center text-center border-2 border-gray-200 w-[190px] mb-2 rounded-2xl " >
                <Link to={`/products/${product._id}`}>
                    <div className='sm:h-40 h-20 mb-4 mt-4 ' >
                        <img className="h-full cursor-pointer" src={product.image} alt={product.title} />
                    </div>
                </Link>
                <h3 className='uppercase Googlefont font-bold text-sm '>{product.title}</h3>
                <h3 className='Googlefont flex-grow'>{product.description}</h3>
                <p className="text-red-700 font-bold mt-4 mb-4">
                    {DollarUsd.format(product.price)}
                </p>
                <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-gray-200 w-full rounded-t-none rounded-lg py-1 cursor-pointer active:bg-gray-500 active:text-white hover:bg-gray-500 hover:text-white"
                >
                    Add to cart
                </button>


            </div>

        </>
    );
};

export default Product;
