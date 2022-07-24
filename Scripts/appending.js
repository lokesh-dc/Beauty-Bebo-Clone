

window.addEventListener("load",()=>{
    let sum =0;
    let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    for(let i=0;i<cartData.length;i++){
        sum += cartData[i].price * 79;
    }
    localStorage.setItem("sum",sum);
    document.getElementById("cart").innerText = `My cart - ₹${sum}`;
})




//popup
// shopping-cart
// document.getElementById("btn-1").addEventListener("click",()=>{
//     window.location.href = "shopping.html";
//    })


//    document.getElementById("brandspage").addEventListener("click",function(){
//     window.location.href = "./brands.html"
// })


// // popup
// let sum =0;
// let displayCart = (data) => {
//     let container = document.querySelector("#product");
//     container.innerHTML = "";
//     data.forEach(({ api_featured_image, name, price}) => {
//         let div = document.createElement("div");
//         div.setAttribute("class", "card");

//         let divImg = document.createElement("div");
//         let img = document.createElement("img");
//         img.src = api_featured_image;
//         divImg.append(img);
//         divImg.setAttribute("id" , "lipstick")

//         let divDetails = document.createElement("div");
//         let prodName = document.createElement("p");
//         prodName.innerText = name;

//         let prodPrice = document.createElement("p");
//         prodPrice.innerText = `₹ ${Math.floor(price*79)}`;

        
//         let sumtotal = document.getElementById("pric");
//         sum=  sum+Math.floor(price*79);
        
//         sumtotal.innerText =`₹${sum}`
//         console.log(sum);
//         divDetails.append(prodName, prodPrice);
//         div.append(divImg, divDetails);
//         container.append(div);

//     })
// }



// document.getElementById("magic").addEventListener("click",() =>{
//     let data = JSON.parse(localStorage.getItem("cartData"))
//     displayCart(data);
//   console.log(data);
//   document.getElementById("cart-popup").style.visibility="visible";
 
// });