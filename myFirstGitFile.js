const _ = require('lodash');
const arr = [1,[2,3,[{abc: 'xyz'}]]];
const arr1 = _.flattenDeep(arr);
console.log(arr1);
