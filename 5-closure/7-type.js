var isType = function (type) {
    return function(obj) {
        return Object.prototype.toString.call(obj) === '[object ' + type + ']';
    }
}

var isString = isType('String');
var isNumber = isType('Number');
var isArray = isType('Array');

console.log(isString('str'));
console.log(isNumber(3));
console.log(isArray([]));