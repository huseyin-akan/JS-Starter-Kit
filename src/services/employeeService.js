import { EmployeeValidator } from "../core/crossCuttingConcerns/validation/employeeValidator.js";
import { ResultModel } from "../entities/models/resultModel.js";

export default class EmployeeService {
    constructor(validator, employeeDal) {
        this.employees = []
        this.validator = validator;
        this.employeeDal = employeeDal;
        this.employeeValidator = new EmployeeValidator(this.validator);
    }

    validate(user){
        return this.employeeValidator.validate(user);;
    }

    addEmployee(employee){
        let validationResult = this.validate(employee);
        if(validationResult.success){ 
            return this.employeeDal.add(employee);
        }
        return new ResultModel(false, `${employee.firstName} cannot be added. And the reason is: ${validationResult.message}`);
    }

    listEmployees(){
        return this.employeeDal.list();
    }

    sortEmployeesAsc(){
        return this.employeeDal.sortAscending();
    }

    sortEmployeesDesc(){
        return this.employeeDal.sortDescending();
    }

    getEmployeeById(id){
        return this.employeeDal.getById(id);
    }
}