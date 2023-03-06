function BinarySearchTree(value){
    this.value = value;
    this.left = null;
    this.rigth = null;
}

// ! Método INSERT -SIRVE PARA INSERTAR NODOS AL ARBOL

// 1-- Me pregunto si es mayor o menor, en base a eso se donde mirar
// 2-- Me pregunto si hay algo, si no hay nada, inserto el nodo nuevo.
// 3-- Si hay algo vuelvo al punto 1 pero aplicado al nodo donde esto

BinarySearchTree.prototype.insert = function(value){
    if(value < this.value){
        if(!this.left) {
            this.left = new BinarySearchTree(value);
            return value;
        } else{
            this.left.insert(value);
        }
    } else{
        if(value > this.value){
            if(!this.rigth) {
                this.rigth = new BinarySearchTree(value);
                return value;
            } else{
                this.rigth.insert(value);
    }
    }
    }
}

BinarySearchTree.prototype.size = function(){
    var contador = 1;
    if(this.left) contador += this.left.size();
    if(this.rigth) contador += this.rigth.size();
    return contador
}

var miArbol = new BinarySearchTree(10);

console.log(miArbol)
miArbol.insert(2)
console.log(miArbol)
miArbol.insert(11)
console.log(miArbol.size())

//!Claves

// 1-- Entender que quiero que haga mi funcion
// 2-- Confiar en que mi funcion hace lo que tiene que hacer
// 3-- Nos van a pasar un numero:
//     Array, string, objeto, perro, gato, mesa, tukis? NO

function tukis(value){
    console.log(value);
}

BinarySearchTree.prototype.depthFirstForEach = function(cb){
    // orden depthFirstForEach => I D N
    this.left.depthFirstForEach(cb);
    this.rigth.depthFirstForEach(cb);
    cb(this.value);
}

//PRE-ORDER => NODO-IZQ-DER
//POST-ORDER => IZQ-DER-NODO
//IN ORDER => IZQ-NODO-DER

//Estructura condicional => switch
