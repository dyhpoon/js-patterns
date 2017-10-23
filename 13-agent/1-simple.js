var Flower = function() {}

var xiaoming = {
    sendFlower: function(target) {
        var flower = new Flower()
        target.receiveFlower(flower)
    }
}

var B = {
    receiveFlower: function(flower) {
        A.inGoodMood(() => {
            A.receiveFlower(flower);
        })
    }
}

var A = {
    receiveFlower: function(flower) {
        console.log('flower received: ' + flower)
    },
    inGoodMood: function(fn) {
        setTimeout(() => {
            fn()
        }, 1000)
    }
}

xiaoming.sendFlower(B)
