var Singleton = (function() {
    var instance;

    var Singleton = function(name) {
        if (instance) {
            return instance
        }
        this.name = name;
        return instance = this;
    }

    Singleton.prototype.getName = function() {
        return this.name;
    }

    return Singleton;
})();

var a = new Singleton('sven1');
var b = new Singleton('sven2');

console.log(a.getName());
console.log(b.getName());
console.log(a === b);
