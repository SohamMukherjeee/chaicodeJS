// Task 1 
function checknum(num) {
    if (num==0) {
        console.log(`${num} is zero`);
    }else if(num<0){
        console.log(`${num} is negative`);
    }else{
        console.log(`${num} is postive`);
    }
}
checknum(12);
checknum(-1);
checknum(0);

// Task 2
function voteage(age) {
    if (age>=18) {
        console.log(`able to vote`);
    }else{
        console.log(`not able to vote`);
    }
}
voteage(12);
voteage(32);

// Task 3

function check(num1,num2,num3) {
    if (num1>num2 && num1>num3) {
        console.log(`${num1} is the largest number`);
    }else if(num2>num1 && num2>num3){
        console.log(`${num2} is the largest number`);
    }else{
        console.log(`${num3} is the largest number`);
    }
}
check(10,20,30);
check(10,10,10);

// Task 4

function daynum(key) {
    switch (key) {
            case 1:
            console.log(`Monday`);
            break;
            case 2:
            console.log(`Tuesday`);
            break;
            case 3:
            console.log(`Wednesday`);
            break;
            case 4:
            console.log(`Thursday`);
            break;
            case 5:
            console.log(`Friday`);
            break;
            case 6:
            console.log(`Saturday`);
            break;
            case 7:
            console.log(`Sunday`);
            break;

        default:
            console.log(`ERROR`);
            break;
    }
    
}
daynum(2);
daynum(9);

// Task 5
function exam(grade) {
    switch(grade){
        case 'A':
            console.log(`Your grade ${grade}`);
        break;
        case 'B':
            console.log(`Your grade ${grade}`);
        break;
        case 'C':
            console.log(`Your grade ${grade}`);
        break;
        case 'D':
            console.log(`Your grade ${grade}`);
        break;
        case 'F':
            console.log(`Your grade ${grade}`);
        break;
        default:
            console.log(`ERROR`);
            break;
    }
}
exam('D');

// Task 6
function checkodd(numbr) {
    if (numbr%2==0) {
        console.log(`${numbr} is an even`);
    }else{
        console.log(`${numbr} is an odd`);
    }
}
checkodd(25);
checkodd(90);

// Task 7
function leapyr(year) {
    if (year % 400 === 0) {
        console.log(`${year} is a leap year`);
    } else if (year % 100 === 0) {
        console.log(`${year} isn't a leap year`);
    } else if (year % 4 === 0) {
        console.log(`${year} is a leap year`);
    } else {
        console.log(`${year} isn't a leap year`);
    }
}
leapyr(2024);
leapyr(1000);