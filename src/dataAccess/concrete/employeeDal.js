import { ResultModel } from "../../entities/models/resultModel.js";

export class EmployeeDal{
    
    constructor(){
        this.employees = [];
    }

    add(employee){
        this.employees.push(employee);
        return new ResultModel(true, `${employee.firstName} successfully added`)
    }

    list(){
        return this.employees;
    }

    sortAscending(){
        return this.employees.sort((employee1,employee2)=>{
            if(employee1.firstName>employee2.firstName){
                return 1;
            }else if(employee1.firstName===employee2.firstName){
                return 0;
            }else{
                return -1
            }
        })
    }

    sortDescending(){
        return this.employees.sort((employee1,employee2)=>{
            if(employee1.firstName>employee2.firstName){
                return -1;
            }else if(employee1.firstName===employee2.firstName){
                return 0;
            }else{
                return 1
            }
        })
    }

    getById(id){
        return this.employees.find(c=>c.id == id);
    }

}