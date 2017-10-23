$.ajax('http://xxx.com?login', function(data) {
    login.trigger('loginSucc', data);
})

var header = function() {
    login.listen('loginSucc', function(data) {
        header.setAvatar(data.avatar)
    });
    return {
        setAvatar: function(data) {
            console.log('set avatar on header')
        }
    }
}()

var nav = function() {
    login.listen('loginSucc', function(data) {
        nav.setAvatar(data.avatar);
    });
    return {
        setAvatar: function(data) {
            console.log('set avatar on nav bar')
        }
    }
}()

var address = function() {
    login.listen('loginSucc', function(data) {
        address.refresh()
    })
    return {
        refresh: function() {
            console.log('refresh address')
        }
    }
}()
