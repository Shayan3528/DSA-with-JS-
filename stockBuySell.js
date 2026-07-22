const stockBuySell=(arr)=>{
    let len = arr.length;
    let maxSellingPrice=0;
    for(let i=0;i<len-1;i++){
        for(j=i+1;j<len;j++){
            maxSellingPrice=Math.max(maxSellingPrice,arr[j]-arr[i]);
        }
    }

    return maxSellingPrice;
}

// Drive code 
const prices= [7, 10, 1, 3, 6, 9, 2];
let  res = stockBuySell(prices);
console.log(res);
