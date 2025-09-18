const addNew = document.getElementById('add');
let inputIcon = document.querySelector('.input-icon');
let errorMessage;

addNew.addEventListener('click', () => {
    let newTodo = document.querySelector('.text-box').value.trim(); // We used .value instead of .textContent because we are dealing with an input, .trim() job is to get rid of any spaces at first/end of the text.
    const list = document.querySelector('.list');

    if(newTodo !== "" && newTodo.length >= 5 && isNaN(newTodo.charAt(0))) {
        const todoItem = `
            <div class="todo-item">
                    <p class="list-task">${newTodo}</p>
                    <div class="checkers">
                        <input class="list-checkbox" type="checkbox">
                        <i class='bx bxs-pencil list-icon-pen'></i>
                        <i class='bx bxs-trash-alt list-icon-trash'></i>
                    </div>
                </div>
        `

        list.insertAdjacentHTML("beforeend", todoItem); // This basically adds HTML as a doen text where I don't have to delete the content, basically easier than doing "createElement + appendChild", "beforeend" represents the position, there are other values like "afterend, beforebegin..etc"
        document.querySelector('.text-box').value = "";
    } else if(newTodo === "") {
        errorMessage = `
            <p class="error-message">Task cannot be empty</p>
        `;

        inputIcon.insertAdjacentHTML('afterend', errorMessage);
    } else if(newTodo.length < 5) {
        errorMessage = `
            <p class="error-message">Task must be at least 5 characters long</p>
        `;

        inputIcon.insertAdjacentHTML('afterend', errorMessage);
    } else if(!isNaN(newTodo.charAt(0))) {
        errorMessage = `
            <p class="error-message">Task cannot start with a number</p>
        `;

        inputIcon.insertAdjacentHTML('afterend', errorMessage);
    }

});
