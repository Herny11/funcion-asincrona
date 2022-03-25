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
// tres estados de promesa pendiente, resuelto y rechazado

function findPersonajebyID(id){
    var personaje = heroeMarvel.find(function(item){
        if(item.id === id){
            return item;
        }
    });

    return new Promise((resolve, reject)=>{
        if (personaje){
            resolve(personaje)
        }
        else{
            reject("No se encontro personaje con id: " + id);
        }

    });
}
findPersonajebyID(2)
    .then((per) => console.log(per)) // recibir lo que venga del resolve
    .catch((err)=> console.log(err)) // recibe lo que venga del reject
    .finally(()=> console.log("fin de la promesa"));