class bankAccount{

    #balance ;

    constructor(owner , balance, age){
        this.age = age
        this.owner = owner
        this.#balance = balance

        document.write(`${this.owner} your account is currently created and your current balance is ${this.#balance} <br>` )
    }

    deposit(amount){
        if(amount > 0){
            this.#balance += amount
        }

        document.write(`your current balance is after deposit ${this.#balance} <br>` )
    }

    withdraw(amount){
        if(amount > 0 && amount <= this.#balance){
            this.#balance -= amount
            document.write(`your current balance is after withdrawal ${this.#balance} <br>`)
        }
        else{
            document.write('you have insufficient balance')
        }
    }

    owner_age(){
        document.write(` your current age${this.age} `)
    }

}

let acc = new bankAccount('ali', 5000)
acc.age = 20;
acc.deposit(2000);
acc.withdraw(8000);
acc.owner_age();