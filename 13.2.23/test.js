/*function perfect(num)
{
let temp = 0;
   for(let i=1;i<=num/2;i++)
     {
         if(num%i === 0)
          {
            temp=temp+i;
          }
     }
   
     if(temp === num && temp !== 0)
        {
       console.log("true");
        } 
     else
        {
       console.log("not true");
        }   
 } 
perfect(6); 


function number(arr,n){
   let sum=(n*(n+1))/2;
   let arraySum=0;
   for (let i=0;i<n-1;i++) {
     arraySum += arr[i];
   }
   return sum-arraySum;
 }
 let arr=[1,2,4,6,3,7,8];
 let n=8;
 let missingNumber=number(arr,n);
 console.log(missingNumber);
 
 function sumarray(arr1,arr2) {
   let arr3=[];
   for (let i=0;i<arr1.length;i++) {
     let sum=arr1[i]+arr2[i];
     arr3.push(sum);
   }
    return arr3;
 }
 let arr1 = [4,6,7];
 let arr2 = [8,1,9];
 let arr3 = sumarray(arr1, arr2);
 console.log(arr3);*/

 function circuitPower(voltage,current){
    return voltage*current;
  }
  var power=circuitPower(110,3);
  console.log(power);