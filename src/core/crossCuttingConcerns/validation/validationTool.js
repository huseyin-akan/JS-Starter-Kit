export class ValidationTool{
    static yaziYaz(){
        return "alsana bir ya<zi";
    }
    
    static isRequired(objectPropertyToValidate){

        if (!objectPropertyToValidate) {
            return false;
        }
        return true;
    }

    static isNumber(objectPropertyToValidate){
        if (Number.isNaN(Number.parseInt(+objectPropertyToValidate))) {
            return false;
        }
        return true;
    }

    static isAge(objectPropertyToValidate){        
        if(!ValidationTool.isNumber(objectPropertyToValidate) || objectPropertyToValidate<0 || objectPropertyToValidate>120){
            return false;
        }
        return true;
    }    
}