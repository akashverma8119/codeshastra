/*for(var i=0;i<=100;i++){
    if(i==21 || i==31) continue
    if(i==51) break
    process.stdout.write(i+" ")
}

let arr=[2,2,2,3,4,5,7,3,6]
let x=new Set(arr)
console.log(x)

let arr=[2,2,2,3,4,5,7,3,6]
let x=new Set(arr)
x.add(10)
x.add(10) //no error, but also 10 will not be inserted. As it is already in the previous line. No duplicate.
console.log(x)
console.log(typeof x)

function doJob(value,index,x){
    console.log(value,index,x) //index is nothing, but just the value. In set, we don't have concept of indexing.
}
let arr=[2,2,2,1,3,4,3,4,5,7,3,6,7,8,9]
let x=new Set(arr)
x.forEach(doJob)*/

function doJob(value,index,x){
    console.log(value,index,x) //index is nothing, but just the value. In set, we don't have concept of indexing.
}
let x=new Set([2,2,2,1,3,4,3,4,5,7,3,6,7,8,9])
x.forEach(doJob)