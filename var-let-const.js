// var : no reason to use 
//let : allow it to reassign
// const : donot allow it to reassign
//const money = 25;
//money = 20; -------->  donot allow it to reassign we are get error 
//<-----but another way we can use value add_--->
//const rich = money + 50;
//console.log(rich);

// how can use let keyword//
//let count = 10;
//count = count + 20;
//console.log(count);

//array reassign//
const numbers = [11,22,12,88,99,75,33];
//numbers = [4,5,7,9,11];  it is not posssiable
numbers [1] = 55;
numbers.push(7,8,9);
console.log(numbers);