class MinHeap{
    constructor(){
        this.heap=[];
    }
    insert(val){
        this.heap.push(val);
        this.heapifyUp();
    }
    heapifyUp(){
        let index=this.heap.length-1;
        let parent=this.parentIndex(index)
        while(index>0 && this.heap[parent]>this.heap[index]){
            this.swap(index,parent);
            index=parent
            parent=this.parentIndex(index)
        }
    }
    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }
    print(){
        console.log(this.heap)
    }
    peak(){
        return this.heap[0]
    }
    parentIndex(index){
        return Math.floor((index-1)/2)
    }
    leftChild(index){
        return index*2+1;
    }
    rightChild(index){
        return index*2+2;
    }
    search(val){
        return this.heap.indexOf(val);
    }
    extract(){
        if(this.heap.length==0)return null;
        if(this.heap.length==1)return this.heap.pop();
        return this.heapifyDown()
    }
    heapifyDown(){
        let min=this.heap[0];
        this.heap[0]=this.heap.pop();
        let i=0;
        while(true){
            
            let left=this.leftChild(i);
            let right=this.rightChild(i);
            let smallest=i;
            if(left<this.heap.length&&this.heap[left]<this.heap[smallest]){
                smallest=left;
            }
            if(right<this.heap.length&&this.heap[right]<this.heap[smallest]){
                smallest=right;
            }
            if(smallest==i)break;
            this.swap(i,smallest);
            i=smallest;
        }
        return min
    }
}

const heap=new MinHeap();

heap.insert(5)
heap.insert(4)
heap.insert(6)
heap.insert(1)
heap.insert(12)
heap.insert(3)
heap.insert(56)

// console.log(heap.peak())

// console.log(heap.search(3))
console.log(heap.extract())
console.log(heap.extract())
console.log(heap.extract())
console.log(heap.extract())
heap.insert(7)
console.log(heap.extract())
console.log(heap.extract())
heap.print()