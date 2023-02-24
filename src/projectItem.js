// export default function createProjectItem() {
//   let projName = "";
//   const arrayOfTodos = [];

//   const setProjName = (newProjName) => {
//     projName = newProjName;
//   };
//   const getProjName = () => projName;

//   const addTodoToArray = (todoObject) => {
//     arrayOfTodos.push(todoObject);
//   };

//   const getNumOfTodos = () => arrayOfTodos.length;

//   const getArrayOfTodos = () => arrayOfTodos;

//   // Allows user to change the TodoItem's properties.
//   const editTodo = () => {};

//   // Removes TodoItem from array and deletes it.
//   const deleteTodo = () => {};

//   // Removes ProjectItem from ProjectContainer, deleting all TodoItems within it.
//   const deleteProject = () => {};

//   return {
//     setProjName,
//     getProjName,
//     addTodoToArray,
//     getNumOfTodos,
//     getArrayOfTodos,
//     editTodo,
//     deleteTodo,
//     deleteProject,
//   };
// }

const projectMethods = {
  setProjName(newProjName) {
    this.projName = newProjName;
  },
  getProjName() {
    return this.projName;
  },
  addTodoToArray(todoObject) {
    this.arrayOfTodos.push(todoObject);
  },
  getNumOfTodos() {
    return this.arrayOfTodos.length;
  },
  getArrayOfTodos() {
    return this.arrayOfTodos;
  },
};

const projectItemFactory = (projName) => {
  const project = Object.create(projectMethods);
  project.projName = projName;
  project.arrayOfTodos = [];

  return project;
};

export default projectItemFactory;
