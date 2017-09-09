var myObject = (function () {
    var __name = 'sven';
    return {
        getName: function () {
            return __name;
        }
    }
})();

console.log(myObject.getName()) // sven
console.log(myObject.__name); // undefined