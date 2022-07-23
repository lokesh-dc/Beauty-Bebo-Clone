import navbar from "../Components/navbar.js"
import footer from "../Components/footer.js"
document.getElementById("navbar").innerHTML = navbar()
document.getElementById("footer").innerHTML = footer()



let userdata = JSON.parse(localStorage.getItem("userdata"));

fetchdata(userdata)
function fetchdata(){
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    name.innerText = userdata.name
    email.innerHTML = userdata.username
}


document.getElementById("brandspage").addEventListener("click",function(){
    window.location.href = "./brands.html"
})