Array.prototype.myMap = function(fn) {
    for (i = 0, l = this.length; i < l; i++) {
        this[i] = fn(this[i])
    }
    return this;
}

var result = [1, 2, 3].myMap(value => 2 * value);
console.log(result);
