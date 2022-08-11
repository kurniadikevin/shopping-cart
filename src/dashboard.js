import {Link, Outlet} from 'react-router-dom';
import './index.css';

const Dashboard = (props) => {

  const getLocalCart = sessionStorage.getItem('globalCart');

    return(
      <div className='dashboard'>
            <div className='header'>
                <div className='store-name'>
                  S Coffee
                </div>
            </div>
            <div className='nav-link'>
                    <nav >
                <Link to = '/' className='class-link'>Home</Link> |{'  '}
                <Link to = '/shop' className='class-link'>Shop</Link> |{'  '}
                <Link to = '/cart' className='class-link'>Checkout</Link> |{'  '}
                < Outlet />
              </nav>    
              <div className='total-price'>{getLocalCart} Usd</div>
            </div>
      </div>
    )
}

export default Dashboard;