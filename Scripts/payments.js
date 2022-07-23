window.addEventListener("load",()=>{
    let user = JSON.parse(localStorage.getItem("order"));
    document.querySelector("#user").innerHTML = `<h3> Hi, ${user.name}</h3>`
})

let pin = document.querySelector('#pin');
let container = document.getElementById("payment");
document.getElementById("pay").addEventListener("click",()=>{
        container.innerHTML = null;
        let img = document.createElement("img");
        img.setAttribute("id","status")
        img.src = "https://c.tenor.com/_dGu36t3VNEAAAAC/loading-buffering.gif"
        container.append(img);
        alert("OTP sent to your mobile numeber.")
    if(pin.value==1234){
        setTimeout(success,1000);
    }
    else{
        setTimeout(failure,1000)
    }
})


let failure = ()=>{

    document.getElementById('status').src = "https://miro.medium.com/max/418/1*9MB_2QMF-LN5Va_V7urxwA.png";
    let btn = document.createElement("button");
    btn.innerText = "Retry";
    btn.onclick = ()=>{
        window.location.href = "payments.html";
    }
    container.append(btn);
}

let success  = ()=>{
    document.getElementById('status').src = "https://c.tenor.com/xPh7mDqOZ8UAAAAC/success.gif"
    
    let totalAmount = localStorage.getItem("order_total");
    let amount = document.createElement("p");
    amount.innerText = `Amount ₹ ${totalAmount} deducted`;
    let btn = document.createElement("button");
    btn.innerText = "Back to Home";
    btn.onclick = ()=>{
        window.location.href = "index.html";
    }
    container.append(amount,btn);
    localStorage.clear();
}