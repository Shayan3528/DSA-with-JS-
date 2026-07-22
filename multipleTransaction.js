const multipleTransaction=(prices)=>{
    let len = prices.length;
    let profit=0;

    for(let i=1;i<len;i++){
        if(prices[i]>prices[i-1]){
            profit +=(prices[i]-prices[i-1]);
        }
    }

    return profit;
}

// Drive out 
const prices=  [7, 1, 5, 3, 6, 4] ;
let res = multipleTransaction(prices);
console.log(res);