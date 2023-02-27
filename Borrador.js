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
'use strict';

let num = 1565
let final = []


while(num>0){
    final.unshift(num%2)
    num = Math.floor((num/2))
}

console.log(final.join(''))

