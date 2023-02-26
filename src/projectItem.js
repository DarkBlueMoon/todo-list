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

const projectItem = (projName) => {
  const project = Object.create(projectMethods);
  project.projName = projName;
  project.arrayOfTodos = [];

  return project;
};

export default projectItem;
