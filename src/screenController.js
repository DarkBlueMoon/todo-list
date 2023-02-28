import TodoController from "./todoController";
import todoItem from "./todoItem";

function createNewTaskFrag(taskName, index) {
  const newTask = `
    <div class="todo-item">
      <button class="complete" data-index="${index}">Complete?</button>
      <p class="task-name">${taskName}</p>
    </div>
  `;

  return document.createRange().createContextualFragment(newTask);
}

function createNewProjFrag(projName) {
  const newProj = `<button type="button" class="project ${projName.toLowerCase()}">${projName}</button>`;

  return document.createRange().createContextualFragment(newProj);
}

export default function ScreenController() {
  const todoController = TodoController();

  const addTaskBtn = document.querySelector(".add-task");
  const formContainer = document.querySelector(".form-container");
  const projName = document.querySelector(".project-title");
  const todoContainer = document.querySelector(".todo-container");
  const taskForm = document.querySelector(".task-form");
  const submitBtn = document.querySelector(".submit-btn");
  const closeBtn = document.querySelector(".close-btn");
  const projContainer = document.querySelector(".projects-container");

  const renderTasks = () => {
    todoContainer.textContent = "";

    const currProject = todoController.getCurrProject();
    projName.textContent = currProject.getProjName();

    const currProjectTodos = currProject.getArrayOfTodos();

    currProjectTodos.forEach((todo, index) => {
      todoContainer.appendChild(createNewTaskFrag(todo.getTitle(), index));
    });
  };

  const renderProjects = () => {
    projContainer.textContent = "";
    const projectArray = todoController.getProjArr();

    projectArray.forEach((proj) => {
      projContainer.appendChild(createNewProjFrag(proj.getProjName()));
    });
  };

  const render = () => {
    renderTasks();
    renderProjects();
    console.dir(todoController.getProjArr());
  };

  const setupEventListeners = () => {
    todoContainer.addEventListener("click", (ev) => {
      const { target } = ev;
      console.dir(target);

      if (target.classList.contains("complete")) {
        const currProject = todoController.getCurrProject();
        currProject.removeTodo(parseInt(target.dataset.index, 10));
        render();
      }
    });

    addTaskBtn.addEventListener("click", () => {
      formContainer.style.visibility = "visible";
    });

    closeBtn.addEventListener("click", () => {
      formContainer.style.visibility = "hidden";
    });

    submitBtn.addEventListener("click", () => {
      const taskName = taskForm.elements["task-name"].value;

      const currProject = todoController.getCurrProject();
      currProject.addTodo(todoItem(taskName, "", ""));
      render();

      taskForm.reset();
    });
  };

  // Initial render.
  render();
  setupEventListeners();
}
