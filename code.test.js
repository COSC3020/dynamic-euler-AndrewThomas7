const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

//assert(FactorialDynamic(10) === 3628800);
//assert(DynamicE(10) === 2.7182818011463845);
function factorial(n) {
    if(n === 0) return 1;
    else return n * factorial(n - 1);
}

function e(n) {
    if(n === 0) return 1;
    else return 1.0 /factorial(n) + e(n - 1);
}

TestMax=30
for(var j=0; j<TestMax;j++){
    if(!DynamicE(j)==e(j)){
        console.assert(DynamicE(j)==e(j),"Test Failed")
        throw "Test Failed"
    }
}
 console.assert(true, 'tests passed')

