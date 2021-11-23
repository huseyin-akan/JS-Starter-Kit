import { ResultModel } from "../../../entities/models/resultModel.js";
import { ValidationError } from "./validationError.js";
import { ValidationTool } from "./validationTool.js";
import { ValidationTypes } from "./validationTypes.js";

export class Validator{    

    validate(rules){        
            try {
                for(let rule of rules){
                if(rule.validationType == ValidationTypes.required() ){
                    if( !ValidationTool.isRequired(rule.propertyToValidate) ){
                           throw new ValidationError(rule.validationMessage);
                    }                   
                  }
                  else if(rule.validationType == ValidationTypes.isAge() ){
                       if(!ValidationTool.isAge(rule.propertyToValidate) ){
                           throw new ValidationError(rule.validationMessage);
                       }
                  }
                  else if(rule.validationType == ValidationTypes.isNumber() ){
                       if(!ValidationTool.isNumber(rule.propertyToValidate) ){
                           throw new ValidationError(rule.validationMessage);
                       }
                  }else if(typeof(rule.validationType) == "string" ){
                      if(rule.propertyToValidate != rule.validationType){
                          throw new ValidationError(rule.validationMessage);
                      }
                  }
                }
            }
            catch(err) {
                return new ResultModel(false, err.message);
            }
                   
        
        return new ResultModel(true, "Object is valid");
    }

    
    
}