// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой
// элемент, то он учитывается и выводится отдельно. При выполнении задания необходимо учесть, что массив может содержать
// не только числа, но и, например, знаки, null и так далее.

let arr = [1, null, 0, NaN, 'string', 3, 12, true, '', "", 'none', 0, -0, NaN, undefined, false]

function count_item_arr() {
    let even = 0;  // Чётный
    let odd = 0;  // Нечётный
    let zeroElementsCount = 0;
    let zeroElementsArr = [];
    for (let i = 0; i < arr.length; i++) {
        // console.log(`Тип данных для ${arr[i]} = ${typeof (arr[i])}`)
        if (typeof (arr[i]) === 'number' && arr[i] !== 0) {
            if (arr[i] % 2 === 0) {
                even += 1
                // console.log(`Число ${arr[i]} - четное`)
            } else {
                // console.log(`Число ${arr[i]} - нечетное`)
                odd += 1
            }
        }
        if (arr[i] === 0) {
            zeroElementsCount += 1;
            zeroElementsArr.push(arr[i]);
        }
    }

    console.log(`Количество чётных чисел = ${even}`);
    console.log(`Количество нечётных чисел = ${odd}`);
    console.log(`Количество нулевых элементов = ${zeroElementsCount}, их список: ${zeroElementsArr}`);

    return zeroElementsArr
}

count_item_arr(arr);
