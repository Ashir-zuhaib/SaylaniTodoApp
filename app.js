
var list = document.getElementById("list")

function addtask(){
    var task_item = document.getElementById("task-item");

    //create li tag with text node
    var li = document.createElement('li');
    var task = document.createTextNode(task_item.value);
    li.appendChild(task);

    //create delete button
    var delBtn = document.createElement('button')
    var deltask = document.createTextNode('DELETE')
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deleteTask(this)")
    delBtn.appendChild(deltask)

    //create edit button

    var editBtn = document.createElement("button")
    var edittask = document.createTextNode("EDIT")
    editBtn.appendChild(edittask)
    editBtn.setAttribute("onclick","editTask(this)")
    
    li.appendChild(delBtn)

    li.appendChild(editBtn)

    list.appendChild(li);
    task_item.value= "";
    // console.log(li);
}
function deleteTask(e){
    e.parentNode.remove()
}
function deleteAll(){
    list.innerHTML = ""
}
function editTask(e){
    e.parentNode.childNodes
    var editedTask = e.parentNode.firstChild.nodeValue;
    var editValue = prompt('enter edit value',editedTask)
    e.parentNode.firstChild.nodeValue = editValue
}

