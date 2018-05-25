function showNewTable(data, wrapper, regionBox, productBox) {
    let restData = [], // 二维数组，重组数据
        thArr = ['商品', '地区'], // 用于调整格式
        property = ['product', 'region']; // 用于调整格式
    if (regionBox.count.length === 1 && productBox.count.length > 1) {
        thArr.reverse();
        property.reverse();
        restData.push(data);
    } else {

        // 使用空间换时间的方法
        // 把相同商品存入一个数组
        // 再将此数组存入restData
        let obj = {}; // 中介缓存
        let index = 0;
        for (let i = 0, len = data.length; i < len; i++) {
            let product = data[i].product;
            if (obj[product] === undefined) { // 相应二级数组不存在，创造数组
                obj[product] = index++;
                restData.push([]);
            }
            restData[obj[product]].push(data[i]);
        }
    }
    let html = '<table><thead><tr><th>' + thArr[0] + '</th>' +
        '<th>' + thArr[1] +'</th>';
    for (let i = 1; i < 13; i++) {
        html += '<th>' + i + '月</th>';
    }
    html += '</tr></thead><tbody>';

    for (let i = 0, len = restData.length; i < len; i++) {
        for (let j = 0, len = restData[i].length; j < len; j++) {
            // 用问号表达式使同种类首项跨行
            html += '<tr>' + (j === 0 ? '<td rowspan="' + len +'">' + restData[i][0][property[0]] + '</td>' : '') +
                '<td>' + restData[i][j][property[1]] +'</td>';
            for (let k = 0; k < 12; k++) {
                html += '<td>' + restData[i][j].sale[k] + '</td>';
            }
            html += '</tr>';
        }
    }
    html += '</tbody></table>';
    wrapper.innerHTML = html;
}

export { showNewTable };