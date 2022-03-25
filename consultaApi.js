var contenido = document.getElementById("contenido");
async function buscarMoneda(tipoMoneda){
    try{
        var res = await fetch("https://api.gael.cloud/general/public/monedas/" + tipoMoneda);
        var datoMoneda = await res.json();
        console.log(datoMoneda)
        
        contenido.innerHTML = `
        <p style="color: white;">  ${datoMoneda.Codigo} asdwd</p>
        <p style="color: white;">  ${datoMoneda.Nombre} asdwd</p>`

    }catch(err){
        console.log(err)

    }

} 
buscarMoneda("UF")