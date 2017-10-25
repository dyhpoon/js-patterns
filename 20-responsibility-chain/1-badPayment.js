var order = function(orderType, pay, stock) {
    if (orderType === 1) {
        if (pay === true) {
            console.log('500 deposit, receive 100 coupon')
        } else {
            if (stock > 0) {
                console.log('no discount')
            } else {
                console.log('out of stock')
            }
        }
    }
    else if (orderType === 2) {
        if (pay === true) {
            console.log('200 deposit, receive 50 coupon')
        } else {
            if (stock > 0) {
                console.log('no discount')
            } else {
                console.log('out of stock')
            }
        }
    }
    else if (orderType === 3) {
        if (pay === true) {
            console.log('no discount')
        } else {
            console.log('out of stock')
        }
    }
}

order(1, true, 500);
