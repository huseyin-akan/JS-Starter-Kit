import { Error } from "./error.js";

export class ValidationError extends Error {
    constructor(message, data) {
      super(message); // (1)
    }
  }
  
  