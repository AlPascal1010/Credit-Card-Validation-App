console.log("---------------------------------");
console.log("Using Functions");
console.log("---------------------------------");

function validateCreditCardNumber(cardNumber) {
    //  Remove any spaces or dashes from the input
     cardNumber = cardNumber.replace(/[ -]/g, "");

    //  Check if the input consists of digits only and is of valid length
    if (/^\d{13,16}$/.test(cardNumber)) {
         // Check if it's a Visa card (starts with 4) or a Mastercard (starts with 51-55)
        if (/^4/.test(cardNumber)) {
            return "Visa";
        } else if (/^5[1-5]/.test(cardNumber)) {
            return "Mastercard";
        } else {
            return "Unknown";
        }
    } else {
        return "Invalid";
    }
}


let cardNumber = "5234 5678 9012 3456";
console.log("This is a " + validateCreditCardNumber(cardNumber) + " card");

let cardNumber1 = "4234 5678 9012 3456";
console.log("This is a " + validateCreditCardNumber(cardNumber1) + " card");


console.log("---------------------------------");
console.log("Using OOP");
console.log("---------------------------------");

class creditCardValidation {
    constructor(cardNumber){
        this.cardNumber = cardNumber
    }

    validation(cardNumber){
        cardNumber = this.cardNumber.replace(/[ -]/g, "");

        //  Check if the input consists of digits only and is of valid length
        if (/^\d{13,16}$/.test(cardNumber)) {
             // Check if it's a Visa card (starts with 4) or a Mastercard (starts with 51-55)
            if (/^4/.test(cardNumber)) {
                return "Visa";
            } else if (/^5[1-5]/.test(cardNumber)) {
                return "Mastercard";
            } else {
                return "Unknown";
            }
        } else {
            return "Invalid";
        }
    }
}

let card = new creditCardValidation("5234 5678 9012 3456")

let card1 = new creditCardValidation( "4234 5678 9012 3456")

console.log("This is a " + card.validation() + " card");
console.log("This is a " + card1.validation() + " card");