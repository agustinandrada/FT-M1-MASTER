'use strict';

function BinarioADecimal(num) {

var nuevo = num.split('')
let final = []

for(var i=((nuevo.length)-1); i>=0; i--){
   if(nuevo[i] === '1'){
      final.unshift(Math.pow(2, ((nuevo.length)-(i+1))))
   }
}
let total = final.reduce((a, b) => a + b, 0);

return(total)
}
function DecimalABinario(num) {
   var final = []


   while(num>0){
      final.unshift(num%2)
      num = Math.floor((num/2))
   }

   return(final.join(''))
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
