const createProject = (name, desc, tasks) => {
  let projectTasks = tasks;
  let projectName = name;
  let projectDesc = desc;
  let projectFocus = false;

  const getProjectName = () => {
    return projectName;
  };
  const getProjectDesc = () => projectDesc;
  const getProjectTasks = () => projectTasks;
  const getProjectFocus = () => projectFocus;

  const editProjectName = (editedName) => {
    projectName = editedName;
  };
  const editProjectDesc = (editedDesc) => {
    projectDesc = editedDesc;
  };
  const editProjectFocus = (editedFocus) => {
    projectFocus = editedFocus;
  };
  const addProjectTask = (task) => {
    projectTasks.push(task);
  };
  const removeProjectTask = (taskIndex) => projectTasks.splice(taskIndex, 1);

  return {
    getProjectName,
    getProjectDesc,
    getProjectTasks,
    getProjectFocus,
    editProjectName,
    editProjectDesc,
    editProjectFocus,
    addProjectTask,
    removeProjectTask,
  };
};

export default createProject;
