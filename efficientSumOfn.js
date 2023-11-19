total=0;
function sumOfN(n){
    return n*(n+1)/2;
}
let t1 =performance.now();
result=sumOfN(10)
let t2 =performance.now();

console.log(`${result} and time is ${(t2-t1)/1000}`)


// the number of operations is always 1 no matter number big is
// so the time complexity is always 0(1)