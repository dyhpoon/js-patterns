var mult = function() {
    var cache = {};
    var calculate = function() {
        var a = 1;
        for (var i = 0, l = arguments.length; i < l; i++) {
            a = a * arguments[i];
        }
        return a;
    }

    return (function() {
        var args = Array.prototype.join.call(arguments, ',');
        if (cache[args]) {
            return cache[args];
        }
        return cache[args] = calculate.apply(null, arguments);
    }).apply(null, arguments)
}

console.log(mult(1, 2, 3));
console.log(mult(1, 2, 3));
