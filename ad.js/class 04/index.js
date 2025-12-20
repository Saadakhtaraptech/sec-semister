class Car{

    constructor(a, b){
        this.num1 = a
        this.num2 = b

        document.write("this is constructor form parent class <br>")
    }

    start(){
        document.write('car is starting .....from parent class ', this.num1 + this.num2 , '<br>')
    }
}


class Electric_Car extends Car{

    constructor(a,b){
        super(20, 40)
        this.num3 = a
        this.num4 = b
        document.write("this is constructor form child class <br>")
    }

    start(){
        super.start()
        document.write('tesla is starting .....from child class ', this.num3 + this.num4 , '<br>')
    }

    drive(){
        document.write("tesla is driving")
    }
}


let tesla = new Electric_Car(10, 40)
tesla.start()
tesla.drive()