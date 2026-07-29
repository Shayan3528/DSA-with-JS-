// Dutch national flag algorithm 
const dnf=(arr)=>{
    let len = arr.length;
    let low=0,mid=0,high=len-1;
    while(mid<=high){
        if(arr[mid]===0){
            let temp = arr[low];
            arr[low]= arr[mid];
            arr[mid]=temp;
            low++;
            mid++;
        }else if(arr[mid]===1){
            mid++;
        }else{
            let temp=arr[mid];
            arr[mid]=arr[high];
            arr[high]=temp;
            high--;
        }
    }
    return arr;
}

// Drive code

const  arr = [2,0,1,1,0,1,0,2];
let res = dnf(arr);
console.log(res);