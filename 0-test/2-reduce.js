Array.prototype.myReduce = function(fn, input) {
    var accum;
    for (var i = 0, l = this.length; i < l; i++) {
        if (accum) {
            accum = fn(accum, this[i]);
        } else {
            accum = fn(input, this[i]);
        }
    }
    return accum;
}

const result = [1, 2, 3].myReduce((curr, value) => {
    return curr + value
}, 0)
console.log(result);

const result2 = ['my', 'name', 'is', 'darren'].myReduce((curr, value) => {
    return `${curr} ${value}`
}, '');
console.log(result2)
