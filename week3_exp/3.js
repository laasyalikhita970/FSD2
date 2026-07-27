"use strict";
class Student {
    id;
    name;
    static college = "SVECW";
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    display() {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("College:", Student.college);
    }
}
let student1 = new Student(101, "Laasya");
student1.display();
console.log(Student.college);
