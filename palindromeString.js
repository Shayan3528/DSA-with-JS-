const palindromeString=(str)=>{
    let len = str.length;
    let left =0;
    let right = len-1;
    while(left< right){
        if(str[left]!==str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;

}

/// Drive code
let st="abba";
let res = palindromeString(st);
if(res){
    console.log("String is palindrome");
}else{
    console.log("String is not palindrome")
}