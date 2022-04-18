function caesarCipher(string, key) {
    let newString = "";
    for (const char of string) {
        let code = char.charCodeAt(0) + key
        if (code > 126) {
            code = code % 127 + 32
        } else if (code < 32) {
            code += 95
        }
        newString += String.fromCharCode(code); 
    }
    return newString
}

module.exports = caesarCipher;
