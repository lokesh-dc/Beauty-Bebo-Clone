//    Popup

import navbar  from "../Components/navbar.js"

document.getElementById("navbar").innerHTML = navbar();



// on seartching redirect to search page and append products data
document.getElementById("search").addEventListener("click",()=>{
    let query = document.getElementById('query').value;
    localStorage.setItem("query",query);
    window.location.href = "searchbar.html";
})

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



// shopping-cart
document.getElementById("btn-1").addEventListener("click",()=>{
    window.location.href = "shopping.html";
   })