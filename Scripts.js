function invocarFormulario() {
    document.getElementById('contenedor_formulario').style.display = "flex";
    document.getElementById('contenido').style.display = "none";
}

function volverPaginaPrincipal(){
    document.getElementById('contenedor_formulario').style.display = "none";
    document.getElementById('contenido').style.display = "block";
}

/*function canvas(){
    var c = document.getElementById("Canvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("guitarrista-imagen");
    ctx.drawImage(img, 10, 10)

}*/
