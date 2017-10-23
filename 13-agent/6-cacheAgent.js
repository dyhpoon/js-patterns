var mult = function() {
    console.log('begin calculating')
    var a = 1;
    for (var i = 0, l = arguments.length; i < l; i++) {
        a = a * arguments[i];
    }
    return a
}

mult(2, 3);
mult(2, 3, 4);

var proxyMult = function() {
    var cache = {}
    return function() {
        var args = Array.prototype.join.call(arguments, ',');
        if (args in cache) {
            console.log('cached');
            return cache[args]
        }
        else {
            return cache[args] = mult.apply(this, arguments)
        }
    }
}()

proxyMult(1, 2, 3, 4)
proxyMult(1, 2, 3, 4)
