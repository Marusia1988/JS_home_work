console.log('1=========================');
const input = document.getElementById('newToDo');
const btn = document.getElementById('AddToDo');
const list = document.getElementById('toDoList');


btn.addEventListener('click',function(){
    createItem()
})


function createItem (){
    let li = document.createElement('li');
    li.className = 'listItem';
    let checkbox = document.createElement('input');
    checkbox.className = 'DoneCheckbox';
    checkbox.setAttribute('type','checkbox');
    let span = document.createElement('span');
    span.className = 'TodoText';
    span.innerText = input.value;
    let remove = document.createElement('button');
    remove.id = 'removeButton';
    remove.innerText = 'Remove';
    li.append(checkbox, span, remove);
    list.append(li)

    checkbox.addEventListener('click', function(){
        if (this.checked == true){
            span.classList.add('done')
        } else {
            span.classList.remove('done')
        }
    } )

    remove.addEventListener('click', function(){
        li.remove()
    })

}


console.log('2=========================');

function sum(num) {
    let result = 0;
    for(let i = num; i > 0; i--){
        result += i ;
    }
    return result
};
console.log(sum(8))

function sumRecursion(num) {return (num == 1) ? 1 : num + (sumRecursion(num - 1)); };
console.log(sumRecursion(8));

console.log('3=========================');


function printNumberRecursion(from,to){
    if (from == to){
        return console.log(from)
    }else {
        setTimeout(() => {
            console.log(from)
            return printNumberRecursion(from + 1, to)
        }, 1000);
    }
}
console.log(printNumberRecursion(8,12))

function printNumber(from,to){
    let counter = from;
    
    let time = setInterval(() => {
        console.log(counter);
        if(counter == to) {
            clearInterval(time);
        }
        counter++
    }, 1000);
}
console.log(printNumber(7,11))


console.log('4=========================');


let result = 1 ;

let interval = setInterval(() => {
    console.log(`Прошло ${result} секунды`);
    if(result >= 5) {
        clearInterval(interval);
    }
    result++
}, 1000);

console.log(interval)