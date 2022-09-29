
import About from './About';
import Categories from './Categories';
import Commercials from './Commercials';

const Home = () => {

  return (
    <>
      <div className='commercials pb-6'>
        <Commercials />
      </div>

      <div className='categories px-2 pb-10'>
        <Categories />
      </div>

      <div className="pb-6">
        <About />
      </div>

    </>
  )
}
export default Home;