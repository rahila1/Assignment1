let arr= [-4 , 5 , -2 , 11 , 7 , -6 , -10]
let positivecount=sum=0
for (let i = 0; i <= arr.length; i++) {
    if(arr[i] > 0){
        positivecount++;
        sum= sum +arr[i];
    }
  
}
console.log("Total positive  Numbers=", positivecount);
console.log("Sum of all Numbers=" , sum);