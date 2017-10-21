var MyApp = {}

MyApp.namespace = {
    a: function() {
        console.log('global a')
    },
    b: function() {
        console.log('global b')
    }
}

console.log(MyApp.namespace);