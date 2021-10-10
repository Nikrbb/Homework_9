// #1

let x = 10;
let y = 7;
x > y ? console.log(`х больше, чем у`) : console.log(`х не больше, чем у`)

// #2

const num = +prompt(`Введите число`);
console.log(isNaN(num))

if (isNaN(num) === true) {
    alert(`Нужно было ввести число`);
} else if ( Boolean(num % 2) === false ) {
    alert(`Число ${num} четное`); 
} else {
    alert(`Число ${num} нечетное`);
};

// #3

const userInput = prompt( `Введите целое число` );
let sign = Math.sign(+userInput);
console.log(sign)
let abs = Math.abs(+userInput);
let lenghtNumber;
userInput === null ? lenghtNumber = null : lenghtNumber = String(abs).length;


switch (lenghtNumber) {
    case 1:
        lenghtNumber = `однозначное`;
        break;
    case 2:
        lenghtNumber = `двухзначное`;
        break;
    case 3:
        lenghtNumber = `трехзначное`;
        break;
    default :
        lenghtNumber = `многозначное`;
};


if ( (isNaN(+userInput) === true) || (userInput === ``) )  {
    alert( `Это не число` );
} else if ( userInput === null ) {
    alert( `Escape` );
} else if ( ( userInput === `0`) || ( userInput === `-0`) ) {
    alert( ` Это ноль ` );
} else if ( sign === 1 ) {
    alert( `Число ${userInput} ${lenghtNumber} положительное` );
} else {
    alert( `Число ${userInput} ${lenghtNumber} отрицательное` );
};
 
// #4

const firstNum = +prompt(`Введите первое число`);
const secondNum = +prompt(`Введите второе число`);
const thirdNum = +prompt(`Введите третье число`);

if ( ( firstNum >= secondNum ) && ( firstNum >= thirdNum ) ) {
    alert( `Число  '${firstNum}'  - наибольшее` );
} else if ( ( secondNum >= firstNum ) && ( secondNum >= thirdNum ) ) {
    alert( `Число  '${secondNum}'  - наибольшее` );
} else if ( ( thirdNum >= firstNum ) && ( thirdNum >= secondNum ) ) {
    alert( `Число  '${thirdNum}'  - наибольшее` );
};

// #5

const cathetusB = +prompt( `Введите длину второго катета` );
const cathetusA = +prompt( `Введите длину первого катета` );
const hypotenuse = +prompt( `Введите длину гипотенузы` );

if ( ( cathetusA + cathetusB ) <= hypotenuse ) {
    alert( `Так треугольник не получится` );
} else if ( ( cathetusA === cathetusB ) && ( cathetusB === hypotenuse ) ) {
    alert( `Этот треугольник равносторонний` );
} else {
    alert( `Норм такой треугольник получается.` );
};

