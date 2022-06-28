"use strict";

console.log("1========================");

function bindFunc(someFunc, context, ...args){
 return function() {
     someFunc.apply(context,args);
 };
}
  function helloWorld(a, b, c) {
      console.log(this.name);
      console.log(a, b, c);
  }
const returnedFunction = bindFunc(helloWorld, {name: 'Nina'}, 1, 2, 3);

returnedFunction();

console.log("2========================");

function sumA(objectA) {

    let sum = 0;
    for (let value of Object.values(objectA)) {
        if (value > 0)
        sum += value;
    }
  
    return sum; 
  }
  
  let objectA = {
    a: 1,
    b: 2,
    c: 3
  };
  
  console.log( sumA(objectA) );

console.log("3========================");

function getNewArray() {
  const filteredValues = this.values.filter(function (number) {
    return number > 2 && number < 10 && typeof number == "number"
      ? true
      : false;
  });
  return filteredValues;
}

const valObject0 = {
  values: [1, "2", 4, 8, "8", 3, 10, null, false],
};

const result = getNewArray.call(valObject0);
console.log(result);
  
console.log("4========================");

const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};

function getCity(object) {
    let result = []; 
    for (const [key, value] of Object.entries(object)) {
    result.push(`${key} - это ${value}`);
    }
    return result
    }

console.log(getCity(citiesAndCountries))
console.log("5========================");

const namesOfDays = {
  ru: ['Понедельник', 'Вторник', 'Среда','Четверг','Пятница','Суббота', 'Воскресенье'],
  en: ['Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday', 'Sunday'],
}

function getNameOfDay(lang, datNumber){
      let mass = namesOfDays[lang];
      if (datNumber > 31) {return 'Неверное значение'}
      else if (datNumber % 7 == 0 ){
          return mass [6]
      }
      else{
          datNumber %= 7
          return mass[datNumber - 1]
}
}
console.log(getNameOfDay('en', 30))

console.log("6========================");

const person = {
    name: 'Vlad'
};
const person1 = {
    age: 1
};

function setProto(currentObj, protoObj){
    currentObj.__proto__ = protoObj
    return currentObj
}
console.log(setProto(person1,person))

console.log("7========================");

const person2 = {
  name: "",
  age: 0,

  setName: function (name) {
    this.name = name;
  },

  setAge: function (value) {
    const ageAfterValidation = this.ageValidation(value); // age >= 18 ?age : 'error';
    this.age = ageAfterValidation;
  },

  getName: function () {
    return this.name;
  },

  getAge: function () {
    return this.age;
  },

  ageValidation: function (value) {
    if (parseInt(value) >= 18) {
      return value;
    } else {
      return "Validation Error";
    }
  },
};

const person3 = Object.create(person2);

console.log(person3);
person2.setName("Andrew");

console.log(person3);

person3.setAge(22);
console.log(person3);

console.log(person3.getName());
console.log(person3.getAge());

person3.setAge("12");
console.log(person3.getAge());


