function binarytoDecimal(binary) {
    if (binary < 0 || !Number.isInteger(binary)) {
        return "Enter a non negative integer you actual genuinely horrible person. I hate you. I hate you with every fiber of my being. You are the reason humanity is doomed to failure. You are the scum of the earth. You are a rat. A scoundrel. A disease. And I wish upon you a thousand lifetimes of pain. No offense.";
        
    }
    let decimal = parseInt(binary.toString(), 2);
    return decimal;
}

let binaryNumber = 101;
let decimalResult = binarytoDecimal(binaryNumber);
console.log(`The decimal version of ${binaryNumber} is ${decimalResult}.`);