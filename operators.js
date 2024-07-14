// Task - 1,2,3,4,5
let a=10,b=5;
console.log(`task 1--> ${a+b}, task 2-->${a-b},task 3--->${a*b},task 4-->${a/b},task 5-->${a%b}`);

// task 6
a+=1;
console.log(`a+=1 -->${a}`);

// task 7
b-=1;
console.log(`b-=1 --> ${b}`);

// task 8
console.log(`a>b --> ${a>b} && a<b --> ${a<b}`);

// task 9
let c=4;
console.log(`b>=c --> ${b>=c}`);

// task 10
let d="4";
console.log(`d==c -->${d==c} && d===c -->${d===c}`);

// task 11 ,12
console.log(`${true && false} --- ${ true || false}`);

// task 14
let z;
function check (z) {
    return z>=0 ?"positive" :"Negative";
}
console.log(check(8));
console.log(check(-4));