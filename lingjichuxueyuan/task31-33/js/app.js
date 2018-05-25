!function() {
    let regionBox = document.getElementById('region-radio-wrapper');
    let productBox = document.getElementById('product-radio-wrapper');
    let tableWrapper = document.getElementById('table-wrapper');

    function checkedHandler() {
        let data = getData(sourceData, regionBox, productBox);
        showNewTable(data, tableWrapper, regionBox, productBox);
    }

    createCheckBox(regionBox, [
        {
            value: '华东',
            text: '华东'
        },
        {
            value: '华南',
            text: '华南'
        },
        {
            value: '华北',
            text: '华北'
        }
    ], checkedHandler);
    createCheckBox(productBox, [
        {
            value: '手机',
            text: '手机'
        },
        {
            value: '笔记本',
            text: '笔记本'
        },
        {
            value: '智能音箱',
            text: '智能音箱'
        }
    ], checkedHandler);
}();