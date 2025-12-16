// single Interitance

class A{
    constructor(a,b){
        this.num1 = a
        this.num2 = b
    }

    start(){
        document.write(`this is start method from parent class ${this.num1 + this.num2} <br> `)
    }

    stop(){
        document.write(`this is stop method from parent class ${this.num1 * this.num2} <br>`)
    }
}

class B extends A{

    start(){
        super.start()
        document.write(`this is start method from child class B ${this.num1 - this.num2} <br>`)

    }

    hello(){
        document.write(`this is hello method from child class B <br>`)
    }
}

let obj = new B(50 , 30)
obj.start()
obj.hello()