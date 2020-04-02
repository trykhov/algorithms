// given a string with a hash, return a new string with the characters that are in the hash repeated
// example: repeatChar("hello", {'e': 4, 'o': 2}) ==> heeeelloo

function repeatChar(str, obj) {
    let strArr = str.split("");
    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        if(obj[char] != null) { // IMPORTANT: there's a difference between !== and != 
        // obj[char] !== null ==> always true, obj[char] != true / false
            strArr[i] = strArr[i].repeat(obj[char]);
        }
    }
    return strArr.join("");
}

console.log(repeatChar("hello", {'e': 4, 'o': 2}));