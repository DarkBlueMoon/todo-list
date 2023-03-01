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

function createNewProjFrag(projName, index) {
  const newProj = `<button type="button" class="project" data-index="${index}">${projName}</button>`;

  return document.createRange().createContextualFragment(newProj);
}

export default function ScreenController() {
  const todoController = TodoController();
  const todoContainer = document.querySelector(".todo-container");
  const projContainer = document.querySelector(".projects-container");

  const renderTasks = () => {
    const projName = document.querySelector(".project-title");

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

    projectArray.forEach((proj, index) => {
      projContainer.appendChild(createNewProjFrag(proj.getProjName(), index));
    });
  };

  const setupFormListeners = () => {
    const addTaskBtn = document.querySelector(".add-task");
    const formContainer = document.querySelector(".form-container");
    const submitBtn = document.querySelector(".submit-btn");
    const closeBtn = document.querySelector(".close-btn");
    const taskForm = document.querySelector(".task-form");

    addTaskBtn.addEventListener("click", () => {
      formContainer.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
      formContainer.classList.remove("active");
    });

    submitBtn.addEventListener("click", () => {
      const taskName = taskForm.elements["task-name"].value;

      const currProject = todoController.getCurrProject();
      currProject.addTodo(todoItem(taskName, "", ""));
      renderTasks();

      taskForm.reset();
    });
  };

  const setupNavListeners = () => {
    const newProjBtn = document.querySelector(".add-project");
    const closeProjBtn = document.querySelector(".close-project");
    const submitProjBtn = document.querySelector(".submit-project");
    const projInput = document.querySelector(".new-project-input");

    newProjBtn.addEventListener("click", () => {
      projInput.classList.add("active");
    });

    closeProjBtn.addEventListener("click", () => {
      projInput.classList.remove("active");
    });

    submitProjBtn.addEventListener("click", () => {
      const projNameInput = document.querySelector(".proj-name");
      todoController.addProject(projNameInput.value);
      projNameInput.value = "";
      renderProjects();
    });
  };

  const setupProjButtonListeners = () => {
    projContainer.addEventListener("click", (ev) => {
      const { target } = ev;

      todoController.setCurrProject(target.dataset.index);
      renderTasks();
    });
  };

  const setupEventListeners = () => {
    todoContainer.addEventListener("click", (ev) => {
      const { target } = ev;

      if (target.classList.contains("complete")) {
        const currProject = todoController.getCurrProject();
        currProject.removeTodo(parseInt(target.dataset.index, 10));
        renderTasks();
      }
    });

    setupFormListeners();
    setupNavListeners();
    setupProjButtonListeners();
  };

  // Initial render.
  renderTasks();
  renderProjects();
  setupEventListeners();
}
