const checkSubsequence=(s1,s2,n,m)=>{
   if(m===0) return true;
   if(n===0) return false;

   if(s1[n-1]===s2[m-1])
    return checkSubsequence(s1,s2,n-1,m-1);
return checkSubsequence(s1,s2,n-1,m);

}

// Drive Code 
let s1="avxbumcx";
let s2 = "abc";
let n = s1.length, m=s2.length;
let res = checkSubsequence(s1,s2,n,m);
console.log(res);