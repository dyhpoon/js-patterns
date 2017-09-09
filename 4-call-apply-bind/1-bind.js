Function.prototype.mybind = function(context) {
    var self = this;
    return function() {
        return self.apply(context)
    }
};

var obj = {
    name: 'darren'
}

var myFunc = function() {
    return this.name;
}

console.log(myFunc.mybind(obj)());
