import { ValidationTypes } from "./validationTypes.js"
import { ValidationRule } from "./validationRule.js"

export class EmployeeValidator{

    constructor(validator){
        this.validator = validator;
    }

    validate(employee){
        
        let rules = [];
     
        rules.push( new ValidationRule(employee.id, ValidationTypes.required(), "Employee id kısmı boş geçilemez"));        
        rules.push( new ValidationRule(employee.firstName, ValidationTypes.required(), "Employee ilk adı kısmı boş geçilemez"));
        rules.push( new ValidationRule(employee.lastName, ValidationTypes.required(), "Employee soyadı kısmı boş geçilemez"));
        rules.push( new ValidationRule(employee.age, ValidationTypes.required(), "Employee yaşı kısmı boş geçilemez"));        
        rules.push( new ValidationRule(employee.city, ValidationTypes.required(), "Employee şehri kısmı boş geçilemez"));
        rules.push( new ValidationRule(employee.age, ValidationTypes.isAge(), "Employee yaş verisi hatalı"));
        rules.push( new ValidationRule(employee.id, ValidationTypes.isNumber(), "Employee id verisi tam sayı olmalı"));
        rules.push( new ValidationRule(employee.type, ValidationTypes.matchesString("employee"), "Çalışan tip verisi hatalı") );

        return this.validator.validate(rules);
    }
}