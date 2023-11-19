// sum of n 
let total = 0;
function sumOfN(n) {
    for (let i = 0; i <=n; i++) {
        total += i;
    }
    console.log(total);
    return total;
}
let t1= performance.now();
let result=sumOfN(10);
let t2= performance.now();
console.log(`${result} and time is ${(t2-t1)/1000}`)

// the number of operations is bounded by the number of n, so the the time complexity wil be O(n)
