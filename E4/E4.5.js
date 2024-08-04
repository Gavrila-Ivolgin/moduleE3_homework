// Задание 5.
// Переписать консольное приложение из предыдущего юнита на классы.

class Device {
    constructor(name) {
        this.name = name;
        this.powerOn = false;
    }

    turnOn() {
        this.powerOn = true;
        console.log(this.name + " включен в розетку.");
    }

    turnOff() {
        this.powerOn = false;
        console.log(this.name + " выключен из розетки.");
    }
}

// Создание экземпляров приборов
const lamp = new Device("Лампа");
const tv = new Device("Телевизор");

// Включение и выключение приборов
lamp.turnOn();
tv.turnOn();
lamp.turnOff();
tv.turnOff();