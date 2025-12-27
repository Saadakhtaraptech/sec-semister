export {firstName, add, Car, myApp}

export default function newData() {
    document.getElementById("newdata").innerHTML = "This is the default exported function ";
}

let firstName = "Saad";

function add(a, b) {
    document.getElementById("add").innerHTML = "The sum is: " + (a + b);
}

function myApp(name) {
    document.getElementById("myApp").innerHTML = name;
}

class Car {
    start() {
        document.getElementById("car").innerHTML = "Car is starting...";
    }
}