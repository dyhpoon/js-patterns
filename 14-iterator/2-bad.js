var getUploadObj = function() {
    try {
        return new ActiveObject('TXFTActiveX.FTNUpload'); // ie upload plugin
    } catch (e) {
        if (supportFlash()) {
            var str = '<object type="application/x-shockwave-flash"></object>' //
            return $(str).appendTo($('body'));
        } else {
            var str = '<input name="file" type="file">'; // form upload
            return $(str).appendTo($('body'));
        }
    }
}
