// Objeto con expresiones para validacion
const expresiones = {
    apeynom: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,                                   // Letras, espacios, letras con acento
    correo: /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    cantidad: /^\d{1,10}$/                                              // De 1 a 10 numeros
}

const btnEnviar = document.getElementById("btn-enviar");
const btnBorrar = document.getElementById("btn-borrar");

btnEnviar.addEventListener(
    "click", 
    (e)=>{

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const correo = document.getElementById("correo").value;
        const cantidad = document.getElementById("cantidad").value;
        const categoria = document.getElementById("categoria").value;
        const aPagar = document.getElementById("aPagar");

        if (!expresiones.apeynom.test(nombre))
            aPagar.innerText = "Debe ingresar un nombre válido";
        else if (!expresiones.apeynom.test(apellido))
            aPagar.innerText = "Debe ingresar un apellido válido";
        else if (!expresiones.correo.test(correo))
            aPagar.innerText = "Debe ingresar un correo valido";
        else if (!(expresiones.cantidad.test(cantidad) && cantidad>0))
            aPagar.innerText = "Debe ingresar una cantidad mayor a 0";
        else if (!(categoria==0 || categoria == 15 || categoria == 50 || categoria == 80))
            aPagar.innerText = "Debe seleccionar una categoria válida";
        else {
            const monto = 200 * cantidad * (1 - categoria/100);
            aPagar.innerText = "Total a Pagar: $ " + monto.toFixed(2);
        }
      
    }
)

btnBorrar.addEventListener("click", borrarFormCompra)

function borrarFormCompra(){
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("cantidad").value = 1;
    document.getElementById("categoria").value = 0;
    document.getElementById("categoria").text = "Publico General";
    document.getElementById("aPagar").innerText = "Total a Pagar: $";
}