let ul = document.querySelector(".container .list-container ul ")
let li = document.querySelector(".container .list-container ul li")
let add = document.querySelector(".container .input button")
let task = document.querySelector(".container .input input")

add.onclick = function () {
    let value = document.createElement("li")
    let xMark = document.createElement("i")
    let span = document.createElement("span")
    value.innerHTML = task.value
    localStorage.setItem('theTask', value)
    ul.appendChild(value)
    value.appendChild(span)
    span.appendChild(xMark)
    span.classList.add("fa-solid", "fa-circle-xmark")
    
    
    task.value = ""
    
    saveData()
}
ul.addEventListener('click',  function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        saveData()
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        saveData()
    }
    },false)



function saveData() {
    localStorage.setItem('data', ul.innerHTML)
}

function showData() {
    ul.innerHTML = localStorage.getItem('data')
}

showData()