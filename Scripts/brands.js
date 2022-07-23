import navbar from "../Components/navbar.js"
import footer from "../Components/footer.js"
document.getElementById("navbar").innerHTML = navbar()
document.getElementById("footer").innerHTML = footer()



document.getElementById("directHome").addEventListener("click",function(){
    window.location.href = "./index.html"
})

document.getElementById("brandsButton").addEventListener("click",(e)=>{
    let name = e.target.innerHTML
    console.log(name)
    localStorage.setItem("brandName",JSON.stringify(name))
    window.location.href = "./brand.html"
})


document.getElementById("brandspage").addEventListener("click",function(){
    window.location.href = "./brands.html"
})