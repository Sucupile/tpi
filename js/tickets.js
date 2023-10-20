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

        if (!(nombre && apellido && correo && cantidad>0 && categoria ))
            aPagar.innerText = "Debe completar todos los campos";
        else {
            const monto = 200 * cantidad * (1 - categoria/100);
            aPagar.innerText = "Total a Pagar: $ " + monto.toFixed(2);
            // enviar al servidor
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
