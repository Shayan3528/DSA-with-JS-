const isBadVersion=()

const firstBadVersion=(isBadVersion)=>{
    let low = 0;
    let high=n;
    let ans =0;

    while(low<=high){
        let mid = low+Math.floor((high-low)/2);
        if(isBadVersion(mid)){
            ans=mid;
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
}