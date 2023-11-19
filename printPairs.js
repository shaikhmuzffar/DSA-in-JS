function prinfPairsOf(n){
    for(var i=0;i<n;i++){
        for(var j=0;j<n;j++){
            console.log(i,j);
        }
    }
    return [i,j];
}


let t1 =performance.now();
let result= prinfPairsOf(100);
let t2 =performance.now();

console.log(`time is ${(t2-t1)/1000}`)
// time complexity:O(n^2)
