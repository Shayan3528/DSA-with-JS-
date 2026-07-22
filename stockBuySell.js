const stockBuySell=(arr)=>{
    let len = arr.length;
    let maxProfit=0;
    let minPrice=Infinity;
    // for(let i=0;i<len-1;i++){
    //     for(j=i+1;j<len;j++){
    //         maxSellingPrice=Math.max(maxSellingPrice,arr[j]-arr[i]);
    //     }
    // }

    for(let i=0;i<len;i++){
        if(arr[i]<minPrice){
            minPrice=arr[i];
        }else if( arr[i]-minPrice>maxProfit){
            maxProfit=arr[i]-minPrice;
        }
    }

    return maxProfit;
}

// Drive code 
const prices= [7, 10, 1, 3, 6, 9, 2];
let  res = stockBuySell(prices);
console.log(res);
