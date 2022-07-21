import navbar  from "../Components/navbar.js"

document.getElementById("navbar").innerHTML = navbar();

document.getElementById("magic").addEventListener("click",() =>{
document.getElementById("cart-popup").style.visibility="visible";
});


let count = 0;

let slider = () => {
    let images = ["./Images/top-slider/slider-1.jpg","./Images/top-slider/slider-2.jpg","./Images/top-slider/slider-3.jpg"]
    if(count===images.length)
        count = 0;

    let source = images[count];

    document.getElementById('slider').src = source;
    count++;
}
setInterval(slider,2000);


import getdata from "../components/fetch.js"
window.addEventListener("load",()=>{
    getdata("foundation","arrivals",4);
})

import footer from "../components/footer.js"
document.getElementById("footer").innerHTML = footer();