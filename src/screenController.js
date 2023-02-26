import TodoController from "./TodoController";

function createNewTaskFrag(taskName, index) {
  const newTask = `
    <div class="todo-item" data-index="${index}">
      <button class="complete">Complete?</button>
      <p class="task-name">${taskName}</p>
    </div>
  `;

  return document.createRange().createContextualFragment(newTask);
}

export default function screenController() {
  const todoController = TodoController();

  // const addTaskBtn = document.querySelector(".add-task");
  // const formContainer = document.querySelector(".form-container");
  const projName = document.querySelector(".project-title");
  const todoContainer = document.querySelector(".todo-container");
  // const taskForm = document.querySelector(".task-form");
  // const submitBtn = document.querySelector(".submit-btn");
  // const closeBtn = document.querySelector(".close-btn");

  // addTaskBtn.addEventListener("click", () => {
  //   formContainer.style.visibility = "visible";
  // });

  // closeBtn.addEventListener("click", () => {
  //   formContainer.style.visibility = "hidden";
  // });

  // submitBtn.addEventListener("click", () => {
  //   // const formElems = taskForm.elements;

  //   const taskName = taskForm.elements["task-name"].value;

  //   todoContainer.appendChild(createNewTaskFrag(taskName));
  //   taskForm.reset();
  // });

  const render = () => {
    todoContainer.textContent = "";

    const currProject = todoController.getCurrProject();
    projName.textContent = currProject.getProjName();

    const currProjectTodos = currProject.getArrayOfTodos();

    currProjectTodos.forEach((todo, index) => {
      todoContainer.appendChild(createNewTaskFrag(todo.getTitle(), index));
    });
  };

  const setupEventListeners = () => {
    todoContainer.addEventListener("click", (ev) => {
      const { target } = ev;

      if (target.classList.contains("complete")) {
        const currProject = todoController.getCurrProject();
        currProject.removeTodo(parseInt(target.dataset.index, 10));
        render();
      }
    });
  };

  // Initial render.
  render();
  setupEventListeners(todoContainer, todoController);
}
