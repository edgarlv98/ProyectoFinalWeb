let loginbtn = document.getElementById("btnLogIn")

loginbtn.addEventListener("click", function(){
    let usuario = document.getElementById('usuario')
    let contraseña = document.getElementById('contraseña')
    let errorLogin = document.getElementById('errorLogin')

    if(usuario.value == ""){
        errorLogin.classList.remove("hidden")
    }else {
        errorLogin.classList.add("hidden")
    }

    if(contraseña.value == ""){
        errorLogin.classList.remove("hidden")
    }else {
        errorLogin.classList.add("hidden")
    }
})