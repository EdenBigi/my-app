import React, { useEffect } from 'react'
import { CartItemType } from '../../App';
import Filters from './Filters';
import Loading from './Loading';
import Product from './Product';
import { useParams } from 'react-router';




type Props = {
  handleAddToCart: (clickedItem: CartItemType) => void;
  products: CartItemType[];
  isLoading: boolean;
  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
  filters: CartItemType[];
  setFilters: React.Dispatch<React.SetStateAction<CartItemType[]>>;
  activePrice: string;
  setActivePrice: React.Dispatch<React.SetStateAction<string>>;
  activeBrand: string;
  setActiveBrand: React.Dispatch<React.SetStateAction<string>>;
  activeColor: string;
  setActiveColor: React.Dispatch<React.SetStateAction<string>>;

}

const Shop: React.FC<Props> = ({ activeCategory, setActiveCategory, activePrice, setActivePrice, activeBrand, setActiveBrand, activeColor, setActiveColor, filters, setFilters, products, isLoading, handleAddToCart }) => {

  const { brand } = useParams();
  const { category } = useParams();



  useEffect(() => {
    if (category) {
      setActiveCategory((category as string)[0].toUpperCase() + (category as string).slice(1));
    }
    if (brand === "louisvuitton") {
      setActiveBrand("Louis Vuitton")
    }

  }, [category, setActiveCategory, brand, setActiveBrand]);

  return (
    <>
      <div className='Googlefont text-gray-400 2xl:text-xl lg:text-lg text-base  text-center my-4'>
        <a className="" href="/">Home</a> {">"} Shop
        <div className=' text-black mt-1 uppercase 2xl:text-lg lg:text-base text-sm'>
          {activeCategory !== "All" && activeCategory}</div></div>
      <div className='filter container mx-auto my-4'>

        <Filters
          products={products}
          setFilters={setFilters}
          activeCategory={activeCategory} setActiveCategory={setActiveCategory}
          activePrice={activePrice} setActivePrice={setActivePrice}
          activeBrand={activeBrand} setActiveBrand={setActiveBrand}
          activeColor={activeColor} setActiveColor={setActiveColor}
        />
      </div>
      <div className='shop container flex flex-wrap mx-auto justify-around xl:px-24 2xl:px-60 md:px-2 px-2 my-4  ' >
        {filters.map(product => (
          <Product handleAddToCart={handleAddToCart}
            key={product.id}
            product={product}
          />
        ))}
      </div>
      {isLoading && (
        <div className="flex items-center justify-center ">
          <Loading />
        </div>
      )}

    </>
  )
}


export default Shop;
