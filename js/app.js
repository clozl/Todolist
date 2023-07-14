document.getElementById('btnAdd').addEventListener('click', addTodo)
//btnAdd접근해서 click이벤트 설정, click하면 addTodo함수 실행
document.getElementById('DeleteSel').addEventListener('click', delSelTodo)
document.getElementById('btnDelLast').addEventListener('click', delLastTodo)
document.getElementById('btnDelAll').addEventListener('click', delAllTodo)

function addTodo() {
    var list = document.getElementById('listBody')
    var myTr = document.createElement('tr')
    var myTd1 = document.createElement('td')
    var myTd2 = document.createElement('td')
    var chekbox = document.createElement('input')
    chekbox.setAttribute('type', 'checkbox')
    chekbox.setAttribute('class', 'btn-chk')
    myTd1.appendChild(chekbox)
    myTr.appendChild(myTd1)
    list.append(myTr)
    alert('추가')
    var addTodo= document.getElementById('input-todo').value
    myTd2.append(addTodo)
    myTr.appendChild(myTd2)
    list.appendChild(myTr)
    document.getElementById('input-todo').value=''
}

function delSelTodo() {
    var selBox= document.getElementsByClassName('btn-chk')
    for(var i=0; i<selBox.length; i++) {
        if(selBox[i].checked) {
            var td=selBox[i].parentElement
            var td2= td.nextSibling
            var tr=td.parentElement           
            tr.remove(td)
            tr.remove(td2)
        } 
    }
    alert('선택 삭제')
}

function delLastTodo() { 
    var list = document.getElementById('listBody')
    var lastTr = list.lastChild
    list.removeChild(lastTr)
    alert('마지막 삭제')
}

function delAllTodo() {
    var list = document.getElementById('listBody')
    var tr = list.children
    list.remove(tr)
    
    var tb=document.getElementsByTagName('table')[0]
    var nList = document.createElement('tbody')
    tb.appendChild(nList)
    nList.setAttribute('id', 'listBody')
    alert('모두 삭제')
}