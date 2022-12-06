import {Link, Outlet} from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";
import './index.css';

const Dashboard = () => {

  const getLocalCart = sessionStorage.getItem('globalCart');

    return(
      <div className='dashboard'>
            <div className='header'>
                <div className='store-name'>
                <Link to = '/' className='header'>Strut Coffee Roaster</Link> 
                </div>
            </div>
            <div >
                    <nav className='nav-link'>
                  <Link to = '/' className='class-link'>Home</Link>
                  <Link to = '/shop' className='class-link'>Shop</Link>
                  <Link to = '/cart' className='class-link'>
                  <FaCartArrowDown />  
                  </Link>
                  
                  <div className='total-price'>{getLocalCart} Usd</div>
               
                   </nav>    
              
            </div>
      </div>
    )
}

export default Dashboard;