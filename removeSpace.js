const removeSpace=(sr)=>{
    let len = sr.length;
    let  r=[];
    
    let i=0,j=0;
   while(i<len){
    if(sr[i]!==" "){
        r[j++]=sr[i];
    }
    i++;
   }
   return r.join("");
}

let res = removeSpace("abc  cd a  g");
console.log(typeof(res))
console.log(res);