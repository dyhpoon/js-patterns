function Player(name, teamColor) {
    this.name = name
    this.teamColor = teamColor
    this.state = 'alive'
}

Player.prototype.win = function() {
    console.log(this.name + ' won')
}

Player.prototype.lose = function() {
    console.log(this.name + ' lose')
}

Player.prototype.die = function() {
    this.state = 'dead'
    playerDirector.ReceiveMessage('playerDead', this)
}

Player.prototype.remove = function() {
    playerDirector.ReceiveMessage('removePlayer', this)
}

Player.prototype.changeTeam = function(color) {
    playerDirector.ReceiveMessage('changeTeam', this, color)
}

var playerFactory = function(name, teamColor) {
    var newPlayer = new Player(name, teamColor)
    playerDirector.ReceiveMessage('addPlayer', newPlayer)
    return newPlayer
}

var playerDirector = function() {
    var players = {}, operations = {}

    operations.addPlayer = function(player) {
        var teamColor = player.teamColor
    }
}()