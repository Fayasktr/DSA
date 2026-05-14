let arr=[1,2,3,4,5];

function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        let swapped=false;
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                swapped=true;
            }
        }
        if(!swapped){
            if(i==0)
            console.log("O(n)")
            break;
        }
    }
    return arr
}

console.log(bubbleSort(arr))