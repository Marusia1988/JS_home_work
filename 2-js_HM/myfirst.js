console.log("1======================")

const newArr=['Капуста', 'Репа', 'Редиска', 'Морковка'];

console.log(newArr.join('| '));

console.log("2======================")

let names = 'Вася; Петя; Вова; Олег';
let arr = names.split('; ');
console.log(arr);  

console.log("3======================")

function hello2(name){
if (name === undefined) {
name = 'гость';
}
console.log('Привет, ' + name);    
}
hello2('Василий');
hello2()

console.log("4======================")


const fruits=['яблоко', 'ананас', 'груша'];
Array.prototype.fruitsInUpperCase=function()
{
 for (i=0;i<this.length;i++)
{
  this[i]=this[i].toUpperCase();
}
}

fruits.fruitsInUpperCase();
console.log(fruits)

console.log("5======================")

let addOneForAll = (...elements) => {
    return elements.map(elements => elements + 1);
}
console.log(addOneForAll(1, 2, 3, 4));

console.log("6======================")

const getSum = function(...args) {
    return args.reduce((val,sum) => val + sum, 0);
};
    
console.log(getSum(1,2,3,4,5));

console.log("7======================")

const numberArray = [];
const arr1 = [1, 'hello', 2, 3, 4, '5', '6', 7, null];

for (const item of arr1) {
  if (typeof item === 'number') numberArray[numberArray.length] = item;
}

console.log(numberArray);

console.log("8======================")

const haveTrueValue = arrayTesting([0, false, null, 1]);
const dontHaveTrueValue = arrayTesting([0, false, null, 0]); 

function  arrayTesting(arr){
    resul = arr.some(el => el == true);
    if (resul === true) {
        return  'Нашли true значение';
        } 
        else {
            return  'Ничего нет';  
        }
}
console.log(haveTrueValue);
console.log(dontHaveTrueValue);

console.log("======================")
