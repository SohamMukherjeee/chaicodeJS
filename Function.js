//   Task 1

function oddEven(n) {
    if(n%2===0)console.log(`${n} is an even number`);
    else console.log(`${n} is an odd number`);
}
oddEven(9)
oddEven(10)

// Task 2
function square(x){
    console.log(`square of ${x} is ${x*x}`);
}
square(4)

// Task 3
const maxino=function(n1,n2){
    return n1>n2?n1:n2;
}
console.log(maxino(9,10));
console.log(maxino(23,5));

// Task 4
const joinstr=function(str1,str2){
    return str1+str2;
}
console.log(joinstr("soham"," mukherjee"));

// Task 5
const sumOftwo=(x,y)=>{console.log(`${x+y}`);}

sumOftwo(9,0)

// Task 6
const str3 = (testPara, checkPara) => {
    var regex = new RegExp(testPara);
    var result = regex.test(checkPara);
    console.log(result);
 }
 
 str3('kol', 'kolkata');
 
 //task 7
 function mult(a,b=1) {
    console.log(`${a*b}`);
 }
 mult(3)

 // Task 8
 function greet(name,afe=18){
    console.log(`Hello ${name},your age is ${afe}`);
 }
 greet("soham")

 // Task 9
 function add(a,b,d) {
    let res=a+b;
    d(res);
 }
 add (4,6,(n)=>console.log(n));