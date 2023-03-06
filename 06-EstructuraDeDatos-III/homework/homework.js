'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
}

BinarySearchTree.prototype.size = function(){
   var contador = 1;
   if(this.left) contador += this.left.size();
   if(this.right) contador += this.right.size();
   return contador;
}

BinarySearchTree.prototype.insert = function(value){
   if(value < this.value){
      if(!this.left){
         this.left = new BinarySearchTree(value)
         return value;
      }else{
         this.left.insert(value)
      }
   } if(value > this.value){
      if(!this.right){
         this.right = new BinarySearchTree(value)
         return value;
      }else{
         this.right.insert(value)
      }
   }
}

BinarySearchTree.prototype.contains = function(value){
   if(this.value === value ){
      return true
   }if(this.left && this.left.contains(value)){
      return true;
   }if(this.right && this.right.contains(value)){
      return true;
   }else return false;
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, param){
   if(param === null || param === undefined || param === "in-order"){
      if(this.left)  this.left.depthFirstForEach(cb, param);
      cb(this.value);
      if(this.right) this.right.depthFirstForEach(cb, param);
   }
   if(param === "pre-order"){
      cb(this.value);
      if(this.left)  this.left.depthFirstForEach(cb, param);
      if(this.right) this.right.depthFirstForEach(cb, param);
   }
   if(param === "post-order"){
      if(this.left)  this.left.depthFirstForEach(cb, param);
      if(this.right) this.right.depthFirstForEach(cb, param);
      cb(this.value);
   }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, arr){
   if (!arr) {var arr = []};

   cb(this.value);
   if(this.left){
      arr.push(this.left);
   }if(this.right){
      arr.push(this.right);
   }
   if(arr.length){
   arr.shift().breadthFirstForEach(cb, arr);
   }
}







// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
