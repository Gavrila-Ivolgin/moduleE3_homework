// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой
// элемент, то он учитывается и выводится отдельно. При выполнении задания необходимо учесть, что массив может содержать
// не только числа, но и, например, знаки, null и так далее.


//https://apps.skillfactory.ru/learning/course/course-v1:SkillFactory+FPW-2.0+27AUG2020/block-v1:SkillFactory+FPW-2.0+27AUG2020+type@sequential+block@46e92265013849098d95657eed2a98b8/block-v1:SkillFactory+FPW-2.0+27AUG2020+type@vertical+block@6287962ac7df40fb8595c6b53e54970b

let arr = [1, null, NaN, 'string', 3, 12, true, '', "", 'none']


function count_item_arr() {
    let even = 0  // Чётный
    let odd = 0  // Нечётный
    let zero = 0
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === 'number') {
            if (arr[i] % 2 === 0) {
                even += 1
                console.log(`Число ${arr[i]} - четное`)
            } else {
                console.log(`Число ${arr[i]} - нечетное`)
                odd += 1
            }
        }
    }
    console.log(`Четных чисел = ${even}`)
    console.log(`Нечетных чисел = ${odd}`)
}

count_item_arr(arr)