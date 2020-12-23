const createProject = (name, desc) => {
    const projectTasks = [];
    let projectName = name;
    let projectDesc = desc;
    let projectFocus = false;

    const getProjectName = _ => {
        return projectName;
    }
    const getProjectDesc = _ => projectDesc;
    const getProjectTasks = _ => projectTasks;
    const getProjectFocus = _ => projectFocus;

    const editProjectName = (editedName) => {
        projectName = editedName;
    }
    const editProjectDesc = (editedDesc) => {
        projectDesc = editedDesc;
    }
    const editProjectFocus = (editedFocus) => {
        projectFocus = editedFocus;
    }
    const addProjectTask = (task) => projectTasks.push(task);
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
        removeProjectTask
    }
}

export default createProject;