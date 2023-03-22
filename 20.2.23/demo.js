/*let str="farrhad"
let ans=""
for(let i=str.length-1;i>=0;i--){
    ans+=str[i]
}
console.log(ans)

let arr=[2,3,4,5,6,7,8,9]
for(let v of arr){
    console.log(v)
}*/

let stack=[]
function push(val){
    stack.push(val)
}
function printStack(){
    for(let i=0;i<stack.length;i++){
        process.stdout.write(stack[i]+" ")
    }
}
push(20)
push(30)
push(40)
printStack()