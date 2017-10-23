var mult = function() {
    var a = 1;
    for (var i = 0; i < arguments.length; i++) {
        a *= arguments[i]
    }
    return a
}

var plus = function() {
    var a = 0;
    for (var i = 0, l = arguments.length; i < l; i++) {
        a += arguments[i]
    }
    return a
}

var createProxyFactory = function(fn) {
    var cache = {}
    return () => {
        var args = Array.prototype.join.call(arguments, ',')
        if (args in cache) {
            console.log('cached');
            return cache[args]
        } else {
            return cache[args] = fn.apply(this, arguments)
        }
    }
}

var proxyMult = createProxyFactory(mult),
proxyPlus = createProxyFactory(plus);

console.log(proxyMult(1, 2, 3, 4))
console.log(proxyMult(1, 2, 3, 4))
console.log(proxyPlus(1, 2, 3, 4))
console.log(proxyPlus(1, 2, 3, 4))
