Function.prototype.before = function (beforeFn) {
    var __self = this; // save the function
    return function() {
        beforeFn.apply(__self, arguments); // execute the function first
        return __self.apply(this, arguments); // execute the original function
    }
}

Function.prototype.after = function (afterFn) {
    var __self = this; // save the function
    return function() {
        const result = __self.apply(this, arguments);
        afterFn.apply(__self, arguments);
        return result;
    }
}

var func = function() {
    console.log(2);
}
.before(() => {
    console.log(1);
})
.after(() => {
    console.log(3);
})

func();
