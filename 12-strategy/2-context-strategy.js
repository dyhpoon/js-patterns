// strategies
var performanceS = function() {}
performanceS.prototype.calculate = function(salary) {
    return salary * 4
}

var performanceA = function() {}
performanceA.prototype.calculate = function(salary) {
    return salary * 3
}

var performanceB = function() {}
performanceB.prototype.calculate = function(salary) {
    return salary * 2
}

// context

var Bonus = function() {
    this.salary = null
    this.strategy = null
}

Bonus.prototype.setSalary = function(salary) {
    this.salary = salary
    return this
}

Bonus.prototype.setStrategy = function(strategy) {
    this.strategy = strategy
    return this
}

Bonus.prototype.getBonus = function() {
    return this.strategy.calculate(this.salary)
}

// example

var bonus = new Bonus()
    .setSalary(1000)
    .setStrategy(new performanceS())
    .getBonus()

console.log(bonus)
