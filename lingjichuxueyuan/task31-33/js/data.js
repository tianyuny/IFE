function getData(data, regionBox, productBox) {
    let result = [];
    function isCheck(it, count) {
        for (let i = 0, len = count.length; i < len; i++) {
            if (count[i] === it) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0, len = data.length; i < len; i++) {
        if (isCheck(data[i].region, regionBox.count) && isCheck(data[i].product, productBox.count)) {
            result.push(sourceData[i]);
        }
    }
    return result;
}