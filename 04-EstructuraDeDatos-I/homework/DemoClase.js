"--------------------- RECURSION ------------------------------------------------------------------------------------------------"

function CuentaRegresiva(num){
    console.log(num)
    if(num === 0){
        return "Fin"
    }else{
    CuentaRegresiva(num-1)
    }
}

CuentaRegresiva(10)


function factorial(num){
    if(num === 0){
        return (1)
    }
    return num * factorial(num-1)
    }

console.log(factorial(5))

"------------- ESTRUCTURA DE DATOS ------------------------------------------------------------------------------------------------"
//                         SET                                  //

var pares= [2, 'hola', 4, 6, 6, 'hola', 'hola']

var losMuchachos = new Set (pares);

console.log(losMuchachos)
console.log(losMuchachos.size) //miSet."comando"

console.log(losMuchachos.values())


for(let values of losMuchachos){
    console.log(values)
}

//*****************************************************************************************************************************************

// STACKS
"LIFO = Last In First Out" //(El último que entro es el primero en salir)

function Stack(){
    this.arr = []
}

Stack.prototype.agregar= function(value){ //donde dice agregar puedo poner lo que yo quiera, lo que importar es aclarar en el this lo que hace
    this.arr.push(value)
};

Stack.prototype.sacar = function(){
    this.arr.pop()
}

Stack.prototype.tamaño = function(){
    return this.arr.length;
}

var miStack = new Stack();
console.log(miStack)

miStack.agregar(10);
miStack.agregar(5);
miStack.agregar(7);

console.log(miStack);

miStack.sacar()
console.log(miStack);

console.log(miStack.tamaño())


// QUEUES
"FIFO = Fist In First Out"

function queue(){
    this.arr = [];
}

queue.prototype.agregar = function(value){
    this.arr.push(value);
}

queue.prototype.sacar = function(){
    return this.arr.shift()
}

queue.prototype.tamaño = function(){
    return this.arr.length;
}

var miQueue = new queue();
console.log(miQueue)


miQueue.agregar(10);
miQueue.agregar(5);
miQueue.agregar(7);

console.log(miQueue);

miQueue.sacar()
console.log(miQueue);

console.log(miQueue.tamaño())