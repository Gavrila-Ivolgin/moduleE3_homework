// Задание 1.
// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только
// собственных свойств. Данная функция не должна возвращать значение.

function printOwnProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key);
        }
    }
}

const obj = {
    city: "Moscow",
    address: "Lomonosov st, 3",
    obj: String
}

printOwnProperties(obj)

// city
// address
// obj

// Задание 2.
// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного
// объекта свойство с данным именем. Функция должна возвращать true или false.

function isProperty(propertyName, obj) {
    return propertyName in obj;
}

let str = "length";
const obj_str = new Object(String);
console.log(isProperty(str, obj_str))  // true

// Задание 3.
// Написать функцию, которая создает пустой объект, но без прототипа.
function createEmptyObject() {
    return Object.create(null);
}

let obj_3 = createEmptyObject();
console.log(obj_3); // [Object: null prototype] {}
console.log(obj_3.toString); // undefined