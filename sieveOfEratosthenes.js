const primeFactor=(n)=>{
    const arr = new Array(n).fill(true);
    arr[0]=false;
    arr[1]=false;

    for(let i=2;i*i<=n;i++){

        if(arr[i]){
            for(let j=i*i;j<=n;j=j+i){
                arr[j]=false;
            }
        }
    }
const primes=[];
    for(let i=2;i<=30;i++){
        if(arr[i]){
            primes.push(i);
        }
    }
 return primes;
}


const arr =30;
let res = primeFactor(arr);
console.log(res);