// Задание 4.
// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на
// прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте,
// какими свойствами он обладает.

function Device(name) {
    this.name = name;
    this.powerOn = false;
}

Device.prototype.turnOn = function () {
    this.powerOn = true;
    console.log(this.name + " включен в розетку.");
};

Device.prototype.turnOff = function () {
    this.powerOn = false;
    console.log(this.name + " выключен из розетки.");
};

// Создание экземпляров приборов
const lamp = new Device("Лампа");
const tv = new Device("Телевизор");

// Включение и выключение приборов
lamp.turnOn();
tv.turnOn();
lamp.turnOff();
tv.turnOff();