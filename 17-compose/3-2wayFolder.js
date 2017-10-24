var Folder = function(name) {
    this.name = name
    this.parent = null
    this.files = []
}

Folder.prototype.add = function(file) {
    file.parent = this
    this.files.push(file)
}

Folder.prototype.scan = function() {
    console.log('scan folder: ' + this.name)
    for (var i = 0, file, files = this.files; file = files[i++];) {
        file.scan()
    }
}

Folder.prototype.remove = function() {
    if (!this.parent) {
        return
    }
    for (var files = this.parent.files, l = files.length - 1; l >= 0; l--) {
        var file = files[l]
        if (file === this) {
            files.splice(l, 1)
        }
    }
}

var File = function(name) {
    this.name = name
    this.parent = null
}

File.prototype.add = function() {
    throw new Error('Unable to add file')
}

File.prototype.scan = function() {
    console.log('scanning file: ' + this.name)
}

File.prototype.remove = function() {
    if (!this.parent) {
        return
    }
    for (var files = this.parent.files, l = files.length - 1; l >= 0; l--) {
        var file = files[l]
        if (file === this) {
            files.splice(l, 1)
        }
    }
}

var folder = new Folder('some files')
var folder1 = new Folder('javscrip')
var file1 = new Folder('nodejs from beginner to expert')

folder1.add(new File('javascript design pattern and practices'))
folder.add(folder1)
folder.add(file1)

folder1.remove()
folder.scan()