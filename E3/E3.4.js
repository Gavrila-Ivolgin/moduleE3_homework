// Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым,
// и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите
// внимание на числа 0 и 1.

function isPrime(num) {
    if (num > 1000) {
        return "Данные не верны";
    }
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(12)); // false
console.log(isPrime(1001)); // Данные не верны