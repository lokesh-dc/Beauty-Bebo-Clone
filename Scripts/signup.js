import navbar from "../Components/navbar.js"

document.getElementById("navbar").innerHTML = navbar()




async function submit(){

let fname = document.getElementById("fname").value;
let lname = document.getElementById("lname").value;
let user = fname+lname + (Math.random() * 1000).toFixed(0);
// console.log(user)

// console.log(fname + " " +lname)
    let registration = {
        name : fname + " " +lname,
        email : document.getElementById("email").value,
        username : user,
        password : document.getElementById("password").value,
        mobile : document.getElementById("mobile").value,
        description : "qwertsdfg"
    }


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
        window.location.href = "./account.html"
    }else{
        alert("Try Again")
    }
}


document.getElementById("but").addEventListener("click",submit)


document.getElementById("logoDiv").addEventListener("click",function(){
    alert("Option not available create Account Manually")
})