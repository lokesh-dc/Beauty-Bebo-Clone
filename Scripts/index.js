
import navbar  from "../Components/navbar.js";
import getdata from "../components/fetch.js"



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
    getdata("lipstick","best_seller",4,"dior");
    getdata("eyeliner","latest",4,);
    getdata("blush","most_viewed",4);
})


document.querySelector('#read').addEventListener("click",()=>{
    document.getElementById('intro').append(`Beautybebo offer
    Welcome to Beauty Products Online Shopping India- Beauty Bebo
    If you are looking for a flawless radiant face outlook for a special occasion, then we have the perfect tips for you. As you must already know, the conspicuous flawless outlook you want for your wedding, a date, a dinner party or for a modelling competition is only achieved through makeup.
    
    Don’t get me wrong, you are naturally beautiful, that’s obvious. But everyone else is, so how will you will you ensure that you are different? Read on for hot irresistible tips before you buy beauty products online!
    
    Clean Your Face First!`);
    document.querySelector('#read').innerText = "";
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


   document.getElementById("brandspage").addEventListener("click",function(){
    window.location.href = "./brands.html"
})