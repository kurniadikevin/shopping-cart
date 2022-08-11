import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import  Home  from './Home';
import  Shop  from './shop';
import  Cart  from './cart';


const RouteSwitch = () => {

    
    

    return(
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/shop" element={<Shop/>} />
                    < Route path="/cart" element={<Cart/>} /> 
                </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;