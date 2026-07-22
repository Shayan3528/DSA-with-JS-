const leadersInArray = (arr) => {
    let len = arr.length;
    let res = [];
    for (let i = 0; i < len; i++) {

        let isLeader=true;

        for (let j = i + 1; j < len; j++) {
            if(arr[i]<=arr[j]){
                isLeader=false;
                break;
            }
        }
        if (isLeader) {
            res.push(arr[i]);
        }

    }
    return res;
}

/// drive out 
const arr = [16, 17, 4, 3, 5, 2];
let res = leadersInArray(arr);
console.log(res);
