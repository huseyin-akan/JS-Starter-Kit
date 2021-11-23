export class ValidationTypes{
    static required(){ return 0} 
    static isNumber(){ return 1} 
    static isAge(){ return 2} 
    static matchesString(stringToMatch){ return stringToMatch}
}