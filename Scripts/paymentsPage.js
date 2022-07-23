import navbar from "../Components/navbar.js"
import footer from "../Components/footer.js"


document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();


let cartData = JSON.parse(localStorage.getItem("cartData")) || [];

window.addEventListener("load",()=>{
    displayCart(cartData);
})


let displayCart = (cartData) =>{
    let appendingDIv = document.querySelector('tbody');
    appendingDIv.innerHTML = null;

    let total = 0;
    cartData.forEach(elem => {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        td2.setAttribute("class","title")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")

        let img = document.createElement("img")
        img.src = elem.image_link;
        td1.append(img);
        let title = document.createElement("p");
        title.innerText = elem.name;
        td2.append(title);
        let quan = document.createElement("p");
        quan.innerText = "1";
        td4.append(quan);
        let price = document.createElement("p");
        let p = Math.floor((+elem.price * 79));
        total += p;
        price.innerText = ` ₹ ${p}`
        td3.append(price);

        tr.append(td1,td2,td3,td4);
        appendingDIv.append(tr);
    });
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.setAttribute("colspan","4")
    td.innerText = ` SubTotal : ${total}`;
    tr.append(td);
    appendingDIv.append(tr);
}