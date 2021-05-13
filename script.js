// code by ononokierii  

window.onload = function() {
    let datalist = [];
    let todocount = 0;
    let donecount = 0;

    let oIn = document.querySelector('#title');
    let todolistHtml = document.querySelector('.todolist');
    let donelistHtml = document.querySelector('.donelist');
    let todocountHtml = document.querySelector('.todocount');
    let donecountHtml = document.querySelector('.donecount');

    // 添加item
    const addItem = (e) => {
        if (e.keyCode == 13 && oIn.value) {
            datalist.push({
                value: oIn.value,
                id: +new Date(),
                done: false
            })
            oIn.value = '';
        }

        showList();
    }

    // 将item添加到DOM中
    const itemDetail = (data) => {
        let checked = data.done ? 'checked' : '';
        return `
                <li>
                    <input type="checkbox" ${checked} id="${data.id}" class="itemStatus" />
                    <span>${data.value}</span>
                    <a id="${data.id}" class="itemClear">-</a>
                </li>
        `
    };

    // 根据容器重新渲染DOM
    const showList = (e) => {
        todocount = 0;
        donecount = 0;
        let todohtml = '';
        let donehtml = '';

        for (let i = 0; i < datalist.length; i++) {
            if (datalist[i].done == false) {
                todohtml += itemDetail(datalist[i]);
                todocount++;
            } else {
                donehtml += itemDetail(datalist[i]);
                donecount++;
            }
        }

        todolistHtml.innerHTML = todohtml;
        donelistHtml.innerHTML = donehtml;
        todocountHtml.innerHTML = todocount;
        donecountHtml.innerHTML = donecount;
    }

    // 监听input
    oIn.addEventListener('keydown', (e) => {
        addItem(e);
    })


    // 监听checkbox和clear
    todolistHtml.addEventListener('click', (e) => {
        if (e.target.className == 'itemClear') {
            for (let i = 0; i < datalist.length; i++) {
                if (datalist[i].id.toString() === e.target.id) {
                    datalist.splice(i, 1);
                    break;
                }
            }
        }
        if (e.target.className == 'itemStatus') {
            console.log('change')
            for (item of datalist) {
                if (item.id.toString() === e.target.id) {
                    item.done = !item.done;
                    break;
                }
            }
        }
        showList();
    });

    // 监听checkbox和clear
    donelistHtml.addEventListener('click', (e) => {
        if (e.target.className == 'itemClear') {
            for (let i = 0; i < datalist.length; i++) {
                if (datalist[i].id.toString() === e.target.id) {
                    datalist.splice(i, 1);
                    break;
                }
            }
        }
        if (e.target.className == 'itemStatus') {
            for (let item of datalist) {
                if (item.id.toString() === e.target.id) {
                    item.done = !item.done;
                    break;
                }
            }
        }
        showList();
    });

}