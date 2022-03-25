function boton() {
    buscarMoneda()
};
var contenido = document.getElementById("contenido");
async function buscarMoneda(){
    try{
        var res = await fetch("https://api.adviceslip.com/advice");
        var dato = await res.json();
        
        
        contenido.innerHTML = `
        <div id="consejo1" class="card">
            <div  class="card-header">
                Consejo ${dato.slip.id}
            </div>
            <div class="card-body">
                <h5 class="card-title">${dato.slip.advice}</h5>
                <p class="card-text"></p>
                <button id="boton" type="button" onclick="boton()">Consejo</button>
            </div>
        </div>
        `

    }catch(err){
        console.log(err)

    }

} 
