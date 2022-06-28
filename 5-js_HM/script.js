console.log("1========================")

const arr = {
    number : [1, 1, 2, 2, 3],
    getUnique : function(arr){
        let result = [];
        for (const iterator of arr) {
            if (!result.includes(iterator)){
                result.push(iterator);
            }
        }
        return result
    }
};

let number = [1, 1, 2, 2, 3, 4, 4, 5 ];
const newArr = arr.getUnique(number);


console.log(newArr);

console.log("2========================")

const sumObj = {
    getKeySum : function(obj) {
        let result = 0;
        for (const key in obj) {
            if (key !== false) {  
                result += obj[key];                
            }
        }
        return result;
    },
    reversKey: function(obj) {
        let result = {}
        Object.keys(obj).forEach(function(value) {
            let key = obj[value];
            result[key] = value;
            
        });
        return result;
    }
}
const obj = {a: 1, b: 2, c: 3, d: false, e: 0};

let returnGetKeySum = sumObj.getKeySum(obj);
let returReversKey = sumObj.reversKey(obj);
console.log(returnGetKeySum)
console.log(returReversKey);


console.log("3========================")


let div = document.createElement('div');
div.innerText = '1';
div.className = 'item';

let div2 = document.createElement('div');
div2.innerText = '2';
div2.className = 'item';

let div3 = document.createElement('div');
div3.innerText = '3';
div3.className = 'item';

let div4 = document.createElement('div');
div4.innerText = '4';
div4.className = 'item';

let div5 = document.createElement('div');
div5.innerText = '5';
div5.className = 'item';

const holder = document.querySelector('.holder');
holder.append(div, div2, div3, div4, div5);