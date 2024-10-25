function decimalToBinary(decimal) {
    if (decimal < 0 || !Number.isInteger(decimal)) {
        return "Enter a non negative integer. You are a fool. You are a silly little goose. What kind of person would EVER input a negative number? Come on man. Pull yourself together. Don't come to me with your wacky shenanigans. Everyone get a load of Mx. Negative Number's negative number nonsense. Get a load of this doofus. This silly person thinks they're such a quirky little guy by putting in a negative number. Get a grip, man";

    }
    let binary = decimal.toString(2);
    return binary;
}

let decimalNumber = 26;
let binaryResult = decimalToBinary(decimalNumber);
console.log(`The binary of ${decimalNumber} is ${binaryResult}.`);
