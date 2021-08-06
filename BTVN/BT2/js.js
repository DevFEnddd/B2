// Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
let n ;
let giaiThua;
while (true) {
    n = prompt('Enter a number');
    giaiThua = 1;
    if (n < 0) {
        alert('Không tồn tại giai thừa của số âm')
    } else {
        for (let i = 1; i <= n; i++) {
            giaiThua *= i;
        }
        alert(`The factorial of ${n} is ${giaiThua}`);
        break;
    }
}
