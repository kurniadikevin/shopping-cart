import {Link, Outlet} from 'react-router-dom';

const Dashboard = () => {
    return(
        <div>
             <nav>
        <Link to = '/'>Home</Link> |{'  '}
        <Link to = '/shop'>Shop</Link> |{'  '}
        <Link to = '/cart'>Cart</Link> |{'  '}
        < Outlet />
      </nav>    
        </div>
    )
}

export default Dashboard;