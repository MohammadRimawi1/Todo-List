const addNew = document.getElementById('add');
let inputIcon = document.querySelector('.input-icon');
let errorMessage;

function showError(message) {
    const oldError = document.querySelector('.error-message');
    if (oldError) oldError.remove();

    const errorMessage = `<p class="error-message">${message}</p>`;
    inputIcon.insertAdjacentHTML('afterend', errorMessage); // This basically adds HTML as a done text where I don't have to delete the content, basically easier than doing "createElement + appendChild", "beforeend" represents the position, there are other values like "afterend, beforebegin..etc"
}

addNew.addEventListener('click', () => {
    let newTodo = document.querySelector('.text-box').value.trim(); // We used .value instead of .textContent because we are dealing with an input, .trim() job is to get rid of any spaces at first/end of the text.
    const list = document.querySelector('.list');

    if (newTodo === "") {
        showError("Task cannot be empty");
    } else if (newTodo.length < 5) {
        showError("Task must be at least 5 characters long");
    } else if (!isNaN(newTodo.charAt(0))) {
        showError("Task cannot start with a number");
    } else {
        const todoItem = `
            <div class="todo-item">
                <p class="list-task">${newTodo}</p>
                <div class="checkers">
                    <input class="list-checkbox" type="checkbox">
                    <i class='bx bxs-pencil list-icon-pen'></i>
                    <i class='bx bxs-trash-alt list-icon-trash'></i>
                </div>
            </div>
        `;

        list.insertAdjacentHTML("beforeend", todoItem);
        document.querySelector('.text-box').value = "";
    }

});
