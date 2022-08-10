import {Link, Outlet} from 'react-router-dom';
import './index.css';

const Dashboard = () => {
    return(
      <div className='dashboard'>
            <div className='header'>
                <div className='store-name'>
                  S Coffee
                </div>
            </div>
            <div>
                    <nav>
                <Link to = '/'>Home</Link> |{'  '}
                <Link to = '/shop'>Shop</Link> |{'  '}
                <Link to = '/cart'>Cart</Link> |{'  '}
                < Outlet />
              </nav>    
            </div>
      </div>
    )
}

export default Dashboard;