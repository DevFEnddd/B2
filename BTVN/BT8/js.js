// Write a script to calculate the BMI (Body Mass Index) of a person, the formula is as follows

// BMI (Body Mass Index):
// BMI = mass (kg) / (height(m) x height(m))
// Note: you must do the conversion from cm to m before calculation

// And then based on the calculated BMI, tell them that they are:
// -Severely underweight if BMI < 16
// -Underweight if BMI is between 16 and 18.5
// -Normal if BMI is between 18.5 and 25 
// -Overweight if BMI is between 25 and 30
// -Obese if BMI is more than 30

let weight = Number(prompt('Your weight in kg?'));
let height = Number(prompt('Your height in cm'));
let BMI = weight / (((height/100)*(height/100)));
// let n = BMI.toFixed(2);
const n = Math.floor(BMI * 10) / 10;
alert ('Your BMI is ' + n );
if (n < 16) {
    alert('Thiếu cân nghiêm trọng');
} else if(16 <= n && n < 18.5){
    alert('Thiếu cân');
}else if(18.5 <= n && n < 25){
    alert('Bình thường');
}else if(25 <= n && n < 30){
    alert('Thừa cân');
}else{
    alert('Béo phì');
}



