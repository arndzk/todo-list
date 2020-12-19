const createProject = (name, desc) => {
    console.log('creating project...')
    const projectTasks = [];
    let projectName = name;
    let projectDesc = desc;

    const getProjectName = _ => {
        return projectName;
    }
    const getProjectDesc = _ => projectDesc;
    const getProjectTasks = _ => projectTasks;

    const editProjectName = (editedName) => {
        projectName = editedName;
    }
    const editProjectDesc = (editedDesc) => {
        projectDesc = editedDesc;
    }
    const addProjectTask = (task) => projectTasks.push(task);
    const removeProjectTask = (taskIndex) => projectTasks.splice(taskIndex, 1);

    return {
        getProjectName,
        getProjectDesc,
        getProjectTasks,
        editProjectName,
        editProjectDesc,
        addProjectTask,
        removeProjectTask
    }
}

export default createProject;