!function() {
    var d = document.getElementById('dec-number'),
        bit = document.getElementById('bin-bit'),
        btn = document.getElementById('trans-btn'),
        result = document.getElementById('result-2');
    btn.addEventListener('click', function() {
        var dNum = d.value,
            size = bit.value;
        if(dNum == '') return;
        if(isNaN(parseFloat(dNum)) // 输入e非法
            || dNum < 0 || dNum != Math.floor(dNum)) {
            alert('请输入非负整数');
        }else {
            var num, value = '';
            do{
                value = dNum % 2 + value;
                dNum = Math.floor(dNum / 2);
            }while(dNum);
            if(size !== '') {
                var len = size - value.length;
                for(var i = 0; i < len; i++) {
                    value = '0' + value;
                }
                if(len < 0) {
                    console.log('数字大于位宽限制');
                }
            }
            result.textContent = '运算结果：' + value;
        }
    });
}();
