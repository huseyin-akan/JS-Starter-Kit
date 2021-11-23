import { CustomerValidator } from "../core/crossCuttingConcerns/validation/customerValidator.js";
import { ResultModel } from "../entities/models/resultModel.js";

export default class CustomerService {
    constructor(validator, customerDal) {
        this.customers = [];
        this.validator = validator;
        this.customerDal = customerDal;
        this.customerValidator = new CustomerValidator(this.validator);
    }

    validate(customer){
        return this.customerValidator.validate(customer);;
    }

    addCustomer(customer){
        let validationResult = this.validate(customer);
        if(validationResult.success){ 
            return this.customerDal.add(customer);
        }
        return new ResultModel(false, `${customer.firstName} cannot be added. And the reason is: ${validationResult.message}`);
    }

    listCustomers(){
        return this.customerDal.list();
    }

    sortCustomersAsc(){
        return this.customerDal.sortAscending();
    }

    sortCustomersDesc(){
        return this.customerDal.sortDescending();
    }

    getCustomerById(id){
        return this.customerDal.getById(id);
    }
}