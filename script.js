const addNew = document.getElementById('add');

addNew.addEventListener('click', () => {
    let newTodo = document.querySelector('.text-box').value; // We used .value instead of .textContent because we are dealing with an input
    const list = document.querySelector('.list');

    list.innerHTML = `
        <p class="list-task">${newTodo}</p>

        <div class="checkers">
            <input class="list-checkbox" type="checkbox">
            <i class='bx bxs-pencil list-icon-pen'></i>
            <i class='bx bxs-trash-alt list-icon-trash'></i>
        </div>
    `

});
