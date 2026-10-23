"use strict";
class Employee {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    displayEmployee() {
        console.log(this.name + ", " + this.id);
    }
}
const empObj = new Employee("Shruthi", 345);
empObj.displayEmployee();
