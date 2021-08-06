//Write a program to print out
//a. 6 L’s and H’s, half L’s, half H’s (L means low, H means high)
//     let mid = 6/2;
// for (let i = 0; i < mid; i++) {
//     console.log("L");
// }
// for (let i = 0; i < mid; i++) {
//     console.log("H");
// }
//b.n L’s and H’s in total, n entered by user
// let n = Number(prompt('Enter number'));
// if (n % 2 != 0) {
//     for (let i = 0; i < n / 2; i++) {
//         console.log("L");
//     }
//     for (let i = 0; i < (n / 2) - 1; i++) {
//         console.log("H");
//     }
// } else {
//     for (let i = 0; i < n / 2; i++) {
//         console.log("L");
//     }
//     for (let i = 0; i < n / 2; i++) {
//         console.log("H");
//     }
// }
//c. 8 1’s and 0’s in total, consecutively
//////Option 1:
// for (let i = 0; i < 8; i++){
//     if (i % 2 === 0 ) {
//         console.log("0");
//     } else {
//         console.log("1");
//     }
// }
//////Option 2:
// let n = 1;
// for (let i = 0; i < 8; i++) {
//     if (n === 1) {
//         n -= 1;
//         console.log(n+"\n");
//     } else {
//         n += 1;
//         console.log(n+"\n");
//     }
// }
//d.n 1’s and 0’s in total, consecutively, n entered by user
// let n = prompt('Enter the total number 1’s and 0’s?')
// for (let i = 0; i < n; i++){
//     if (i % 2 === 0 ) {
//         console.log("0");
//     } else {
//         console.log("1");
//     }
// }