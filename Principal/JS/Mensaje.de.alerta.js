
function validaForm(){
    let x = document.forms["contact"]["author"].value;
    let y = document.forms["contact"]["email"].value;
    let z = document.forms["contact"]["subject"].value;
    if(x==""){
        alert("Ingrese información en las casillas Nombre");
        return false;
    }
    if(y==""){
        alert("Ingrese información en las casillas Correo electronico");
        return false;
    }
    if(z==""){
        alert("Ingrese informacón en las casillas Número de contacto");
        return false;
    }
}