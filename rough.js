const binarysearch=(arr,target)=>{
        let len = arr.length;
        let left=0;
        let right = len-1;
        let mid= Math.floor((left+right)/2);
        while(left<=right){
            mid = Math.floor((left+right)/2);
            if(arr[mid]===target){
                return mid;
            }else if(arr[mid]<target){
                left=mid+1
            }else if(arr[mid]>target){
                right=mid-1;
            }
        }
        return left;
}

// drive code
const arr =[1,3,5,6];
let target = 7;
let res = binarysearch(arr,target);
console.log(res);