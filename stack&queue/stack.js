class Stack{
    constructor() {
        this.stack=[];
    }
    push(val){
        this.stack.push(val);
    }
    pop(){
        if(this.isEmpty()){
            return "empty"
        }
        this.stack.pop();
    }
    isEmpty(){
        return this.stack.length==0
    }
    peek(){
        return this.stack[this.stack.length-1];
    }
    print(){
        console.log(this.stack)
    }
}
const st=new Stack();
for(let i=1;i<=10;i++){
    st.push(i)
}
st.pop()
console.log(st.peek())
st.print()