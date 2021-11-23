import FakeDataService from "../services/fakeDataService.js"

console.log("User component yüklendi")

//Evaluate the fake data and split them into right categories:
let fakeDataService = new FakeDataService();
fakeDataService.loadData();

//list customers, employees and errors
console.log("CUSTOMERS:")
console.log(fakeDataService.customerService.listCustomers());
console.log("EMPLOYEES:")
console.log(fakeDataService.employeeService.listEmployees());
console.log("ERRORS:")
console.log(fakeDataService.errors);
console.log("----------------------------------------------------")

//try to add new objects:
//missing lastName data
let result1 = fakeDataService.employeeService.addEmployee( {id: 16, firstName: "Halit", city:"Mardin"
    ,age: 28, salary:16000, type: "employee"})
console.log(result1);

//wrong id data
let result2 = fakeDataService.employeeService.addEmployee( {id: "asdasdas", firstName: "Halit", lastName:"Altunal", city:"Mardin"
    ,age: 28, salary:16000, type: "employee"})
console.log(result2);

//wrong age data
let result3 = fakeDataService.employeeService.addEmployee( {id: 16, firstName: "Halit", lastName:"Altunal", city:"Mardin"
    ,age: 21238, salary:16000, type: "employee"})
console.log(result3);

//wrong type data
let result4 = fakeDataService.employeeService.addEmployee( {id: 16, firstName: "Halit", lastName:"Altunal", city:"Mardin"
    ,age: 21, salary:16000, type: "employii"})
console.log(result4);

//valid data but wrong service 
let result5 = fakeDataService.customerService.addCustomer( {id: 16, firstName: "Halit", lastName:"Altunal", city:"Mardin"
    ,age: 21, salary:16000, type: "employee"})
console.log(result5);

//valid data and successful adding
let result6 = fakeDataService.customerService.addCustomer( {id: 16, firstName: "Halit", lastName:"Altunal", city:"Mardin"
    ,age: 21, salary:16000, type: "customer"})
console.log(result6);
console.log("----------------------------------------------------")

console.log("LISTING DATA")
console.log(fakeDataService.employeeService.listEmployees());
console.log("----------------------------------------------------")

console.log("GET USER BY ID:")
console.log(fakeDataService.customerService.getCustomerById(16));
console.log("----------------------------------------------------")

console.log("SORTING ASC")
console.log(fakeDataService.employeeService.sortEmployeesAsc());
console.log("----------------------------------------------------")
console.log("Thank you very much for reviewing the code SIR")