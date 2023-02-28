import projectItem from "./projectItem";
import todoItem from "./todoItem";

export default function TodoController() {
  const projects = [];
  let currProject = null;

  const addProject = (project) => {
    projects.push(project);
  };

  // Most likely index will be a data attribute
  const removeProject = (index) => {
    projects.splice(index, 1);
  };

  const getCurrProject = () => currProject;

  const setCurrProject = (project) => {
    currProject = project;
  };

  (() => {
    addProject(projectItem("Default"));
    addProject(projectItem("Personal"));
    addProject(projectItem("Work"));
    addProject(projectItem("Errands"));
  })();

  setCurrProject(projects[1]);

  currProject.addTodo(todoItem("Title1", "Desc1", "1"));
  currProject.addTodo(todoItem("Title2", "Desc2", "2"));
  currProject.addTodo(todoItem("Title3", "Desc3", "3"));

  const getProjArr = () => projects;

  return {
    addProject,
    removeProject,
    getCurrProject,
    setCurrProject,
    getProjArr,
  };
}
