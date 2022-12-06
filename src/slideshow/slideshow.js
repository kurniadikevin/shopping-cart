import { useEffect,useState } from 'react';
import './slideshow.css';

const img1 = require('./v60-photo.jpg');
const img2 = require('./pouchmockup1.jpg');
const img3 = require('./manglayangfw_mockup.jpg');

const SlideShow = ()=>{


   let slideIndex = 0;
   
 const showSlides =()=> {
    let slides = document.querySelectorAll('.mySlides');
    let dots = document.querySelectorAll(".dot");
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        dots[i].style.backgroundColor = "grey";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].style.backgroundColor = "white";  

    setTimeout(showSlides, 2000); // Change image every 2 seconds 
}



useEffect(()=>{
    showSlides()
})

    return(
        <div className='slideshow-component'>
            <div className="slideshow-container">

                <div className="mySlides">
                <div className="numbertext">1 / 3</div>
                <img src={img1}  alt='img1'/>
                <div className="text">Caption Text</div>
                </div>

                <div className="mySlides">
                <div className="numbertext">2 / 3</div>
                <img src={img2}  alt='img2'/>
                <div className="text">Caption Two</div>
                </div>

                <div className="mySlides">
                <div className="numbertext">3 / 3</div>
                <img src={img3}  alt='img3'/>
                <div className="text">Caption Three</div>
                </div>

                <div className='dot-container'>
                    <span class="dot"></span> 
                    <span class="dot"></span> 
                    <span class="dot"></span> 
                </div>
    </div>
</div>
    )
}

export default SlideShow;