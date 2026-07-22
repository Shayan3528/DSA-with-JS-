const rearrangeArraybySign=(arr)=>{
    let posArray=[],negArray=[];
    
    let len = arr.length;
    for(let i=0;i<len;i++){
        if(arr[i]>-1){
            posArray.push(arr[i]);
        }else{
            negArray.push(arr[i]);
        }
    }
    let posIdx=0,negIdx=0,i=0;
    
    while(posIdx<posArray.length && negIdx<negArray.length){
        if(i%2===0){
            arr[i++]=posArray[posIdx++];
        }else{
            arr[i++]=negArray[negIdx++];
        }
    }

    // Remaining positive numbers (in any)
    while(posIdx<posArray.length ){
        arr[i++]=posArray[posIdx++];
    }

    /// Remaining negative numbers (if any)

    while(negIdx<negArray.length){
        arr[i++]=negArray[negIdx++];

    }

    return arr;
    
}


/// drive code 
let arr = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8];
let res = rearrangeArraybySign(arr);
console.log(res);