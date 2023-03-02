/*
Una clousure es una funcion que tiene acceso a variables de su contexto donde se 
definio.		
Para que exista una clousure se deben cumplir tres condiciones:		
1. La funcion debe estar dentro de una funcion (funciones anidadas) y debe ser retornada.
2. La funcion padre debe tener una variable (puede ser tb un params)
3. La funcion que está dentro debe interactuar con la variable de la funcion padre 
que está fuera de ella.
*/

function one() {
  const hulkArr = []; 
  return function two(value) { // enlasa a esta función con ese registro mágico
    hulkArr.push(value);
    return hulkArr
  };
}
// registro mágico -> pepito
var ejecuteClousure = one(); // function two(value) {hulkArr.push(value);}

console.log(ejecuteClousure(2));
console.log(ejecuteClousure(4));
console.log(ejecuteClousure(5));

// registro mágico -> jaimito
var ejecuteClousure2 = one(); // function two(value) {hulkArr.push(value);}
console.log(ejecuteClousure2("hola jaimito"))




	
function saludar( saludo ){
	return function( nombre ){
		console.log(saludo + ' ' + nombre);
	}
}
 
var saludarHola = saludar('Hola'); // Esto devuelve una función
var despedir = saludar('Chau');
despedir("Cualquiera")
saludarHola('Toni');



//-----------------------------------------------------------------------------------------

var creaFuncion = function(){
	var arreglo = [];
 // var i = undefined
	for ( let i=0; i < 3; i++){ // var i el dato enlace   // i = 0
		arreglo.push(
			function(){
				console.log(i);
			}
		)
	}
	return arreglo;
}
 
var arr = creaFuncion();
// arr -> arreglo [f(){log(i)},f(){log(i)},f(){log(i)}]

arr[0]() // 3 sale un 3, qué esperaban ustedes??
arr[1]() // 3
arr[2]() // 3

//--------------------------------------------------------------------------------------------
const arrayData = [];

function add(value) {
  arrayData.push(value);
}

function modificArr(value) {
  arrayData.push(value);
}

modificArr(3);
modificArr(33);
add("we");

console.log(arrayData);

const arrayData2 = [];

function modificArr2(value, addDelete) {
  if (addDelete === "add") {
    arrayData2.push(value);
  }
  if (addDelete === "delete") {
    arrayData2.pop();
  }
}

modificArr2(4, "add");
modificArr2(12, "add");

console.log(arrayData2);




