const toggling = (s) => {
    let len = s.length;
    let result = "";

    for (let i = 0; i < len; i++) {
        let code = s[i].charCodeAt(0);
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            code ^= (1 << 5);
        }

        result += String.fromCharCode(code);
    }
    return result;

}

/// Drive code 
let s = "@ABC-BRahmanbaria";
let res = toggling(s);
console.log(res);


