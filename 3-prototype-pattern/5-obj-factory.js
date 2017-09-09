function Person (name) {
    this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
}

var objectFactory = function () {
    var obj = new Object(), // clone an empty object
        Constructor = [].shift.call(arguments); // get constructor. Note that argument is not an Array type, so shift is not implemented in argument object

    obj.__proto__ = Constructor.prototype;
    var ret = Constructor.apply(obj, arguments);
    return typeof ret === 'object' ? ret: obj
}

var a = objectFactory(Person, 'sven');
console.log(a.getName());
console.log(Object.getPrototypeOf(a) === Person.prototype);
