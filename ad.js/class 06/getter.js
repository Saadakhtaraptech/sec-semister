                                                  class Temperature{
    #celsius;
    constructor(value){
        this.#celsius = value

    }

    get mytemp(){
        return this.#celsius
    }

    set mytemp(value){
        if(value > -20 && value <= 50){
            this.#celsius = value;
            document.write(`${this.#celsius} °C this is setter method <br>`)
        }
        else{
            document.write(`invalid value <br>`)
        }
    }
}

let obj = new Temperature(50);
document.write(obj.mytemp, " °C this is getter method <br>")
obj.mytemp = 67;