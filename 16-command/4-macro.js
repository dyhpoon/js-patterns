var closeDoorCommand = function() {
    return {
        execute: function() {
            console.log('close door')
        }
    }
}

var openPcCommand = function() {
    return {
        execute: function() {
            console.log('turn on computer')
        }
    }
}

var openQQCommand = function() {
    return {
        execute: function() {
            console.log('login qq')
        }
    }
}

var MacroCommand = function() {
    return {
        commandList: [],
        add: function(command) {
            this.commandList.push(command)
        },
        execute: function() {
            for (var i = 0, command; command = this.commandList[i++];) {
                command.execute()
            }
        }
    }
}

var macroCommand = MacroCommand();
macroCommand.add(closeDoorCommand)
macroCommand.add(openPcCommand)
macroCommand.add(openQQCommand)
macroCommand.execute()
