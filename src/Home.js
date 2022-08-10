import Dashboard from './dashboard';
import homeImage from './image/coffee-roaster.jpg';
import {Link} from 'react-router-dom';

const Home= ()=>{
  return (
    <div className="home">
              <Dashboard />
              <div className='home-main'>
                <div className='home-col1'>
                      <h1>Home page</h1>
                      <img src={homeImage} height={533} width={800}
                      alt='home-img' className='home-img'></img>
                </div>
                <div className='home-col2'>
                    <div className='home-text1'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                    </div>
                    <div className='home-text2'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                    </div>
                    <div className='home-text3'> Shibuya, Japan</div>
                    <div className='shop-link'>
                      <nav>
                      <Link to = '/cart'>See our Product</Link>
                      </nav>
                    </div>
                </div>

              </div>
             
    </div>
  );
}

export default Home;
