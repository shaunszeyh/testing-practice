function capitalize(string) {
    string = string.toLowerCase();
    const firstLetter = string.charAt(0).toUpperCase();
    return firstLetter + string.slice(1);
}

module.exports = capitalize;
