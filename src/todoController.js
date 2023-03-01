import projectItem from "./projectItem";

export default function TodoController() {
  const projects = [];
  let currProject = null;

  const addProject = (project) => {
    projects.push(projectItem(project));
  };

  // Most likely index will be a data attribute
  const removeProject = (index) => {
    projects.splice(index, 1);
  };

  const getCurrProject = () => currProject;

  const setCurrProject = (projectIndex) => {
    currProject = projects[projectIndex];
  };

  (() => {
    addProject("Default");
    addProject("Personal");
    addProject("Work");
    addProject("Errands");
  })();

  setCurrProject(0);

  const getProjArr = () => projects;

  return {
    addProject,
    removeProject,
    getCurrProject,
    setCurrProject,
    getProjArr,
  };
}
