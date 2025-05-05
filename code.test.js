const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

assert(FactorialDynamic(10) === 3628800);
assert(DynamicE(10) === 2.7182818011463845);
