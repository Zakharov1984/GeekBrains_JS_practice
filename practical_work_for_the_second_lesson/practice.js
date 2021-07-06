"use strict";
// Объявлял пременные с разными именами(отличными в заданиях), так как делал дз в одном файле(при повторном объявлении выдает ошибку.) 

/*Задание №1.____________________________________________________________________________________________________

Пример 1.1 (в объяснениях оборачивал имена меременных в знак !, для удобства читаемости.)
1. Объявляем четыре переменные через запятую с помощью ключеволго слова let, к переменной !a! присваеваем значение 1 и к переменной !b! присваеваем значение 1.

2. В переменную !c! присваемваем результат операции - инкремент(префиксная форма) - значит, в переменной !a! значение увеличится на единицу и вернется новое знчение, которое присвоется переменной !с!.  a == 2, c == 2.

3. Выводим значение переменной !с! через функицю alert().
*/ 
let a = 1, 
    b = 1, 
    c, 
    d; 
c = ++a;
alert(c); // ответ: 2

/* Пример 1.2 
1. Оператор инкремент(постфиксная форма) у переменной !b! сначала вернет старое значение, потом увеличит значение на еденицу. d == 1, b ==2.

2. Выводим значение переменной !d! через функицю alert().
*/
d = b++;
alert(d); //ответ: 1

/* Пример 1.3
1. Оератор инкремент(префиксная форма) - увеличит значение переменной !a! на единицу и вернет новое значение a == 3.

2. Даее выполнится операция сложения и в переменную !c! запишется резуьтат обработки выражения(2 + 3) c == 5. 

3. Выводим значение переменной !с! через функицю alert().
*/
c = 2 + ++a;
alert(c); //ответ: 5 

/* Пример 1.4 
1. Оператор инкремент(постфиксная форма) - сначала вернет старое значение в переменной !b!, потом увеличит значение в переменной на единицу b == 3.

2. Даее выполнится операция сложения и в переменную !d! запишется рузелтат вычисления(2 + 2) d == 4.

3. Выводим значение переменной !d! через функицю alert().

4. Выводим значение переменной !a! через функицю alert().

5. Выводим значение переменной !b! через функицю alert().
*/ 
d = 2 + b++; 
alert(d); //ответ: 4

alert(a); //3 
alert(b); //3

/* Задание №2.____________________________________________________________________________________________________
1. Первым выолнится выражение, которое находится в скобках(оператор группировки имеет больший приоритет).
2. (e *= 2) == (e = e * 2) в перменную !e! приcвоетcя новое значение e == 4.
3. Далее оператор (=)  вернет это новое значение и оператор сложение произведет операцию сложив два операнда.
4. В переменную !f! присвоится резуьтат вычисления f == 5. 
*/
let e = 2; 
let f = 1 + (e *= 2);

// Задание №3.____________________________________________________________________________________________________

let number1 = 40;
let number2 = 50;

if (number1 >= 0 && number2 >= 0) {
    console.log(number1 - number2);
} else if (number1 < 0 && number2 < 0) {
    console.log(nember1 * number2);
} else if (number1 >= 0 && number2 < 0 || number1 < 0 && number2 >= 0) {
    console.log(nember1 + number2);
}

// Задание №4.____________________________________________________________________________________________________

/**
 * Функция принимает на вход два числа и складывает их.
 * @param {number} number1 Первое число, которое будет складываться.
 * @param {number} number2 Второе число, которое будет складываться.
 * @returns {number} Функция возвращает результат сложения двух чисел
 */
function calcSum(number1, number2) {

    return number1 + number2;
}

/**
 * Функция принимает на вход два числа и вычитает едно число из другого
 * @param {number} number1 Первое число, из которого будет вычитаться второе
 * @param {number} number2 Второе число, которое будет вычитаться из первого
 * @returns {number} Функция возвращает результат вычитания двух чисел
 */
function calcSubtraction(number1, number2) {

    return number1 - number2;
}

/**
 * Функция принимает на вход два числа и умножает одно число на другое
 * @param {number} number1 Первое число, которое будет множителем
 * @param {number} number2 Второе число, которое будет множителем
 * @returns {number} Функция возвращает результат умножения двух чисел
 */
function calcMultiplication(number1, number2) {

    return number1 * number2;
}

/**
 * Функция принимает на вход два числа и делит одно число на другое
 * @param {number} number1 Первое число, которое будет делимым
 * @param {number} number2 Второе число, которое будет делителем
 * @returns {number} Функция возвращает результат деления двух чисел
 */
function calcDivision(number1, number2) {

    return number1 / number2;
}


// Задание №5.____________________________________________________________________________________________________

/**
 * Эта функция выполняет одну из операций(сложение, вычитание, деление, умножение) в зависимости, что пользователь передаст на вход.
 * @param {number} arg1 Первое значение(число) - с которым будут производится операции
 * @param {number} arg2 Второе значение(число) - с которым будут производится операции
 * @param {string} operation Название операции, которую нужно будет произвести над числами.
 * @returns {number} Функция возвращает результат в зависимости от желаемой операции
 */
function implementationOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'умножение':
        case 'Умножение':
        case 'multiplication': 
            return calcMultiplication(arg1, arg2);
        case 'деление':
        case 'Деление':
        case 'division':
            return calcDivision(arg1, arg2);
        case 'сложение':
        case 'Сложение':
        case 'sum':
            return calcSum(arg1, arg2);
        case 'вычитание':
        case 'Вычитание':
        case 'Subtraction':    
            return calcSubtraction(arg1, arg2);
        default:
             alert('Пожауйста, введите корректную операцию');
    }
}

let numberOne = +prompt('введите первое число');
let numberTwo = +prompt('введите второе число');
let operationUser = prompt('введите операцию которую хотите произвести с этими числами');

console.log(implementationOperation(numberOne, numberTwo, operationUser));



/*Задание №6.____________________________________________________________________________________________________
В отдельном файле 'sixth_task' 

*/


