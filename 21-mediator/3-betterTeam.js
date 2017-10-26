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
        players[teamColor] = players[teamColor] || []
        players[teamColor].push(player)
    }

    operations.removePlayer = function(player) {
        var teamColor = player.teamColor,
        teamPlayers = players[teamColor] || []

        for (var i = teamPlayers.length - 1; i >= 0; i--) {
            if (teamPlayers[i] === player) {
                teamPlayers.splice(i, 1)
            }
        }
    }

    operations.changeTeam = function(player, newTeamColor) {
        operations.removePlayer(player)
        player.teamColor = newTeamColor
        operations.addPlayer(player)
    }

    operations.playerDead = function(player) {
        var teamColor = player.teamColor
        , teamPlayers = players[teamColor]

        var all_dead = true

        for (var i = 0, player; player = teamPlayers[i++];) {
            if (player.state !== 'dead') {
                all_dead = false
                break
            }
        }

        if (all_dead === true) {
            for (var i = 0, player; player = teamPlayers[i++];) {
                player.lose()
            }

            for (var color in players) {
                if (color !== teamColor) {
                    var teamPlayers = players[color]
                    for (var i = 0, player; player = teamPlayers[i++];) {
                        player.win()
                    }
                }
            }
        }
    }

    var ReceiveMessage = function() {
        var message = Array.prototype.shift.call(arguments)
        operations[message].apply(this, arguments)
    }

    return {
        ReceiveMessage
    }
}()

var player1 = playerFactory('player1', 'red')
, player2 = playerFactory('player2', 'red')
, player3 = playerFactory('player3', 'red')
, player4 = playerFactory('player4', 'red')

var player5 = playerFactory('player5', 'blue')
, player6 = playerFactory('player6', 'blue')
, player7 = playerFactory('player7', 'blue')
, player8 = playerFactory('player8', 'blue')


player1.die()
player2.die()
player4.die()
player3.die()
