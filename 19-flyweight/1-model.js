var Model = function(sex) {
    this.sex = sex
}

Model.prototype.takePhoto = function() {
    console.log('sex: ' + this.sex + ' underwear: ' + this.underwear)
}

var maleModel = new Model('male')
, femaleModel = new Model('female')

// create one maleModel only
for (var i = 0; i < 50; i++) {
    // var model = new Model('male') // bad
    maleModel.underwear = 'underwear' + i
    maleModel.takePhoto()
}

// create one femaleModel only
for (var j = 0; i < 50; j++) {
    // var model = new Model('female') // bad
    femaleModel.underwear = 'underwear' + j
    femaleModel.takePhoto()
}
