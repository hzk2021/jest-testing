const capitalize = string => {
    return string[0].toUpperCase() + string.substring(1);
}

const reverseString = string => {
    return string.split("").reverse().join("");
}

const calculator = {
    add: (a, b) => {
        return a + b;
    },
    subtract: (a, b) => {
        return a - b;
    },
    divide: (a, b) => {
        return a / b;
    },
    multiply: (a, b) => {
        return a * b;
    }
}

const caesarCipher = (string, key) => {
    let newString = string.toLowerCase();
    let alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

    let result = "";

    for (let i = 0; i < newString.length; i++) {
        if (newString[i] !== " ") {
            let index = alphabets.indexOf(newString[i]);
            result += alphabets[(index + key) % 26];
        } else {
            result += " ";
        }
        
    }

    return result;
}

const analyzeArray = nums => {
    let average = nums.reduce((a, b) => (a += b)) / nums.length;
    let min = Math.min(...nums);
    let max = Math.max(...nums);

    return {
        average,
        min,
        max,
        length: nums.length
    }
}

module.exports =  {capitalize, reverseString, calculator, caesarCipher, analyzeArray};