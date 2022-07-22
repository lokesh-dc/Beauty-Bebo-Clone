let getdata = async (query,container,limit,brand) =>{
    if(brand===undefined)
        brand = "covergirl";
    
    let url = `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&product_type=${query}`;
    let res = await fetch(url);
    let data = await res.json();
    append(data,container,limit);
}

let append = (data,container,limit) => {
    if(data.length===0)
        return;
        
    let appendingDiv = document.getElementById(container);
    appendingDiv.setAttribute("class","productDiv")
    appendingDiv.innerHTML = null;
    for(let i=0;i<data.length;i++){
        if(i>limit)
            break;
        
        let el = data[i];
        let div = document.createElement("div");
        div.setAttribute("class","product");
        
        let detailsDiv = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.image_link;

        let title = document.createElement("p");
        title.innerText = el.name;

        let rating = document.createElement("p")
        let rate = Math.floor(Math.random()*5)+1;
        let star = ""
        for(let j=0;j<rate;j++){
            star += "⭐";
        }
        rating.innerText = star;
        let priceDiv = document.createElement("div");

        // taking random discount based on product price
        let discount = Math.floor(Math.random()*20)+1;

        //convert new price to rupee
        let n = Math.floor((+el.price * 79));

        //calculate old price based on discount;
        let old = Math.floor((+el.price * 79) / 100) * discount + n
        let discountonProduct = document.createElement("p");
        discountonProduct.innerText = `${discount} %`
        let oldPrice = document.createElement("p");
        
        oldPrice.innerText = `₹ ${old}`;
        
        let price = document.createElement("p");
        price.innerHTML = ` ${Math.floor(+el.price * 79)}`;
        priceDiv.append(oldPrice,price,discountonProduct)

        detailsDiv.append(img,title,rating,priceDiv);
        detailsDiv.onclick = () =>{
            product(el);
        }

        let btnsDiv = document.createElement("div");
        let addToCart = document.createElement("button");
        addToCart.innerHTML = `<img src="./Images/cart.png"> Add To Cart`;
        addToCart.onclick = () => {
            addtocart(el)
        };

        let addToWishlist = document.createElement("button");
        addToWishlist.innerHTML = `<img src="./Images/heart-white.png">`;
        addToWishlist.onclick = () => {
            wishlist(el)
        }

        btnsDiv.append(addToCart,addToWishlist);
    
    div.append(detailsDiv,btnsDiv);
    appendingDiv.append(div);
}
}


let product = (data) => {
    localStorage.setItem("product", JSON.stringify(data))
    // window.location.href = "product.html"
    alert("div");
};

let addtocart = (prod) => {
    let cartData = JSON.parse(localStorage.getItem("cartData")) || [] ;
    cartData.push(prod);
    localStorage.setItem("cartData", JSON.stringify(cartData));
    // window.location.href = "addtocart.html"
    alert("add to cart");
};

let wishlist = (prod) => {
    let wishlistData = JSON.parse(localStorage.getItem("wishlistData")) || [] ;
    wishlistData.push(prod);
    localStorage.setItem("wishlistData", JSON.stringify(wishlistData))
    // window.location.href = "wishlist.html"
    alert("wishlist");
};


export default getdata;