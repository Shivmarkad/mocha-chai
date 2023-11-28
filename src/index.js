
const calculate = function(para1, para2){
    return para1 + para2
}

const factorial = function(num){
    let fact = 1;
    for(let i = num;i>0; i--){
      fact *= i
    }
    return fact;
}
// console.log(calculate(2,5))

// console.log(factorial(3))

module.exports = { calculate, factorial };