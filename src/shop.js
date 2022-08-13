import Dashboard from './dashboard';
import { useState,useEffect } from 'react';
import './shop.css'

const Shop = () =>{

    const [productData, setProductData] = useState([
        { id : 1, label : 'Burundi Shambati Kayanza Washed Filter 200gr ', imageName : 'burundi', price : 12, quantity : 0 },
        { id : 2, label : 'Ceding Ayu Sumatra Natural Filter 200gr', imageName : 'cedingAyu', price : 12 , quantity : 0},
        { id : 3, label : 'Ethiopia Hunkuta Full Wash Filter 200gr', imageName : 'hunkute', price : 13 , quantity : 0},
        { id : 4, label : 'Sumatra Kerinci Natural Espresso 200gr', imageName : 'kerinciNat', price : 10 , quantity : 0},
        { id : 5, label : 'Manglayang Jawa Barat Natural Espresso 200gr', imageName : 'manglayang', price : 10 , quantity : 0},
        { id : 6, label : 'Sulawesi Toraja Full Wash Filter 200gr', imageName : 'torajaNosu', price : 10 , quantity : 0},
    ])

   // remove the ! to use session storage store data
    const getDefaultCart =  function(){
        if(!sessionStorage.getItem('globalCart')){
            return sessionStorage.getItem('globalCart');
        } else { 
            return 0;
        }}

    const [cart, setCart] = useState(getDefaultCart());
   
    // adding cart price and quantity
     const addToCart = (ev) => {
        setCart((prev)=>  Number(prev) + Number(ev.target.id))
        //alert('added to cart!');
        //console.log(cart);
        }
        
    const addQuantity = (index) =>{
       productData[index].quantity += 1;
      //console.log(productData[index].quantity)
      //console.log(productData);
      //alert('total order '+ cart);
    }

    //reduce cart price and quantity
    const reduceQuantity = (index) =>{
        productData[index].quantity -= 1;
        //alert('total order ' + cart);
        //console.log(productData);
    }

    const removeFromCart = (ev) => {
        setCart((prev)=>  Number(prev) - Number(ev.target.id))
        //alert('added to cart!');
        //console.log(cart);
        }
   
    // store cart on session storage
    sessionStorage.setItem('globalCart',cart);
    sessionStorage.setItem('Product-Data',JSON.stringify(productData));
  
    //console.log(productData)//
    

    return (
        <div>  
           < Dashboard cartValue={cart}/>
          <div className='shop-main'>
            
            { productData.map((data,index) => (

            <div className='product'>
               <img className='product-image' src={require(`./image/product/${data.imageName}.jpg`)} 
                alt='product-img' height={300} width={225}/>
                <div className='product-desc'>
                        <div className='product-label'>{data.label}</div>
                        <div className='price-cont'>{data.price} Usd</div>
                        <div className='buy-btn' id={data.price} onClick={addToCart}></div>
                        <div>Qty: {data.quantity} </div>
                    <div className='button-div'>
                        <button id={data.price} onClick={(ev)=>{addQuantity(index); addToCart(ev)}}>
                            Add</button>
                        <button id={data.price} onClick={(ev)=>{reduceQuantity(index); removeFromCart(ev)}}>
                            -</button>
                    </div>
                </div>
            </div>))}
                
          </div>
        </div>
    )
}

export default Shop;