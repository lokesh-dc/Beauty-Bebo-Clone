import navbar from "../Components/navbar.js"
document.getElementById("navbar").innerHTML = navbar();


import getdata from "../Components/fetch.js"

let container = document.querySelector("#container");


window.addEventListener("load", () => {
    let query = localStorage.getItem("query");
    getdata(query, "container", 200)
})

let searchfun = async () => {
    let query = document.querySelector("#query").value;

    getdata(query, "container", 200)

}


document.getElementById("search").addEventListener("click", searchfun)

// popup

let sum =0;

let displayCart = (data) => {
    let container = document.querySelector("#product");
    container.innerHTML = "";
    data.forEach(({ api_featured_image, name, price}) => {
        let div = document.createElement("div");
        div.setAttribute("class", "card");

        let divImg = document.createElement("div");
        let img = document.createElement("img");
        img.src = api_featured_image;
        divImg.append(img);
        divImg.setAttribute("id" , "lipstick")

        let divDetails = document.createElement("div");
        let prodName = document.createElement("p");
        prodName.innerText = name;

        let prodPrice = document.createElement("p");
        prodPrice.innerText = `₹ ${Math.floor(price*79)}`;

        
        let sumtotal = document.getElementById("pric");
        sum=  sum+Math.floor(price*79);
        
        sumtotal.innerText =`₹${sum}`
        console.log(sum);




        // let prodQuantity = document.createElement("p");
        // prodQuantity.innerText = quantity;

        divDetails.append(prodName, prodPrice);
        div.append(divImg, divDetails);
        container.append(div);

    })
}

document.getElementById("magic").addEventListener("click",() =>{
    let data = JSON.parse(localStorage.getItem("cartData"))
    displayCart(data);
  console.log(data);
  document.getElementById("cart-popup").style.visibility="visible";
 
});

    
// shopping-cart
document.getElementById("btn-1").addEventListener("click",(event)=>{
    window.location.href = "shopping.html";
   
    let data = JSON.parse(localStorage.getItem("cartData"))
    console.log(data);
  
   })
    