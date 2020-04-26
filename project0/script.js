const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const todoListArr = [];
let todo = "New Todo";

function newTodo() {
    const listItemHtml = `<li class=${classNames.TODO_ITEM} ><input type="checkbox" class=${classNames.TODO_CHECKBOX}> ${todo}<button class=${classNames.TODO_DELETE}>Delete</button</li>`;
    todoListArr.push(todo);
    list.innerHTML += listItemHtml;
    for (let i = 0; i < todoListArr.length; i++) {
        itemCountSpan.innerText = i + 1;
    }
}
const listItem = document.querySelectorAll('.todo-checkbox');
list.addEventListener('click', e => {
    e.preventDefault();
    let checkedItem = e.target;
    checkedItem.classList.add(classNames.TODO_CHECKBOX);
    todoListArr.pop(1);
    for (let x = 0; x < todoListArr.length; x++) {
        uncheckedCountSpan.innerText = x + 1;
    }
})