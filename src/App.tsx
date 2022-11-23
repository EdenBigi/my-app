import { useEffect, useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Components/Header';
import Home from './Components/Home';
import Shop from './Components/Shop/Shop';
import Privacy from './Components/Privacy';
import About from './Components/About';
import Login from './Components/Login';
import Cart from './Components/Shop/Cart';
import Footer from './Components/Footer';
import { arrForFooter } from './Components/FooterArr';
import ContactUs from './Components/ContactUs';
import FAQ from './Components/FAQ';
import ProductInfo from './Components/Shop/ProductInfo';


//========Definition Types=========
export type CartItemType = {
  _id: string;
  id: number;
  category: string;
  brand: string;
  color: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};


const App = () => {
  const [filters, setFilters] = useState([] as CartItemType[]);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([] as CartItemType[])
  const [isShowCart, setIsShowCart] = useState(false);
  const [cart, setCart] = useState([] as CartItemType[])
  const [activeCategory, setActiveCategory] = useState('All');
  const [activePrice, setActivePrice] = useState('');
  const [activeBrand, setActiveBrand] = useState('All');
  const [activeColor, setActiveColor] = useState('All');

  const [res, setRes] = useState('');

  // http://localhost:5051/api/items
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const data = await fetch('http://localhost:5051/api/items');
        const products = await data.json();

        setIsLoading(false);
        setProducts(products);
        setFilters(products);
      }
      catch (err) {

        setIsLoading(false);
      }
    };
    fetchProducts();


  }, []);



  // Handle Add to Cart

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCart((prev) => {
      const findProductInCart = prev.find((item) => item.id === clickedItem.id);
      if (findProductInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id ? { ...item, amount: item.amount + 1 } : item);
      }
      // First time the item is Added
      return [...prev, { ...clickedItem, amount: 1 }];
    });

  };



  // Handle Remove from cart

  const handleRemoveFromCart = (id: number) => {
    setCart(prev =>
      prev.reduce((cal, item) => {
        if (item.id === id) {
          if (item.amount === 1) return cal;
          return [...cal, { ...item, amount: item.amount - 1 }];
        } else {
          return [...cal, item];
        }
      }, [] as CartItemType[])
    );
  };



  return (
    <div className="App">
      <div className='backgroundArctic sticky z-10 top-0 shadow-xl  '>
        <Header
          cartItems={cart}
          setIsShowCart={setIsShowCart}
          isShowCart={isShowCart}
        />
      </div>
      {isShowCart && <div>
        <Cart cart={cart}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
          setIsShowCart={setIsShowCart}
        />
      </div>}

      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop handleAddToCart={handleAddToCart}
            products={products} isLoading={isLoading}
            filters={filters} setFilters={setFilters}
            activeCategory={activeCategory} setActiveCategory={setActiveCategory}
            activePrice={activePrice} setActivePrice={setActivePrice}
            activeBrand={activeBrand} setActiveBrand={setActiveBrand}
            activeColor={activeColor} setActiveColor={setActiveColor}
          />} />

          <Route path='/shop/:category' element={<Shop handleAddToCart={handleAddToCart}
            products={products} isLoading={isLoading}
            filters={filters} setFilters={setFilters}
            activeCategory={activeCategory} setActiveCategory={setActiveCategory}
            activePrice={activePrice} setActivePrice={setActivePrice}
            activeBrand={activeBrand} setActiveBrand={setActiveBrand}
            activeColor={activeColor} setActiveColor={setActiveColor}
          />} />

          <Route path='/shop/brand/:brand' element={<Shop handleAddToCart={handleAddToCart}
            products={products} isLoading={isLoading}
            filters={filters} setFilters={setFilters}
            activeCategory={activeCategory} setActiveCategory={setActiveCategory}
            activePrice={activePrice} setActivePrice={setActivePrice}
            activeBrand={activeBrand} setActiveBrand={setActiveBrand}
            activeColor={activeColor} setActiveColor={setActiveColor}
          />} />
          <Route path='/products/:id' element={<ProductInfo products={products} handleAddToCart={handleAddToCart} />} />


          <Route path='/signin' element={<Login setRes={setRes} />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/privacy-policy' element={<Privacy />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/about' element={<About />} />
        </Routes>

      </BrowserRouter>


      <div className='px-4 h-20'>
        <Footer theFooterArr={arrForFooter} titleStr={'Questions? Contact us'} />
      </div>

    </div>
  );
}

export default App;


