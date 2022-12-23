var list = document.getElementById("list")

function addTodo() {
    
    // add todo button and get values
    var todo_item = document.getElementById("todo-item");
    var li = document.createElement("li")
    li.setAttribute("class","list_items")
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)
    

    //    edit button and values
    var editbtn = document.createElement("button")
    var editTxt = document.createTextNode("Edit")
    editbtn.appendChild(editTxt)
    editbtn.setAttribute("class","edit_btn")
    editbtn.setAttribute("onclick","editItem(this)")
    li.appendChild(editbtn)
    
    // add delete button and get values  
    var dltbtn = document.createElement("button")
    var dltText = document.createTextNode("Delete")
    dltbtn.setAttribute("class","delete_btn")
    dltbtn.setAttribute("onclick","deleteitem(this)")
    dltbtn.appendChild(dltText)
    li.appendChild(dltbtn)
    
    list.appendChild(li)

    todo_item.value = ""

}

function deleteitem(a) {
    a.parentNode.remove()
}

function deleteall(){
    list.innerHTML = ""
}

function editItem(a){
    var editValue = prompt("Edit your Value",a.parentNode.firstChild.nodeValue)
    a.parentNode.firstChild.nodeValue = editValue
}