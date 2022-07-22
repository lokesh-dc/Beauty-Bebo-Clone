import navbar from "../Components/navbar.js"
document.getElementById("navbar").innerHTML = navbar();





let searchfun = async () => {
    let query = document.querySelector("#query").value;
    getData(query)

}

let getData = async (query) => {
    let url = `https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=${query}`
    let res = await fetch(url);
    let data = await res.json()
    append(data)
    console.log(data);
}



function append(data) {
    let container = document.querySelector("#container");
    container.innerHTML = "";
    data.forEach((el) => {


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
    })
};

let product = (data) => {
    localStorage.setItem("product", JSON.stringify(data))
    // window.location.href = "product.html"
};

let addtocart = (data) => {
    localStorage.setItem("addtocart", JSON.stringify(data))
    // window.location.href = "addtocart.html"
};

let wishlist = (data) => {
    localStorage.setItem("wishlist", JSON.stringify(data))
    // window.location.href = "wishlist.html"
};
document.getElementById("search").addEventListener("click", searchfun)