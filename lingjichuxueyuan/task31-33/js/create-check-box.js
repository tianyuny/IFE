function createCheckBox(checkBox, checkArr) {
    let html = '<input type="checkbox" checkbox-type="all">全部';
    let len = checkArr.length;
    for (let i = 0; i < len; i++) {
        html += '<input type="checkbox" checkbox-type="single" value="' + checkArr[i].value + '">' + checkArr[i].text;
    }
    checkBox.innerHTML = html;
    let count = checkBox.count = []; // 存储选项数据
    checkBox.addEventListener('click', function(e) {
        let target = e.target;
        if (target.tagName === 'INPUT') {
            if (target.getAttribute('checkbox-type') === 'all') { // 全选
                if (count.length < len) { // 若已选项小于总选项 设置为全选
                    let children = checkBox.children;
                    for (let i = 1, len = children.length; i < len; i++) {
                        children[i].checked = true;
                        count[i - 1] = children[i].value; // 重置选项数据
                    }
                }
                target.checked = true; // 点击全选不可取消
            } else {
                if (target.checked) { // 选中
                    count.push(target.value);
                    if (count.length === len) {
                        checkBox.children[0].checked = true;
                    }

                } else { // 取消选中
                    if (count.length === 1) { // 选中项只剩一个时不可取消
                        target.checked = true;
                    } else {
                        if(count.length === len) { // 之前处在全选状态 取消全选
                            checkBox.children[0].checked = false;
                        }
                        count.splice(count.indexOf(target.value), 1);
                    }
                }
            }
            let data = getData();
            showNewTable(data);
        }
    });
}