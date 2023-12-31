var login = document.querySelector(".login");

var input = document.getElementById("input");
var error = document.getElementById("error");

input.addEventListener('keyup', (e)=> {
    if(e.keyCode == 13){
        checking(input.value)
    }
})

function checking(password){
    if(password == "admin"){
        password = "";
        error.textContent = "";
        login.classList.add('animation');
    }
    else{
        error.textContent = "Try again";
    }
}