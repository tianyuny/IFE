!function() {
    var btn = document.getElementById('nine');
    btn.addEventListener('click', nine);
    function nine() {
        var tab = document.createElement('table'),
            tbody = document.createElement('tbody');
        tab.style.border = '1px solid #ddd';
        for(var i = 1; i < 10; i++) {
            var tr = document.createElement('tr');
            for(var j = 1; j < 10; j++) {
                var td = document.createElement('td');
                if(j <= i) {
                    td.textContent = j + '×' + i + '=' +  j * i;
                }
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        tab.appendChild(tbody);
        btn.parentNode.appendChild(tab);
        btn.removeEventListener('click', nine);
    }
}();