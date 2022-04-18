function analyzeArray(array) {
    let total = 0;
    array.forEach(n => total += n); 
       return {
        average: total / array.length,
        min: Math.min.apply(Math, array),
        max: Math.max.apply(Math, array),
        length: array.length 
    }
}

module.exports = analyzeArray;
