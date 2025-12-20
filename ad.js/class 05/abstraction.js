class Student{

    #year
    constructor(name, age, address, year){
        this.name = name
        this.age = age
        this.address = address
        this.#year = year
    }

    exam(){
        document.write(`${this.name} your exam has been scheduled at 25th of jan <br>`)
    }

    std_add(){
        document.write(` your address is : ${this.address} <br>`)
    }

    std_age(){
        document.write(` your age is : ${this.age}`)
    }

    std_year(){
        document.write(` your passing is : ${this.#year}`)
    }

}

let obj1 = new Student('muavia')
let obj2 = new Student('saad')
obj1.name = 'zair'
obj1.age = 20
obj1.address = "karachi"
// obj1.#year = 2025
obj1.exam()
obj1.std_age()
obj1.std_add()