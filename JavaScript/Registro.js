let btnRegistro = document.getElementById('btnRegistro')

btnRegistro.addEventListener("click", function(){
    let nombre = document.getElementById("nombre")
    let apellido = document.getElementById("apellido")
    let contraseña = document.getElementById("contraseña")
    let contraseñaconf = document.getElementById("contraseñaconf")
    let errorNombre = document.getElementById("name_error")
    let errorApellido = document.getElementById("apellido_error")
    let contraseña_error = document.getElementById("contraseña_error")
    let contraseñaconf_error = document.getElementById("contraseñaconf_error")

    if(nombre.value == ""){
        errorNombre.classList.remove("hidden")
    } else {
        errorNombre.classList.add("hidden")
    }

    if(apellido.value == ""){
        errorApellido.classList.remove("hidden")
    } else {
        errorApellido.classList.add("hidden")
    }

    if(contraseñaconf.value == ""){
        contraseñaconf_error.classList.remove("hidden")
    } else {
        if(contraseña.value != contraseñaconf.value){
            contraseñaconf_error.classList.remove("hidden")
        }
        else{
            contraseñaconf_error.classList.add("hidden")
        }
    }
    if(contraseña.value == ""){
        contraseña_error.classList.remove("hidden")
    }
    else {
        contraseña_error.classList.add("hidden")
    }

    let country = document.getElementById("country")
    let country_error = document.getElementById("country_error")

    if(country.value == 0){
        country_error.classList.remove("hidden")
    }else {
        country_error.classList.add("hidden")
    }

    let radios = document.getElementsByName("gender")
    let gender_error = document.getElementById("gender_error")

    let flag = false
    let i
    for(i=0; i<radios.length; i++){
        if(radios[i].checked){
            flag = true
        }
    }

    if(!flag){
        gender_error.classList.remove("hidden")
    }else{
        gender_error.classList.add("hidden")
    }

})