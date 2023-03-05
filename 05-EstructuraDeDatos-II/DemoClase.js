function LinkedList(){
    this.head = null
}

function Node(value){
    this.value = value;
    this.next = null;
}

LinkedList.prototype.add = function(value){
    var newNode = new Node(value);

    var current = this.head;

    if (!current){
        this.head = newNode;
        return value
    }

    while (current.next){
        current = current.next
    }
    current.next = newNode;
    return value
}

var miLista = new LinkedList();

miLista.add(8)
miLista.add(9)
miLista.add(13)

console.log(miLista)