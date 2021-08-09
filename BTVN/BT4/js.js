// Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range

let n ;
while (true) {
    n = Number(prompt('Enter a number'));
    if (0 <= n && n <= 4) {
        alert('Lower half');
        break;
    }else if( 4 < n && n < 9){
        alert('Higher half');
        break;
    }else {
        alert('Re-enter a number!!!!');
    }
}
