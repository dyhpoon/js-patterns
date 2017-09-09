Function.prototype.mybind = function () {
    var self = this;
    var context = [].shift.call(arguments);
    var args = [].slice.call(arguments);
    return function () {
        return self.apply(context, [].concat.call(args, [].slice.call(arguments)));
    }
}

var obj = {
    name: 'darren'
}

var myFunc = function(a, b, c) {
    return `${this.name}, a: ${a}, b: ${b}, c: ${c}`
}

var bindFunc = myFunc.bind(obj, '1', 'a', 5);
console.log(bindFunc());
