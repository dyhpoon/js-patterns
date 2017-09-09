function NEW(fn) {
    var obj = {};
    if (fn.prototype !== null) {
        obj.__proto__ = func.prototype
    }
    var ret = fn.apply(obj, Array.prototype.slice(arguments, 1));
    if (typeof ret == 'Object' || (typeof ret == 'Function' && ret !== null)) {
        return obj;
    }
    return obj;
}