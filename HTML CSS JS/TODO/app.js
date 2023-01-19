function add_todo(){
    var x=document.getElementById("task").value
    const node=document.createElement('div')
    node.className="list-group-item list-group-item-primary"
    const textnode=document.createTextNode(x)
    node.appendChild(textnode)
}