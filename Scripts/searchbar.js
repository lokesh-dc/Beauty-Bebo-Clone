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