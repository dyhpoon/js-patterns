var Singleton = function(html) {
    this.html = html
    this.init()
}

Singleton.prototype.init = function() {
    // init stuff
}

var ProxySingletonCreate = (function() {
    var instance;

    return function(html) {
        if (!instance) {
            instance = new Singleton(html)
        }
        return instance
    }
})()

var a = new ProxySingletonCreate('sven1')
var b = new ProxySingletonCreate('sven2')

console.log(a == b)
