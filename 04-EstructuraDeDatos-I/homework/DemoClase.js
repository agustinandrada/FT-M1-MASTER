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
    let resultado = 1
    if(num === 0){
        return (1)
    }
    return num * factorial(num-1)
    }

console.log(factorial(5))