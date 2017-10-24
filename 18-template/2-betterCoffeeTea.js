var Beverage = function() {}

Beverage.prototype.boilWater = function() {
    console.log('boil water')
}

Beverage.prototype.brew = function() {
    // empty, subclass will implement this
}

Beverage.prototype.pourInCup = function() {
    // empty, subclass will implement this
}

Beverage.prototype.addCondiments = function() {
    // empty, subclass will implement this
}

Beverage.prototype.init = function() {
    this.boilWater()
    this.brew()
    this.pourInCup()
    this.addCondiments()
}

// subclass coffee
var Coffee = function() {}
Coffee.prototype = new Beverage() //cool

Coffee.prototype.brew = function() {
    console.log('brew coffee')
}

Coffee.prototype.pourInCup = function() {
    console.log('pour coffee in cup')
}

Coffee.prototype.addCondiments = function() {
    console.log('add sugar and milk')
}

var Coffee = new Coffee()
Coffee.init()

// subclass tea
var Tea = function() {}
Tea.prototype = new Beverage()

Tea.prototype.brew = function() {
    console.log('add tea')
}

Tea.prototype.pourInCup = function() {
    console.log('pour tea in cup')
}

Tea.prototype.addCondiments = function() {
    console.log('add lemon')
}

var tea = new Tea()
tea.init()
