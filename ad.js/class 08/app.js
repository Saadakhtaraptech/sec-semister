import hello, {firstName, add, Car} from "./library.js";

document.getElementById("name").innerHTML = firstName;
add(5, 10);

let obj3 = new Car();
obj3.start();
hello();