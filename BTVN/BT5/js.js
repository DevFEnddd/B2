//Write a program asking user to enter two numbers, x and n,
//then check if x is in lower half or higher half of n

let x = Number(prompt('x = '));
let n = Number(prompt('n = '));
    if (x > n) {
        alert(`${x} is in higher half of ${n} `);
    }else if(x < n){
        alert(`${x} is in lower half of ${n} `);
    }else {
        alert('Re-enter a number!!!!');
    }
