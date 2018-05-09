!function(){
    var btn = document.getElementById('game-three'),
        result = document.getElementById('game-result');
    btn.addEventListener('click', game);
    function game() {
        var num = [];
        for(var i = 1; i < 101; i++) {
            if(i%3 && i.toString().indexOf('3') === -1) {
                num.push(i);
            }else {
                num.push('PA');
            }
        }
        result.textContent += ' ' + num.join(', ');
        btn.removeEventListener('click', game);
    }
}();