function Player(name, teamColor) {
    this.partners = []
    this.enemies = []
    this.state = 'live'
    this.name = name
    this.teamColor = teamColor
}

Player.prototype.win = function() {
    console.log(this.name + " won ")
}

Player.prototype.lose = function() {
    console.log(this.name + " lose ")
}

Player.prototype.die = function() {
    var all_dead = true
    this.state = 'dead'
    for (var i= 0, partner; partner = this.partners[i++];) {
        if (partner.state !== 'dead') {
            all_dead = false
            break
        }
    }

    if (all_dead) {
        this.lose()
        for (var i = 0, partner; partner = this.partners[i++];) {
            partner.lose()
        }
        for (var i = 0, enemy; enemy = this.enemies[i++];) {
            enemy.win()
        }
    }
}

var players = []

var playerFactory = function(name, teamColor) {
    var newPlayer = new Player(name, teamColor)

    for (var i = 0, player; player = players[i++];) {
        if (player.teamColor === newPlayer.teamColor) {
            // each player has other players' info, this is bad
            player.partners.push(newPlayer)
            newPlayer.partners.push(player);
        } else {
            player.enemies.push(newPlayer);
            newPlayer.enemies.push(player);
        }
    }

    players.push(newPlayer)

    return newPlayer
}

var player1 = playerFactory('player 1', 'red')
var player2 = playerFactory('player 2', 'red')
var player3 = playerFactory('player 3', 'red')
var player4 = playerFactory('player 4', 'red')

var player5 = playerFactory('player 5', 'blue')
var player6 = playerFactory('player 6', 'blue')
var player7 = playerFactory('player 7', 'blue')
var player8 = playerFactory('player 8', 'blue')

player1.die()
player2.die()
player4.die()
player3.die()
