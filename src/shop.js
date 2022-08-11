import Dashboard from './dashboard';
import { useState } from 'react';
import './shop.css'

const Shop = () =>{

    const productData = [
        { id : 1, label : 'Filter', imageName : 'burundi', price : 12 },
        { id : 2, label : 'Filter', imageName : 'cedingAyu', price : 12 },
        { id : 3, label : 'Filter', imageName : 'hunkute', price : 13 },
        { id : 4, label : 'Espresso', imageName : 'kerinciNat', price : 10 },
        { id : 5, label : 'Espresso', imageName : 'manglayang', price : 10 },
        { id : 6, label : 'Filter', imageName : 'torajaNosu', price : 10 },
    ]

    const [cart, setCart] = useState(0);
    

    const addToCart = (ev) => {
        setCart((prev)=>  Number(prev) + Number(ev.target.id))
        alert('added to cart, total cart: ' + cart)
    }

    return (
        <div>  
           < Dashboard />
          <div className='shop-main'>
            
            { productData.map((data) => (

            <div className='product'>
               <img src={require(`./image/product/${data.imageName}.jpg`)} 
                alt='product-img' height={300} width={225}/>
                <div className='product-desc'>
                    <div className='product-label'>{data.label} roast</div>
                    <div className='price-cont'>{data.price} Usd</div>
                    <div className='buy-btn' id={data.price} onClick={addToCart}>Buy</div>
                </div>
            </div>))}
                
          </div>
        </div>
    )
}

export default Shop;