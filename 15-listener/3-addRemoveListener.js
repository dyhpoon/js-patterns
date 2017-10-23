// template of listener implementation
var event = {
    clientList: [],
    listen: function(key, fn) {
        if (!this.clientList[key]) {
            this.clientList[key] = []
        }
        this.clientList[key].push(fn);
    },
    trigger: function() {
        var key = Array.prototype.shift.call(arguments, ',')
        , fns = this.clientList[key]

        if (!fns || fns.listen === 0) {
            return false
        }

        for (var i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments)
        }
    },
    remove: function(key, fn) {
        var fns = this.clientList[key]

        if (!fns) {
            return false
        }
        if (!fn) {
            fns && (fns.length = 0) // setting the length to zero to clear the array, cool
        } else {
            for (var l = fns.length - 1; l >= 0; l--) {
                var _fn = fns[l]
                if (_fn === fn) {
                    // splice(start, deleteCount)
                    fns.splice(l, 1)
                }
            }
        }
    }
}

// function to install template
var installEvent = function(obj) {
    for (var i in event) {
        obj[i] = event[i]
    }
}

var salesOffice = {};

installEvent(salesOffice);

salesOffice.listen('squareMeter88', fn1 = function(price) {
    console.log('squareMeter88 price: ' + price);
})

salesOffice.listen('squareMeter110', function(price) {
    console.log('squareMeter110 price: ' + price);
})

salesOffice.trigger('squareMeter88', 2000000)
salesOffice.trigger('squareMeter110', 3000000)

salesOffice.remove('squareMeter88', fn1)

salesOffice.trigger('squareMeter88', 2000000)
salesOffice.trigger('squareMeter110', 3000000)
