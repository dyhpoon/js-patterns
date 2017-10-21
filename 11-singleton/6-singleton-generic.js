var getSingle = function(fn) {
    var result;
    return function() {
        return result || (result = fn.apply(this, arguments))
    }
}

function Person(name) {
    this.name = name
}

Person.prototype.getName = function() {
    return this.name;
}

function createPerson(name) {
    return new Person(name)
}

var singletonPerson = getSingle(createPerson);

var a = singletonPerson('abc')
var b = singletonPerson('def')

console.log(a === b);
console.log(a.getName())
console.log(b.getName())
