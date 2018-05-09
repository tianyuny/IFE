!function() {
    var num1 = document.getElementById('first-number'),
        num2 = document.getElementById('second-number'),
        result = document.getElementById('result');
    document.addEventListener('click', function(e) {
        var target = e.target, value,
            input = [parseFloat(num1.value), parseFloat(num2.value)],
            sym = {'add-btn': '+', 'minus-btn': '-',
                'times-btn': '*', 'divide-btn': '/'}[target.id];
        if(sym !== undefined) {
            if(isNaN(input[0] || isNaN(input[1]))){
                console.log('请输入数字');
                value = '';
            }else if(sym == '/' && input[1] == 0) {
                console.log('除数不能为零');
                value = '';
            }else {
                value = eval(input[0] + sym + input[1]);
            }
            result.innerHTML = '运算结果：' + value;
        }
    });
}();