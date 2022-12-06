import Dashboard from './dashboard';
import homeImage from './image/coffee-roaster.jpg';
import {Link, Outlet} from 'react-router-dom';
import SlideShow from './slideshow/slideshow.js';


const Home= ()=>{
  return (
    <div className="home">
                < Dashboard />
               
              <div className='home-main'>
                <div className='home-col1'>
                      <SlideShow/>
                </div>



                <div className='home-col2'>
                    <div className='home-text1'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                    </div>
                    <div className='home-text2'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                    </div>
                    <div className='home-text3'> Bandung, Indonesia</div>
                    <div className='shop-link'>
                      <nav>
                      <Link to = '/shop' className='class-link' id='product-link' style={{fontWeight: 500}}>
                       See our Product</Link>
                      </nav>
                    </div>
                    <div className='bottom-col2'></div>
                </div>

              </div>
              < Outlet />
    </div>
  );
}

export default Home;
