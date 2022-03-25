

// var heroeMarvel = [
//     {
//         id : 1,
//         personaje: "Spider-man"
//     },
//     {
//         id : 2,
//         personaje: "Iron-Man"
//     },
//     {
//         id : 3,
//         personaje: "Thor"
//     },
//     {
//         id : 4,
//         personaje: "Hulk"
//     },
//     {
//         id : 5,
//         personaje: "Capitan America"
//     },
// ]
// function datos(){
//     return heroeMarvel;
// }

// function findPersonaje(id, callback){
//     var personaje = heroeMarvel.find(function(item){
//         if (item.id === id){
//             return item;
//         }

//     });
//     if (personaje){
//         callback(null, personaje);

//     }
//     else{
//         callback("no se encontro personaje con id: " + id);// funcion que se envia como parametro o argumento a otra funcion para que se ejecute una instruccion 
//     }
    
// }
// findPersonaje(3, (err, personaje) => {
//     if(err){
//         return console.log(err);
//     }else{
//         console.log(personaje);
//     }

// });

// function accion(){
//     console.log("hola, XD")
//     console.log("XD")
// }

// function saludar (callback) {
//     console.log("HI")
//     callback()
// }
// saludar(accion)


