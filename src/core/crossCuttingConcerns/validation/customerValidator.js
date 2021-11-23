import { ValidationTypes } from "./validationTypes.js"
import { ValidationRule } from "./validationRule.js"

export class CustomerValidator{

    constructor(validator){
        this.validator = validator;
    }

    validate(customer){
        
        let rules = [];
     
        rules.push( new ValidationRule(customer.id, ValidationTypes.required(), "Çalışan id kısmı boş geçilemez"));        
        rules.push( new ValidationRule(customer.firstName, ValidationTypes.required(), "Çalışan ilk adı kısmı boş geçilemez"));
        rules.push( new ValidationRule(customer.lastName, ValidationTypes.required(), "Çalışan soyadı kısmı boş geçilemez"));
        rules.push( new ValidationRule(customer.age, ValidationTypes.required(), "Çalışan yaşı kısmı boş geçilemez"));        
        rules.push( new ValidationRule(customer.city, ValidationTypes.required(), "Çalışan şehri kısmı boş geçilemez"));
        rules.push( new ValidationRule(customer.age, ValidationTypes.isAge(), "Çalışan yaş verisi hatalı"));
        rules.push( new ValidationRule(customer.id, ValidationTypes.isNumber(), "Çalışan id verisi tam sayı olmalı"));
        rules.push( new ValidationRule(customer.type, ValidationTypes.matchesString("customer"), "Çalışan tip verisi hatalı") );
        
        return this.validator.validate(rules);
    }
}