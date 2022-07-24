import navbar from "../Components/navbar.js"
import footer from "../Components/footer.js"

document.getElementById("footer").innerHTML = footer();
document.getElementById("navbar").innerHTML = navbar();

document.querySelector("#btn-2").addEventListener("click",()=>{
    window.location.href = "checkout.html";
})


let container = document.querySelector("#container");

// let temp;


let data
let searchfun = async () => {
    let query = document.querySelector("#query").value;
    getData(query, 200)
}

window.addEventListener("load", () => {
    let query = localStorage.getItem("query");
    getData(query,200)
})
// On enter search products
document.querySelector("#query").addEventListener("keyup",(event)=>{
    event.preventDefault();
    getData(query,200)
})


let getData = async (query, limit) => {
    let url = `https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=${query}`

    let res = await fetch(url);
    data = await res.json()
    append(data, limit)
    console.log(data);
}



function append(data, limit) {
    let container = document.querySelector("#container");
    container.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        if (i > limit)
            break;

        let el = data[i];


        let div = document.createElement("div");
        div.onclick = () => {
            product(el)
        };

        let img = document.createElement("img");
        img.src = el.image_link;



        let p = document.createElement("p");
        p.innerText = el.name;

        let price = document.createElement("p");
        price.innerHTML = `&#8377 ${Math.floor(el.price * 79)}`;

        let rating = document.createElement("p")
        let rate = Math.floor(Math.random() * 5) + 1;
        let star = ""
        for (let j = 0; j < rate; j++) {
            star += "⭐";
        }
        rating.innerText = star;

        let btn = document.createElement("button");
        btn.innerHTML = `&#x1f6d2 Add To Cart`;
        btn.onclick = () => {
            addtocart(el)
        };


        let btn2 = document.createElement("button");
        btn2.innerHTML = `&#129293`;
        btn2.onclick = () => {
            wishlist(el)
        };


        div.append(img, p, price, rating, btn, btn2);
        document.querySelector("#container").append(div)
    }
};

let product = (data) => {
    localStorage.setItem("product", JSON.stringify(data))
    // window.location.href = "product.html"
};


let addtocart = (prod) => {
    let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    cartData.push(prod);
    localStorage.setItem("cartData", JSON.stringify(cartData));
    // window.location.href = "addtocart.html"
    alert("Product added to cart successfully !");
    let sum =0;
    for(let i=0;i<cartData.length;i++){
        sum += cartData[i].price * 79;
    }
    localStorage.setItem("sum",sum);
    document.getElementById("cart").innerText = `My cart - ₹${sum}`;
};

let wishlist = (prod) => {
    let wishlistData = JSON.parse(localStorage.getItem("wishlistData")) || [];
    wishlistData.push(prod);
    localStorage.setItem("wishlistData", JSON.stringify(wishlistData))
    // window.location.href = "wishlist.html"
    alert("wishlist");
};
document.getElementById("search").addEventListener("click", searchfun)







let selectTag = document.querySelector('#select')
selectTag.addEventListener('change', (event) => {
    let value = selectTag.value
    if (value === "price:Low to High") {
        let sortedData = data.sort((a, b) => {
            return a.price - b.price
        })
        append(sortedData)
    } else {
        let sortedData = data.sort((a, b) => {
            return b.price - a.price
        })
        append(sortedData)
    }
})


let filtertag = document.querySelector('#pricefilter')
console.log(filtertag)
filtertag.addEventListener('change', (elem) => {
    let filtervalue = filtertag.value;
    console.log(filtervalue)
    let filterdata = data.filter((elem) => {
        console.log(elem)
        return elem.price >= filtervalue;
    });
    append(filterdata)
})




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


//popup
// shopping-cart
document.getElementById("btn-1").addEventListener("click",()=>{
    window.location.href = "shopping.html";
   })


   document.getElementById("brandspage").addEventListener("click",function(){
    window.location.href = "./brands.html"
})