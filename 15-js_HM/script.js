
class Human {
    static getType() {
        return `I'm Human`
    }
    constructor(name, age) {
        this.name = name
        this.age = age

    }
    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
}


class Tester extends Human {
    constructor(name, age) {
        super(name, age)
        this.job = 'Tester'
    }
    static getJob() {
        this.job = 'Tester'
        return this.job
    }
}

class Programmer extends Human {
    
    constructor(name, age) {
        super(name, age)
        this.job = 'Programmer'
    }
    static getJob() {
        this.job = 'Programmer'
        return this.job
    }
}


class ITCompany {
    createWorker(name, age, position) {
        if (position == 'Programmer') {
            return new Programmer(name, age)
        }
        if (position == 'Tester') {
            return new Tester(name, age)
        }
    }
}

const dev =  Tester.getJob();
console.log(dev)


const user = new ITCompany()
const programmer = user.createWorker('Maryna', 33, 'Programmer')
console.log(programmer)

const user2 = new Programmer('Maryna', 33)
user2.getAge()

// 2


function vowels(name) {
    Object.keys(name).forEach(key => {
        const vowels = ["a", "e", "i", "o", "u", "y"]
        vowels.forEach(i => {
            if (key == i) {
                Object.defineProperty(name, key, {
                    writable: false
                });
            }
        })
    })
}

const obj = {
    a: '1',
    b: '2',
    c: '3',
    e: '4',
    o: '5',

}


vowels(obj)
obj.o = 9
console.log(obj);