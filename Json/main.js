/*const deportista = {
    nombre: 'Messi',
    champions: 4,
};

console.log(JSON.stringify(deportista));
console.log(JSON.parse(deportista));
*/


fetch('http://127.0.0.1:5500/pasajeros.json')
    .then((response) => response.json())
    .then((pasajeros) =>{
        const nombresDePasajeros = pasajeros.nombres
        ((pasajero) => pasajero.nombre);
        console.log(nombresDePasajeros);
    });