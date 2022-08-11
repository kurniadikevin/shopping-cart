import Dashboard from './dashboard';
import './shop.css'


const Cart = () =>{

    const checkoutCart = sessionStorage.getItem('globalCart');
    const productData = JSON.parse(sessionStorage.getItem('Product-Data'));
    console.log(productData);

    const productOnCart = productData.filter((data)=> {
       return data.quantity > 0;
    })
    console.log(productOnCart);
    return (
        <div>  
             < Dashboard />
            <div >
                <div className='cart-container'>
                    <div className='cart-head'>
                        <div>Item</div>
                        <div>Qty</div>
                        <div>Price</div>
                        <div>Total</div>
                    </div>
                {productOnCart.map((data) => (
                    <div className='cart-log'>
                        <div>{data.imageName}</div>
                        <div>{data.quantity}</div>
                        <div>{data.price}$ </div>
                        <div>{data.price * data.quantity}$</div>
                    </div>
            ) )} 
                <div className='total-cart'>
                    <div id='checkout-id'>Checkout</div>
                    <div></div>
                    <div>Total Checkout</div>
                    <div>{checkoutCart}$</div>
                 </div>
                </div>
            </div>
          
        </div>
    )
}

export default Cart;