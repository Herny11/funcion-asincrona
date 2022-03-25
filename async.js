
var heroeMarvel = [
    {
        id : 1,
        personaje: "Spider-man"
    },
    {
        id : 2,
        personaje: "Iron-Man"
    },
    {
        id : 3,
        personaje: "Thor"
    },
    {
        id : 4,
        personaje: "Hulk"
    },
    {
        id : 5,
        personaje: "Capitan America"
    },
]
/**
 * async: la funcion es declarada como asincrono
 * await: es usado para esperar una promesa ... IMPORTANTE: los awaits se usan solo dentro de funciones asincronas
 */

var findPersonaje = (id) => 
    new Promise((resolve, reject)=> {
        setTimeout(()=>{
            var personaje= heroeMarvel.find(function(item){
                if(item.id=== id){
                    return item;

                }
                
            })
            if (personaje){
                resolve(personaje)
            }
            else{
                reject("no existe el personaje con id: " + id)
            }
        }, 2000);
    })
async function buscar(id){
    try{
        var p = await findPersonaje(id)
        console.log(p);

    }
    catch(error){
        console.log(error);

    }
    
}
buscar(4);