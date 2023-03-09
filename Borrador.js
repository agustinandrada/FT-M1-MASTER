// var num = '1011'
// var nuevo = num.split('')
// let final = []


// for(var i=((nuevo.length)-1); i>=0; i--){
//     if(nuevo[i] === '1'){
//         final.unshift(Math.pow(2, ((nuevo.length)-(i+1))))
//     }
// }

// let total = final.reduce((a, b) => a + b, 0);

// console.log(total);

// console.log(final)

/////////////////////////////////////////////////////////////////////////////////////////////
// 'use strict';

// let num = 7
// let final = []


// while(num>0){
//     final.unshift(num%2)
//     num = Math.floor((num/2))
// }

// console.log(final.join(''))

///////////////////////////////////////////////////////////////////////////////

// function LinkedList() {
//     this.head = null
// }

// function Node(value) {
//     this.value = value;
//     this.next = null;
// }

// LinkedList.prototype.add = function(value){
//     var newNode = new Node(value);
//     var current = this.head;

//     if(!current){
//     this.head =  newNode;
//     return value;
// }

//     while (current.next){
//     current = current.next;
//     }
//     current.next = newNode;
//     return value;
// }

// function cualquiera(value){
//     return value % 2 === 0
// }

// LinkedList.prototype.search = function(value){
//     var current = this.head;
//     if (!current) return null;

//     if(typeof value === "function" ){
//         while (current){
//             if(value(current.value)) return value;
//             else current = current.next;
//             }
//             return null;
//     }
//     else{
//     while (current){
//     if(current.value === value) return value;
//     else current = current.next;
//     }
//     return null;
//     }
// }

// var miLista = new LinkedList();


// miLista.add(3)
// miLista.add(8)
// miLista.add(9)
// miLista.add(13)



// console.log(miLista)

// console.log(miLista.search(8))
// console.log(miLista)

// console.log(cualquiera(2))

///////////////////////////////////////////////////////////////

// function HashTable() {
//     this.buckets = [];
//     this.numBuckets = 35;
// }

// HashTable.prototype.hash = function(value){
//     var contador = [];

//     for(var i = 0; i<value.length; i++){
//     contador.push(value.charCodeAt(i));
//     }
//     let total = contador.reduce((a, b) => a + b, 0);
//     let codigo = total % this.numBuckets
//     return codigo
// }

// HashTable.prototype.set = function(key , value){
//     var lugar = this.hash(key);
//     if(this.buckets[lugar] != null){
//         this.buckets[lugar][key] = value;
//     }else this.buckets[lugar] = {[key]: value};
// }


// HashTable.prototype.hasKey = function(value){
// if(this.buckets.includes(value)){
//     return true;
// }
// else return false;
// }

// HashTable.prototype.get = function(key){
//     var lugar = this.hash(key);
//     if(this.buckets[lugar]){
//         return this.buckets[lugar][key]
//     }else return null
// }

// var palabra = new HashTable()

// console.log(palabra.set('hola',4))
// palabra.set('aloh', 6)
// palabra.set('mira', 5)
// console.log(palabra.hash('foo'))
// console.log(palabra.buckets)

// console.log(palabra.hasKey("hola"))

/////////////////////////////////////////////////////////////////////////////

// function factorear(num) {
    // Factorear el número recibido como parámetro y devolver en un array
    // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
    // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
    // Tu código:
//     if(num <= 1){
//         return []
//     }
//     let arr = [];
//     let contador = 2;

//     while(num > 1){
//         if (num % contador === 0){
//         arr.push(contador);
//         num = num/contador;
//         }else contador++
//     }
//     return arr
// }


//(console.log(factorear(180));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function bubbleSort(array) {
//     let len = array.length;
//     let swapped;

//     do {
//         swapped = false;
//         for (let i = 0; i < len - 1; i++) {
//             if (array[i] > array[i + 1]) {
//             let temp = array[i];
//             array[i] = array[i + 1];
//             array[i + 1] = temp;
//             swapped = true;
//             }
//         }
//         } while (swapped);

//         return array;
//     }



// console.log(bubbleSort([5, 1, 4, 2, 8]))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function quickSort(array) {
    // Implementar el método conocido como quickSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    if(array.length<1){
        return array;
    } else {

        var izquierda = [];
        var derecha = [];
        var pivot = array[0];

        for(i = 1; i < array.length; i++){
        if(array[i] <= pivot){
        izquierda.push(array[i]);
        }else
        derecha.push(array[i]);
        }
    }
    return quickSort(izquierda).concat(pivot, quickSort(derecha));
}


var miArray = [5, 1, 4, 2, 8]
console.log(quickSort(miArray))

function mergeSort(array) {
    // Implementar el método conocido como mergeSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    if(array.length <=1){
        return array;
    }
    else{
        var mitad = Math.floor(array.length / 2);
        var derecha = array.slice(0, mitad);
        var izquierda = array.slice(mitad);
        console.log(izquierda);
        console.log(derecha);
        return merge(mergeSort(izquierda), mergeSort(derecha))
    }
}

function merge(izquierda, derecha){
    let i = 0;
    let d = 0;
    let resultado= [];
    while(i < izquierda.length && d < derecha.length){
        if(izquierda[i] < derecha[d]){
            resultado.push(izquierda[i]);
            i++;
        }else{
            resultado.push(derecha[d]);
            d++
        }
    }
    return resultado.concat(izquierda.slice(i)).concat(derecha.slice(d))
}


mergeSort(miArray)

console.log(mergeSort(miArray))