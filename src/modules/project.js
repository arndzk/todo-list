const createProject = (name, desc, tasks) => {
    let projectTasks = tasks;
    console.log(projectTasks);
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
    const addProjectTask = (task) => {
        console.log('trying to push task...')
        console.log('this is the task:');
        console.log(task);
        console.log('this is the task name');
        console.log(task.getTaskName());
        projectTasks.push(task);
        console.log('the task is pushed!')
        console.log('this is the projectTasks');
        console.log(getProjectTasks());
    }
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