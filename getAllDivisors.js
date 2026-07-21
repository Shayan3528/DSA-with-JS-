const getAllDivisors=(n)=>{
    let res = [];
    for(let i=2;i*i<=n;i++){

        if( n%i ===0){
            res.push(i);
            if(i !== n/i){
                res.push(n/i);
            }
        }
    }

    return res;
}

let res = getAllDivisors(30);
console.log(res);
