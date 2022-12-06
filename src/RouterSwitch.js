import {  Routes, Route, Switch } from "react-router-dom";
import  Home  from './Home';
import  Shop  from './shop';
import  Cart  from './cart';


const RouteSwitch = () => {
    return(
               <Routes>
                  
                    <Route path="/" element={<Home/>} />
                    <Route path="/shop" element={<Shop/>} />
                    < Route path="/cart" element={<Cart/>} /> 
                   
                </Routes>
    )
}

export default RouteSwitch;