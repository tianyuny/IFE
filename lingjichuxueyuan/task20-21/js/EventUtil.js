var EventUtil = {
    addHandler: function (ele, type, handler) {
        ele.addEventListener ?
            ele.addEventListener(type, handler, false) :
            ele.attachEvent ?
                ele.attachEvent('on' + type, handler) :
                ele['on' + type] = handler;
    },
    getE: function (e) {
        return e || window.event;
    },
    getTarget: function (e) {
        return e.target || e.srcElement;
    },
    preventDefault: function (e) {
        e.preventDefault ?
            e.preventDefault() :
            e.returnValue = false;
    },
    stopPropagation: function (e) {
        e.stopPropagation ?
            e.stopPropagation() :
            e.cancelBubble = true;
    },
    removeHandler: function (ele, type, handler) {
        ele.removeEventListener ?
            ele.removeEventListener(type, handler) :
            ele.detachEvent ?
                ele.detachEvent('on' + type, handler) :
                ele['on' + type] = null;
    }
};