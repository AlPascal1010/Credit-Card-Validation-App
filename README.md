CREDIT CARD VALIDATION APP

i created the app using both "functions" and "OOPs", just to strengthen my knowledge of "OOPs", te logic is basically the same thing,

first o all the format o credit card numbers are thus:
"5555 5555 5555 5555"
or
"5555-555-5555-5555"

so for this to be an int variable type in javascript, we need to get rid of the spaces or dashes using regex
i used the ".replace()" function, like this

 cardNumber.replace(/[ -]/g, "");, here the code searches or dashes or spaces in the cardNumber variable and replace them with nothing ""

 the [ -], this tells regex to check for a space or an hyphen, and the g , stands for global, which means it should search all occurrences of these symbols in the string

 after this has happened it is assigned to cardNumber, thus making card number a string, now it can be tested using the if statement


using the if statement we first use the condition "/^\d{13,16}$/.test(cardNumber)"

the \^\d - indicates that the regex must start with a digit,

the {13,16}$/ indicates that the regex must contain 13 to 16 digits

if this condition is true then it test the first digits in the string, for visa card always starts with a "4" and master card usually starts with "51 to 55", if this is true then it returns "visa" if "/^4/.test(cardNumber)" is true, that is those it start with a 4, and return "MasterCard" if "/^5[1-5]/.test(cardNumber)" is true, if these conditions are false it returns unknown, and if its not  card that is it doesn't meet the initial condition, then it returns "Invalid"
