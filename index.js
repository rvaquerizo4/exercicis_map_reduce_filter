// Función 1
const sqrtArray = arr => arr.map(x => Math.sqrt(x));

// Función 2
const sumPositive = arr => arr.filter(x => x > 0).reduce((acc, x) => acc + x, 0);

// Función 3
const factorial = n => Array.from(Array(n).keys()).reduce((acc, x) => acc * (x + 1), 1);

// Función 4
const arraySizes = arr => arr.map(x => x.length);

// Función 5
const itEmployeesUnder60k = employees => employees.filter(x => x.department === "IT" && x.salary < 60000).map(x => x.name);

// Array de ejemplo
const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
];



//1
console.log(sqrtArray([4, 9, 16]));
//2
console.log(sumPositive([1, -2, 3, -4, 5]));
//3
console.log(factorial(5));
//4
console.log(arraySizes([[1, 2], [3, 4, 5], [6]]));
//5
console.log(itEmployeesUnder60k(employees));
