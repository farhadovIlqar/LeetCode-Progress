var romanToInt = function (s) {
    
    const roman = {
        "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
    }
    
    let result = roman[s[s.length-1]];

    for (let i = s.length - 1; i > 0; i--) {
        if (roman[s[i]] > roman[s[i - 1]]) {
            result = result - roman[s[i - 1]];
        } 
        else {
            result = result + roman[s[i - 1]];
        }
    }
    return result;
};