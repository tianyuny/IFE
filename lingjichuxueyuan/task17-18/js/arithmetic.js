!function() {
    var num1 = document.getElementById('first-number'),
        num2 = document.getElementById('second-number'),
        result = document.getElementById('result');
    document.addEventListener('click', function(e) {
        var target = e.target,
            input = [parseFloat(num1.value), parseFloat(num2.value)],
            value = {
                'add-btn': input[0] + input[1],
                'minus-btn': input[0] - input[1],
                'times-btn': input[0] * input[1],
                'divide-btn': input[0] / input[1]
            }[target.id];
        if(value !== undefined) {
            for(var i = 0; i < input.length; i++) {
                if(isNaN(input[i])) {
                    console.log('请输入数字');
                    result.innerHTML = '运算结果：'
                    return;
                }
            }
            if(target.id == 'divide-btn' && input[1] == 0) {
                console.log('除数不能为零');
                value = '';
            }
            result.innerHTML = '运算结果：' + value;
        }
    });
}();