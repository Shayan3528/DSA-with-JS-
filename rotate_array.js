/** 
 * Clockwise rotation 
*/

const rotation = (arr) => {
    let len = arr.length;
    let clock=3;
    while (0 < clock) {
        let temp = arr[len - 1];
        for (let i = len - 1; i >0; i--){
            arr[i] = arr[i - 1];
        }
        arr[0] = temp;
        clock--;
    }
    return arr;

}

/// Drive code 
let arr = [1, 2, 3, 4, 5, 6];
let res = rotation(arr);
console.log(res);


