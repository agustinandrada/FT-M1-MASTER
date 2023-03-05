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

LinkedList.prototype.length = function () {
    var current = this.head
    var  acum = 1
    if(this.head === null){
    return 0
    }
    if (current.next !== null){
    acum = acum + 1
    }
    return acum
}


LinkedList.prototype.remove = function(){
    var current = this.head;
    if (!current){
        return null;
    }
    if(current.next === null){
        delete current.next;
        return current.next;
    }
    else{
        current = current.next
    }
}

var miLista = new LinkedList();

miLista.add(8)
miLista.add(9)
miLista.add(13)

console.log(miLista)

miLista.length()
miLista.remove()

console.log(miLista.remove())
console.log(miLista)