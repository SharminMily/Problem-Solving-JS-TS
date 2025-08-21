//Input: "hello" → Output: "olleh"
function reverseString(str){
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"))