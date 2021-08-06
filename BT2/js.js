let number;
let giaiThua;
while (true) {
    number = prompt('Enter number');
    giaiThua = 1;
    if (number < 0) {
        alert('Không tồn tại giai thừa của số âm')
    } else {
        for (let i = 1; i <= number; i++) {
            giaiThua *= i;
        }
        alert(`${number}! = ${giaiThua}`)
        break;
    }

}