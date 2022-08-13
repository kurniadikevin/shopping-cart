import Dashboard from './dashboard';
import homeImage from './image/coffee-roaster.jpg';
import {Link} from 'react-router-dom';


const Home= ()=>{
  return (
    <div className="home">
                < Dashboard />
              <div className='home-main'>
                <div className='home-col1'>
                      
                      <img src={homeImage} height={533} width={800}
                      alt='home-img' className='home-img'></img>
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
             
    </div>
  );
}

export default Home;
