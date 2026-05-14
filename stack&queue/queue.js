class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}
class Q{
    constructor(){
        this.front=null;
        this.rear=null
        this.size=0
        this.bound=5
    }
    enqueue(val){
        if(this.size>=this.bound)return "bound limit exeed"
        let newNode=new Node(val);
        if(!this.front){
            this.front=newNode;
            this.rear=newNode;
        }else{
            this.rear.next=newNode;
            this.rear=newNode; 
        }
        this.size++
    }
    dequeue(){
        if(this.size>1){
            this.front=this.front.next;
        }else{
            this.front=null;
            this.rear=null;
        }
        this.size--;
    }
    print(){
        let curr=this.front;
        while(curr){
            console.log(curr.val);
            curr=curr.next;
        }
    }
}

const q=new Q();

q.enqueue(10)
q.enqueue(100)
q.enqueue(1000);
q.enqueue(1000);
console.log(q.enqueue(1000))
console.log(q.enqueue(1000))

q.print()