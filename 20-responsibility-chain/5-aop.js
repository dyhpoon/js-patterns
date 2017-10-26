var order500 = function(orderType, pay, check) {
    if (orderType === 1 && pay === true) {
        console.log('500 desposit, 100 coupon')
    } else {
        return 'nextSuccessor'
    }
}

var order200 = function(orderType, pay, check) {
    if (orderType === 2 && pay === true) {
        console.log('200 deposit, 50 coupon')
    } else {
        return 'nextSuccessor'
    }
}

var orderNormal = function(orderType, pay, stock) {
    if (stock > 0) {
        console.log('no discount')
    } else {
        console.log('out of stock')
    }
}

Function.prototype.after = function(fn) {
    var self = this;
    return function() {
        var ret = self.apply(this, arguments)
        if (ret === 'nextSuccessor') {
            return fn.apply(this, arguments)
        }
        return ret
    }
}

var order = order500.after(order200).after(orderNormal)

order(1, true, 500)
order(2, true, 500)
order(1, false, 500)
