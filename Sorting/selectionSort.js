const selectionSort=(arr)=>{
    let len = arr.length;

    for(let i=0;i<len-1;i++){
        let minIndex=i;
        for(let j=i+1;j<len;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
        }
        if(minIndex !== i){
            let temp=0;
            temp=arr[i];
            arr[i]=arr[minIndex];
            arr[minIndex]= temp;
        }
    }
    return arr;
}

// Drive Code 
const arr=[64,25,12,22,11];
let res = selectionSort(arr);
console.log(res);