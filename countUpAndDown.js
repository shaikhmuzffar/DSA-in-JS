function countUpAndDown(n){
    console.log("going up ")
    for (var i=0; i<=n; i++){
        console.log(i);
    }
    console.log("going down ")
    for(var j=i;j>0;j--){
        console.log(j);
    }
}

countUpAndDown(5);
// time complexity:O(n^2)