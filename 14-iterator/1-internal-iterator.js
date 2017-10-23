var each = function(ary, callback) {
    for (var i = 0, l = ary.length; i < l; i++) {
        callback(ary[i], i)
    }
}

var compare = function(ary1, ary2) {
    if (ary1.length !== ary2.length) {
        throw new Error('ary1 & ary2 are not the same')
    }
    each (ary1, function(i, n) {
        if (n !== ary2 [i]) {
            throw new Error('ary1 & ary2 not the same')
        }
    })

    console.log('ary1 and ary2 are same')
}

compare([1, 2, 3], [1, 2, 4])
