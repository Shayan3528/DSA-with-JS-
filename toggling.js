const toggling = (s) => {
    let len = s.length;
    let result = "";

    for (let i = 0; i < len; i++) {
        let value = s[i].charCodeAt(0);
        if (value >= 65 && value <= 90){
            result += String.fromCharCode(value+32); 
        }else if(value>=97 && value<=122){
            result += String.fromCharCode(value-32);
        }else{
            result +=s[i];
        }
    }
    return result; 

}

/// Drive code 
let s = "@aBC";
let res = toggling(s);
console.log(res);


