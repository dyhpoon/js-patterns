var salesOffices = {}

salesOffices.clientList = []

salesOffices.listen = function(key, fn) {
    if (!this.clientList[key]) {
        this.clientList[key] = []
    }
    this.clientList[key].push(fn);
}

salesOffices.trigger = function() {
    var key = Array.prototype.shift.call(arguments)
    , fns = this.clientList[key];

    if (!fns || fns.listen === 0) {
        return false
    } else {
        for (var i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments)
        }
    }
}

salesOffices.listen('squareMeter88', function(price, squareMeter) {
    console.log('ming-price: ' + price)
    console.log('ming-squareMeter: ' + squareMeter)
})

salesOffices.listen('squareMeter110', function(price, squareMeter) {
    console.log('hong-price: ' + price)
    console.log('hong-squareMeter: ' + squareMeter)
})

salesOffices.trigger('squareMeter110', 200000, 88)
salesOffices.trigger('squareMeter110', 300000, 110)
