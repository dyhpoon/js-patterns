var flatten = function(input) {
    return input.reduce((arr, value) => {
        if (Array.isArray(value)) {
            return arr.concat(flatten(value));
        } else {
            return arr.concat(value);
        }
    }, []);
}

var flatten2 = function(input) {
    var result = [];
    var _flat = function(arr) {
        arr.forEach(function(value) {
            if (Array.isArray(value)) {
                return _flat(value);
            } else {
                result.push(value)
            }
        })
    }

    _flat(input)
    return result;
}

console.log(flatten([1, [2], [3, [[4]]]]))
console.log(flatten2([1, [2], [3, [[4]]]]))
