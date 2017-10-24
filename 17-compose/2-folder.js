var Folder = function(name) {
    this.name = name
    this.files = []
}

Folder.prototype.add = function(file) {
    this.files.push(file)
}

Folder.prototype.scan = function() {
    console.log('scanning folder: ' + this.name)
    for (var i = 0, files = this.files; file = files[i++];) {
        file.scan()
    }
}

var File = function(name) {
    this.name = name
}

File.prototype.add = function() {
    throw new Error('cannot add more file')
}

File.prototype.scan = function() {
    console.log('scanning file: ' + this.name)
}

var folder = new Folder('some file')
var folder1 = new Folder('javascript')
var folder2 = new Folder('jquery')

var file1 = new File('javascript design pattern')
var file2 = new File('excel in jquery')
var file3 = new File('rearchitecture pattern')

folder1.add(file1)
folder2.add(file2)

folder.add(folder1)
folder.add(folder2)
folder.add(file3)

var folder3 = new Folder('nodejs')
var file4 = new File('learning nodejs beginner to expert')
folder3.add(file4)

var file5 = new File('beauty of javascript and practices')
folder.add(folder3)
folder.add(file5)

folder.scan();