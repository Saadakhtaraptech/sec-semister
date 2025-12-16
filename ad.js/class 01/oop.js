// OOP

class Car{
    drive(){
        document.write("This is prototype method in drive <br>")
    }

    stop(){
        document.write("This is prototype method in method <br>")
    }

    static hello(){
        document.write("This is static method <br>")
    }

    constructor(){
        document.write("This is constructor method <br>")
    }
}
let object = new Car()
let object2 = new Car()

object.drive()
object.stop()

Car.hello()