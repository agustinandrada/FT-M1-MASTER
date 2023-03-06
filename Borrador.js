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

function LinkedList() {
    this.head = null
}

function Node(value) {
    this.value = value;
    this.next = null;
}

LinkedList.prototype.add = function(value){
    var newNode = new Node(value);
    var current = this.head;

    if(!current){
    this.head =  newNode;
    return value;
}

    while (current.next){
    current = current.next;
    }
    current.next = newNode;
    return value;
}

function cualquiera(value){
    return value % 2 === 0
}

LinkedList.prototype.search = function(value){
    var current = this.head;
    if (!current) return null;

    if(typeof value === "function" ){
        while (current){
            if(value(current.value)) return value;
            else current = current.next;
            }
            return null;
    }
    else{
    while (current){
    if(current.value === value) return value;
    else current = current.next;
    }
    return null;
    }
}

var miLista = new LinkedList();


miLista.add(3)
miLista.add(8)
miLista.add(9)
miLista.add(13)



console.log(miLista)

console.log(miLista.search(8))
console.log(miLista)

console.log(cualquiera(2))