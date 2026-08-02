const bubbleSorting=(arr)=>{
    let len = arr.length;
    for(let i=0;i<len-1;i++){
        let temp =0;
        for(let j=0;j<len-1-i;j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]= temp;
            }
        }

    }
    return arr;
}

// Drive code 
const arr =[2,1,4,3,7,10,8,9,6,5];
let res = bubbleSorting(arr);
console.log(res);