const createTask = (name) => {
    let taskName = name;

    const getTaskName = _ => {
        return taskName;
    }
    const editTaskName = (editedName) => {
        taskName = editedName;
    }

    return {
        getTaskName,
        editTaskName,
    }
}

export default createTask;