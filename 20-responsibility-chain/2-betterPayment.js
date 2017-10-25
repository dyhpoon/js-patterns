var order500 = function(orderType, pay, stock) {
    if (orderType === 1 && pay === true) {
        console.log('500 deposit, 100 coupon')
    } else {
        order200(orderType, pay, stock)    
    }
}

var order200 = function(orderType, pay, stock) {
    if (orderType === 2 && pay === true) {
        console.log('200 deposit, 50 coupon')
    } else {
        orderNormal(orderType, pay, stock)
    }
}

var orderNormal = function(orderType, pay, stock) {
    if (stock > 0) {
        console.log('no discount')
    } else {
        console.log('out of stock')
    }
}

order500(1, true, 500)
order500(1, false, 500)
order500(2, true, 500)
order500(3, false, 500)
order500(1, false, 0)
