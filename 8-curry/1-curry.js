var currying = function(fn) {
    var args = [];
    return function() {
        if (arguments.length == 0) {
            return fn.apply(null, args);
        } else {
            Array.prototype.push.call(args, Array.prototype.slice.call(arguments));
        }
    }
}

var cost = (function() {
    var money = 0;
    return function() {
        for (var i = 0, l = arguments.length; i < l; i++) {
            money += parseInt(arguments[i]);
        }
        return money;
    }
})()

cost = currying(cost);

cost(100);
cost(200);
cost(300);
console.log(cost());
