import navbar  from "../Components/navbar.js";
import getdata from "../components/fetch.js"


// navbar section
document.getElementById("navbar").innerHTML = navbar();

// on seartching redirect to search page and append products data
document.getElementById("search").addEventListener("click",()=>{
    let query = document.getElementById('query').value;
    localStorage.setItem("query",query);
    window.location.href = "searchbar.html";
})


// images slideshow
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

// on load appending,new arrivals section
window.addEventListener("load",()=>{
    getdata("foundation","arrivals",4);
    getdata("blush","selection-div_data",4);
})

// footer section
import footer from "../components/footer.js"
document.getElementById("footer").innerHTML = footer();


//popup
document.getElementById("magic").addEventListener("click",() =>{
    document.getElementById("cart-popup").style.visibility="visible";
    });

// shopping-cart
document.getElementById("btn-1").addEventListener("click",()=>{
    window.location.href = "shopping.html";
   })