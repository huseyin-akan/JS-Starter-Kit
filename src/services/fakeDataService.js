import DataError from "../entities/models/dataError.js"
import EmployeeService from "./employeeService.js";
import { Validator } from "../core/crossCuttingConcerns/validation/validator.js";
import CustomerService from "./customerService.js";
import { CustomerDal } from "../dataAccess/concrete/customerDal.js";
import { EmployeeDal } from "../dataAccess/concrete/employeeDal.js";
import { users } from "../fakeData/users.js";

export default class FakeDataService {
    constructor() {
        this.errors = []
        this.validator = new Validator();
        this.customerDal = new CustomerDal();
        this.employeeDal = new EmployeeDal();
        this.employeeService = new EmployeeService(this.validator, this.employeeDal);
        this.customerService = new CustomerService(this.validator, this.customerDal);
    }

    loadData() { 
        for(let user of users){
            let addingResult = this.customerService.addCustomer(user);

            if(!addingResult.success){
                addingResult = this.employeeService.addEmployee(user);
            }

            if(!addingResult.success){
                this.errors.push(new DataError(addingResult.message, user));
            }
        }
    }

}