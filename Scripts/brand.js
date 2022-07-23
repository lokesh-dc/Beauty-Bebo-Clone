import navbar from "../Components/navbar.js"
import footer from "../Components/footer.js"
document.getElementById("navbar").innerHTML = navbar()
document.getElementById("footer").innerHTML = footer()


let brandName = JSON.parse(localStorage.getItem("brandName"))
// console.log(brandName)

brandNameSet(brandName)
function brandNameSet(brandName){
    let bName = document.getElementById("brandName")
    let bName1 = document.getElementById("brandName1")

    bName.innerText = brandName
    bName1.innerText = brandName
}


let brand = async(brandName)=>{
    const url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brandName}`
    let res = await fetch(url)
    let data = await res.json()
    // console.log(data.name,data.image_link)
    append(data)
}
brand(brandName)




// function append(data){
//     data.forEach((elem)=>{
//         let container = document.getElementById("append")
//         let div = document.createElement("div")
//         let image = document.createElement("img")
//         image.src = elem.image_link
//         let name = document.createElement("p")
//         name.innerText = elem.name
//         let price = document.createElement("p")
//         price.innerText = elem.price*79
//         let btn = document.
//     })
    
// }

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
}


document.querySelector(".directHome1").addEventListener("click",function(){
    window.location.href = "./brands.html"
})
document.querySelector(".directHome2").addEventListener("click",function(){
    window.location.href = "./brands.html"
})


let product = (data) => {
    localStorage.setItem("product", JSON.stringify(data))
    // window.location.href = "product.html"
};

let addtocart = (data) => {
    localStorage.setItem("addtocart", JSON.stringify(data))
    // window.location.href = "addtocart.html"
    alert("product added")
};

let wishlist = (data) => {
    localStorage.setItem("wishlist", JSON.stringify(data))
    // window.location.href = "wishlist.html"
};
// document.getElementById("search").addEventListener("click", searchfun)
