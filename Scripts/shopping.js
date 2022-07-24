
  
import navbar  from "../Components/navbar.js"

document.getElementById("navbar").innerHTML = navbar();

  let data = JSON.parse(localStorage.getItem("cartData"))

  function display_table(data){
    document.querySelector("tbody").innerHTML=null;  
  data.forEach(function (ele, index) {
    let tr = document.createElement("tr");
    

    let td1 = document.createElement("td");

    let div_img = document.createElement("div");
    div_img.setAttribute("class" ,"shop_img");

    let img = document.createElement("img");
    img.src = ele.api_featured_image;

    div_img.append(img);

   


    let div_title = document.createElement("div");
    div_title.innerText = ele.name;


    td1.append(div_img, div_title);
    td1.setAttribute("class" ,"td1");


    let td2 = document.createElement("td");
    td2.innerText = `₹ ${Math.floor(ele.price * 79)}`;

    let td3 = document.createElement("td");
    // td3.style.width="40px";
    let ip = document.createElement("input");
    ip.setAttribute("class","dabba")
    td3.append(ip);


    let td4 = document.createElement("td");
    td4.innerText = `₹ ${Math.floor(ele.price * 79)}`;

    let tr2 = document.createElement("tr");
    let tr_1 = document.createElement("td");

    let btn_remove = document.createElement("button");
    btn_remove.innerText = "Remove";
    // btn_remove.setAttribute("id")
     btn_remove.addEventListener("click",function(ele , index){
     data.splice(index,1);
     let sum = localStorage.getItem("sum") || 0;
     sum -= ele.price * 79;
     localStorage.setItem("sum",sum);
     display_summary();
     localStorage.setItem("cartData",JSON.stringify(data));
     display_table(data);
    })

    let btn_edit = document.createElement("button");
    btn_edit.innerText = "Edit";

    tr_1.append(btn_edit, btn_remove);

    tr2.append(tr_1);

  



    tr.append(td1, td2, td3, td4);
    document.querySelector("tbody").append(tr, tr2);

   
  

  });
   

  }

  display_table(data);
  
  display_summary();
 
  function display_summary(){

    let sum =0;
    data.forEach(function(el){

    // let mrp = document.getElementById("price_1");
    // mrp.innerText =  `₹ ${Math.floor(el.price * 79)}`; 


  let sumtotal = document.getElementById("price_1");
        
        sum=  sum+Math.floor(el.price*79);
        
        sumtotal.innerText =`₹${sum}`
        console.log(sum);
        
    let total_mrp = document.getElementById("subtotal");
    total_mrp.innerText = `₹${sum}`;

    })
  }

  
  document.getElementById("switch").addEventListener("click",()=>{
    window.location.href = "checkout.html";
  })
