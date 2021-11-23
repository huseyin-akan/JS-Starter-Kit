export class ValidationRule{
    constructor(propertyToValidate, validationType, validationMessage){
        this.propertyToValidate = propertyToValidate;
        this.validationType = validationType;
        this.validationMessage = validationMessage;
    }
}