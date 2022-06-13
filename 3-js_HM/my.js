function divider() {
    console.log("=========================")
}
console.log("1========================")
/*Получить от юзера число.
Получить сумму квадратов всех чисел от 1 до числа,
 которое ввел юзер. Пример:

Юзер ввел 4
(1 * 1) + (2 * 2) + (3 * 3) + (4 * 4) = 30
Вывести в консоль результат
Привести во вторую степень можно 
через оператор **. 3 ** 2 = 9*/

let userValue = Number(prompt('введите число', 4))

    if (elem = Number) {
        console.log(userValue);
	} 
    else { 	
};
let userValueToArray = Array(userValue).fill().map((e, i) => i + 1);

var out = 0;

function squareSum(numbers){
  for (var i = 0; i < numbers.length; i++) {
    var res = numbers[i] **2 ;
    out += res;
    console.log(out);
  }
}

squareSum(userValueToArray);

divider()

const number = prompt("Введите число", 4);
let sum = 0, numberOne = 0;
while(number >= numberOne){
    sum+=numberOne*numberOne;
    numberOne+=1;
};
console.log(sum);

console.log("2========================")
/*Отфильтровать его так, чтобы остались 
только те числа, которые больше 2 и меньше 20.
И потом получить их сумму.*/

let numbers = [3, 5, 12, 9, 23, 93, 17];

let result1 = numbers.filter(function(elem) {
	if (elem >= 2 && elem <= 20) {
		return true;
	} else {
		return false;
	}
});

var arr = result1;
function arraySum(array){
var sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
    }
console.log(sum);
}
arraySum(arr);

divider();/*второй вариант решения */

let secondArr = [3, 5, 12, 9, 23, 93, 17];
let filtersecondArr = secondArr.filter(i => i>2 & i<20);
let filtersum=0;
for (let i of filtersecondArr){
   filtersum+=i;
}
console.log(filtersum);

console.log("3========================")

  const thirdArr = [[1, 6, 3, '6'], [10, 15, 13, '10']];
  let thirdSum=0;
  for (let i of thirdArr){
      for (let a of i){
         if (typeof(a)=='number' & a%2 == 0){
             thirdSum+=a;
      };
    };
  };
  console.log(thirdSum);

console.log("4========================");
/*Написать функцию, которая устанавливает новые свойства в объект.
Функция принимает в себя 3 аргумента - key, value, obj
key - свойство, которое хотим добавить. Принимаем это от юзера.
value - значение свойства. Принимаем это от юзера.
obj - объект, в который хотим добавить новое свойство.
Если юзер ввел ключ, который уже есть в объекте, то выводим сообщение
 - "Уже есть", если ключа нет, то устанавливаем его в объект.*/
 let userObj = {
        year : 2022,
        name : 'Vlad',
        surname : 'Ivanov'
    };
    let userFunction = (key, value, obj) => {
          obj[key]=value;
    };
    const method_1 = prompt("Введите свойство");
    const method_2 = prompt("Введите значение свойства");
    const result = userFunction(method_1, method_2, userObj);
    console.log(userObj, result);
  

console.log("5========================");

for(let i = 1; i < 11; i++){
    if (i % 3 == 0){
        console.log('FizBuz');
    } else if(i % 2 == 0){
        console.log('Fiz');
    } else if(i % 2 != 0){
        console.log('Buz');
    } else {
        console.log(i);
    }
}
console.log("6========================")

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
  }
  
  console.log( factorial(10) ); 

console.log("7========================")

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

let sheetsFunc = function(a, b, c){
    let amount = c*(b/a);
    let i=0;
    do{
    i++;
    }while(i <= amount);
        console.log(i);
    }
    sheetsFunc(sheetsInReamPaper, consumptionPerWeek, weeksAmount);