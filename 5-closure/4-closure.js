var Type = {}

for (var i = 0, type; type = ['String', 'Array', 'Number'][i++];) {
    (function (type) {
        Type['is'+type] = function (obj) {
            return Object.prototype.toString.call(obj) === '[object ' + type + ']';
        }
    })(type);
}

console.log(Type.isArray([]));
console.log(Type.isString("str"));

console.log(Object.prototype.toString.call([]));    // array has its own toString method
console.log([].toString());
console.log(Object.prototype.toString.call('str')); // str has its own toString method
console.log('str'.toString());
