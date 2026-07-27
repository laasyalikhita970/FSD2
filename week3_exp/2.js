"use strict";
class Employee {
    name;
    salary;
    department;
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    display() {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}
let emp = new Employee("Laasya", 50000, "Software");
emp.display();
console.log(emp.name); // public allowed
// console.log(emp.salary); // private not allowed
