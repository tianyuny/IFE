function showNewTable(data) {
    let restData = [];
    let thArr = ['商品', '地区'];
    let property = ['product', 'region'];
    if (regionBox.count.length === 1 && productBox.count.length > 1) {
        thArr.reverse();
        property.reverse();
        restData.push(data);
    } else {
        let obj = {};
        let index = 0;
        for (let i = 0, len = data.length; i < len; i++) {
            let product = data[i].product;
            if (obj[product] === undefined) {
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
            html += '<tr>' + (j === 0 ? '<td rowspan="' + len +'">' + restData[i][0][property[0]] + '</td>' : '') +
                '<td>' + restData[i][j][property[1]] +'</td>';
            for (let k = 0; k < 12; k++) {
                html += '<td>' + restData[i][j].sale[k] + '</td>';
            }
            html += '</tr>';
        }
    }
    html += '</tbody></table>';
    tableWrapper.innerHTML = html;
}