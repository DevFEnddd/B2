//Write a program to print out
//a.7 numbers, starting from 0 (no user input)
// for (let i = 0; i < 7; i++) {
//     console.log(i);
// }
// --------------------------------------------------------
// b.n numbers, starting from 0, n entered by user
// let n = prompt('Enter number');
// alert(`${n}`);
// for (let i = 0; i < n; i++) {
//     console.log(i);
// }
//----------------------------------------------------------
// c.A sequence of numbers, starting from 3, ending before n, n entered by user
// let n = prompt('Enter n');
// alert(`${n}`);
// for (let i = 3; i < n; i++) {
//     console.log(i);
// }
// ----------------------------------------------------------------
// d.A sequence of numbers, starting from c, ending before n, c and n entered by user
// let n = prompt('Enter n');
// let c = prompt('Enter c');
// for (let i = c; i < n; i++) {
//     console.log(i);  
// }
//e.A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user
// let c = Number(prompt('Enter c'));
// let n = Number(prompt('Enter n'));
// for (let i = c; i < n; i+=3) {
//     console.log(i);
// }
//f.A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user
let c = Number(prompt('Enter c'));
let n = Number(prompt('Enter n'));
let s = Number(prompt('Enter s'));
for (let i = c; i < n; i+=s) {
    console.log(i);
}
