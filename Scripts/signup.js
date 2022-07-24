import navbar from "../Components/navbar.js"
import footer from "../Components/footer.js"
document.getElementById("navbar").innerHTML = navbar()

document.getElementById("footer").innerHTML = footer()



document.getElementById("magic").addEventListener("click",() =>{
    document.getElementById("cart-popup").style.visibility="visible";
    });



async function submit(){

let fname = document.getElementById("fname").value;
let lname = document.getElementById("lname").value;
let user = fname+lname + (Math.random() * 1000).toFixed(0);
// console.log(user)

// console.log(fname + " " +lname)
    let registration = {
        name : fname + " " +lname,
        email : user,
        username : document.getElementById("email").value,
        password : document.getElementById("password").value,
        mobile : document.getElementById("mobile").value,
        description : "qwertsdfg"
    }

console.log(registration.username)
    registration = JSON.stringify(registration)
    let registerDataLink =  "https://masai-api-mocker.herokuapp.com/auth/register";

    let response = await fetch(registerDataLink,{
        method : "POST",
        body : registration,
        headers :{
            'Content-type': 'application/json'

        }
    })
    let data = await response.json()
    console.log(data)
    if(data.error===false){
        alert("Successfully Registerd")
        // alert(user)
        window.location.href = "./index.html"
    }else{
        alert("User Already Exists")
    }
}


document.getElementById("but").addEventListener("click",submit)


document.getElementById("logoDiv").addEventListener("click",function(){
    alert("Option not available create Account Manually")
})

document.getElementById("brandspage").addEventListener("click",function(){
    window.location.href = "./brands.html"
})