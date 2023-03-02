var info = { a: 1 };

const dataObj = {
  info: [1, 2, 3],
  prop1: "hola",
  vv: function () {
    this.prop1 = "chau";
    return this.prop1;
  },
};
dataObj.vv();

function fufu() {
  dataObj.info.pop();
  return this.info;
}
dataObj.fufu = fufu;

console.log(dataObj);
console.log(dataObj.fufu());

console.log(dataObj);

var persona = {
  nombre: "Guille",
  apellido: "Aszyn",
};
// persona.logNombre= logNombre

var logNombre = function (apellido) {
  console.log(this.nombre);
  return this.nombre + " " + apellido;
};

// Bind -> nos retorna una función
// necesita dos pasos
//                    logNombre(one, two)
var logNombrePersona = logNombre.bind(persona, "lopez");
// el primer parametro de bind es el this!
console.log(logNombrePersona());
console.log(persona);

// Call & Apply -> retornan un valor directamente
var valorCall = logNombre.call(persona, "Funes");
console.log(valorCall);

var valorApply = logNombre.apply(persona, ["Funes2"]);
console.log(valorApply);

// Clases
function Persona() {
  // POO
  this.nombre = "";
  this.apellido = "";
}
Persona.prototype.addName = function (name) {
  this.nombre = name;
};
Persona.prototype.addAp = function (ap) {
    this.apellido = ap;
  };

/*
{
    nombre: "",
    apellido: ""
}
*/
const instanciaPersona = new Persona();
instanciaPersona.addName("Mauro");
instanciaPersona.addAp("Mauro");

const instanciaPersona2 = new Persona();

console.log(Persona);
console.log(instanciaPersona);
console.log(instanciaPersona2);
