// Coffee
var Coffee = function() {}

Coffee.prototype.boilWater = function() {
    console.log('boil water')
}

Coffee.prototype.brewCoffeeGriends = function() {
    console.log('brew coffee')
}

Coffee.prototype.pourInCup = function() {
    console.log('pour in cup')
}

Coffee.prototype.addSugarAndMilk = function() {
    console.log('add milk and sugar')
}

Coffee.prototype.init = function() {
    this.boilWater()
    this.brewCoffeeGriends()
    this.pourInCup()
    this.addSugarAndMilk()
}

var coffee = new Coffee()
coffee.init()

// Tea
var Tea = function() {}

Tea.prototype.boildWater = function() {
    console.log('boil water');
}

Tea.prototype.steepTeaBag = function() {
    console.log('steep tea bag');
}

Tea.prototype.pourInCup = function() {
    console.log('pour in cup');
}

Tea.prototype.addLemon = function() {
    console.log('add lemon');
}

Tea.prototype.init = function() {
    this.boildWater()
    this.steepTeaBag()
    this.pourInCup()
    this.addLemon()
}

var tea = new Tea()
tea.init()
