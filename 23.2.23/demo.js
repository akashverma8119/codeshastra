/*function sumofElements(arr,val) {
    let sum=0;
    for(let i=0;i<val;i++) {
      sum+=arr[i];
    }
    return sum;
  }
  let arr=[2,9,3,6,5,4];
  console.log(sumofElements(arr,3)); 
  console.log(sumofElements(arr,4));*/
  
  function sumPair(num) {
    let ans=14
    for (let i=0;i<num.length;i+=2) {
      let sum=num[i]+num[i+1];
      if (sum===ans) {
        console.log("yes");
        break;  
      }else{
        console.log("no")
      }
    }
  }
  let arr=[8,6,3,-3,8,9,5];
  sumPair(arr); 
  
  