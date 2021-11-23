import { ResultModel } from "../../entities/models/resultModel.js";

export class CustomerDal{
    
    constructor(){
        this.customers = [];
    }
    
    add(customer){
        this.customers.push(customer);
        return new ResultModel(true, `${customer.firstName} successfully added`)
    }

    list(){
        return this.customers;
    }

    sortAscending(){
        return this.customers.sort((customer1,customer2)=>{
            if(customer1.firstName>customer2.firstName){
                return 1;
            }else if(customer1.firstName===customer2.firstName){
                return 0;
            }else{
                return -1
            }
        })
    }

    sortDescending(){
        return this.customers.sort((customer1,customer2)=>{
            if(customer1.firstName>customer2.firstName){
                return -1;
            }else if(customer1.firstName===customer2.firstName){
                return 0;
            }else{
                return 0
            }
        })
    }

    getById(id){
        return this.customers.find(c=>c.id == id);
    }

}