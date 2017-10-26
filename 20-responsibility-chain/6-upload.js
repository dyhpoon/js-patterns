Function.prototype.after = function(fn) {
    var self = this;
    return function() {
        var ret = self.apply(this, arguments)
        if (ret === 'nextSuccessor') {
            return fn.apply(this, arguments)
        }
        return ret
    }
}

var getActiveUploadObj = function() {
    try {
        return new ActiveXObject('TXFTNActiveX.FNTUpload')
    } catch (e) {
        return 'nextSuccessor'
    }
}

var getFlashUploadObj = function() {
    if (supportFlash()) {
        var str = '<object type="application/x-shockwave-flash"></object>'
        return $(str).appendTo($('body'))
    }
    return 'nextSuccessor'
}

var getFormUploadObj = function() {
    return $('<form><input name="file" type="file"/></form>').appendTo($('body'))
}

var getUploadObj = getActiveUploadObj.after(getFlashUploadObj).after(getFormUploadObj)

console.log(getUploadObj())
