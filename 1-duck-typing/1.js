var renderMap = function (map) {
    if (map.show instanceof Function) {
        map.show();
    }
}

var baiduMap = {
    show: function() {
        console.log('baidu map rendering')
    }
}

var googleMap = {
    show: function() {
        console.log('google map rendering')
    }
}

var sosoMap = {
    show: function() {
        console.log('soso map rendering')
    }
}

renderMap(baiduMap)
renderMap(googleMap)
renderMap(sosoMap)