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

var Chain = function(fn) {
    this.fn = fn;
    this.successor = null
}

Chain.prototype.setNextSuccessor = function(successor) {
    return this.successor = successor
}

Chain.prototype.passRequest = function() {
    var ret = this.fn.apply(this, arguments);
    if (ret === 'nextSuccessor') {
        return this.successor && this.successor.passRequest.apply(this.successor, arguments);
    }
    return ret
}


var chainOrder500 = new Chain(order500)
var chainOrder200 = new Chain(order200)
var chainOrderNormal = new Chain(orderNormal)

chainOrder500.setNextSuccessor(chainOrder200)
chainOrder200.setNextSuccessor(chainOrderNormal)

chainOrder500.passRequest(1, true, 500)
chainOrder500.passRequest(1, false, 500)
chainOrder500.passRequest(2, true, 500)
chainOrder500.passRequest(3, false, 500)
chainOrder500.passRequest(1, false, 0)
