// Task 1

for (let i = 1; i <= 10; i++) {
    console.log(`${i}`);
}


// Task 2
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5*i}`);
}


// Task 3
let sum=0,i=0;
while(i<=10){
    sum+=i;
    i++;
}
console.log(sum);

// Task 4
let n=10;
while(n>0){
    console.log(`${n}`);
    n--;
}
// Task 5
let m=1;
do {
    console.log(m);
    m++;
} while (m<=5);

// Task 6
function fact(nub) {
let ans=1,l=1;
do {
    ans=ans*l;
    l++;
} while (l<=nub);
console.log(`factorial of ${nub} is ${ans}`);
}
fact(5);

// Task 7
for (let i = 0; i < 5; i++) {
     let line="";
     for (let j = 0; j <= i; j++) {
        line+="*";        
     }
     console.log(line)
}

// Task 8
for (let i = 1; i <=10; i++) {
    if (i===5) {
        continue;
    }else[
        console.log(`${i}`)
    ]
    
}

// Task 9
for (let i = 1; i <=10; i++) {
    if (i===7) {
        break;
    }else[
        console.log(`${i}`)
    ]
    
}