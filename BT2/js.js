let number;
let factorial;
while (true) {
    number = prompt('Enter number');
    factorial = 1;
    if (number < 0) {
        alert('Không tồn tại giai thừa của số âm')
    } else {
        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }
        alert(`${number}! = ${factorial}`)
        break;
    }

}
