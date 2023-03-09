'use strict'
// No cambies los nombres de las funciones.

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

      for(let i = 1; i < array.length; i++){
      if(array[i] <= pivot){
      izquierda.push(array[i]);
      }else
      derecha.push(array[i]);
      }
  }
  return quickSort(izquierda).concat(pivot, quickSort(derecha));
}

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

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
