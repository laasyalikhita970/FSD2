//Normal Function
function add(a: number, b: number): number {
    return a + b;
}

//Arrow Function
const plus = (a: number, b: number): number => {
    return a + b;
};

console.log(plus(10, 20));

//Short form (single line)
const multiply = (a: number, b: number): number => a * b;

console.log(multiply(5, 4));
