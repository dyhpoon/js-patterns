var Event = (function() {
    var clientList = {}, listen, trigger, remove;

    listen = function(key, fn) {
        if (!clientList[key]) {
            clientList[key] = []
        }
        clientList[key].push(fn)
    },

    trigger = function() {
        var key = Array.prototype.shift.call(arguments)
        , fns = clientList[key]

        if (!fns || fns.length == 0) {
            return false;
        } else {
            for (var i = 0, fn; fn = fns[i++];) {
                fn.apply(this, arguments)
            }
        }
    },

    remove = function(key, fn) {
        var fns = clientList[key]

        if (!fns) {
            return false
        }

        if (!fn) {
            fns && (fns.length = 0)
        } else {
            for (var l = fns.length - 1; l >= 0; l--) {
                var _fn = fns[l]
                if (_fn === fn) {
                    fns.slice(l, 1)
                }
            }
        }
    }

    return {
        listen,
        trigger,
        remove,
    }
})()

Event.listen('squareMeter88', function(price) {
    console.log('price: ' + price)
})

Event.trigger('squareMeter88', 2000000)
