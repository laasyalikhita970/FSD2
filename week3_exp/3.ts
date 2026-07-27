class Student {
    readonly id: number;
    name: string;
    static college: string = "SVECW";

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    display(): void {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("College:", Student.college);
    }
}

let student1 = new Student(101, "Laasya");

student1.display();

console.log(Student.college);