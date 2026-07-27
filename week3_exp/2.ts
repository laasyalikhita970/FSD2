class Employee {
    public name: string;
    private salary: number;
    protected department: string;
    //this refers to the current object that is using the class or function
    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    public display(): void {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}

let emp = new Employee("Laasya", 50000, "Software");

emp.display();

console.log(emp.name); // public allowed
// console.log(emp.salary); // private not allowed