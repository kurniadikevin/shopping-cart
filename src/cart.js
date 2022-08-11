import Dashboard from './dashboard';


const Cart = () =>{

    const checkoutCart = sessionStorage.getItem('globalCart');

    return (
        <div>  
             < Dashboard />
            <div>
                <div>Your total order is {checkoutCart}$ Usd </div>
            </div>
          
        </div>
    )
}

export default Cart;