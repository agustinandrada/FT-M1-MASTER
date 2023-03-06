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

