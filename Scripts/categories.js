import {getdata} from "../Components/fetch.js"

window.addEventListener("load",()=>{
        selection("#foundation");
});

document.querySelector('#foundation').addEventListener("click",()=>{
    selection("#foundation");
})

document.querySelector('#eyeliner').addEventListener("click",()=>{
    selection("#eyeliner","covergirl");
})


document.querySelector('#eyeshadow').addEventListener("click",()=>{
    selection("#eyeshadow");
})

document.querySelector('#lipstick').addEventListener("click",()=>{
    selection("#lipstick");
})

document.querySelector('#mascara').addEventListener("click",()=>{
    selection("#mascara");
})

document.querySelector('#nail_polish').addEventListener("click",()=>{
    selection("#nail_polish");
})


document.querySelector('#bronzer').addEventListener("click",()=>{
    selection("#bronzer","nyx");
})

let selection = (select,brand)=>{
    document.querySelector('#foundation').classList.remove('active');
    document.querySelector('#eyeliner').classList.remove('active');
    document.querySelector('#eyeshadow').classList.remove('active');
    document.querySelector('#lipstick').classList.remove('active');
    document.querySelector('#mascara').classList.remove('active');
    document.querySelector('#nail_polish').classList.remove('active');
    document.querySelector('#bronzer').classList.remove('active'); 
    if(brand===undefined)
        brand = "dior";
    let selected = document.querySelector(select);
    selected.setAttribute('class',"active");
    let query = selected.innerText;
    getdata(query,"selection-div_data",4,brand) 
}


document.getElementById("brandspage").addEventListener("click",function(){
    window.location.href = "./brands.html"
})