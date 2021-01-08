const createTask = (name, desc, dueDate, priority, status) => {
    let taskName = name;
    let taskDesc = desc;
    let taskDueDate = dueDate;
    let taskPriority = priority;
    if (status == null ) {
        let isDone = false;
    } else {
        let isDone = done;
    }

    const getTaskName = _ => {
        return taskName;
    }
    const getTaskDesc = _ => {
        return taskDesc;
    }
    const getTaskDueDate = _ => {
        return taskDueDate;
    }
    const getTaskPriority = _ => {
        return taskPriority;
    }
    const getIsDone = _ => {
        return isDone;
    }

    const editTaskName = (editedName) => {
        taskName = editedName;
    }
    const editTaskDesc = (editedDesc) => {
        taskDesc = editedDesc;
    }
    const editTaskDueDate = (editedDueDate) => {
        taskDueDate = editedDueDate;
    }
    const editTaskPriority = (editedPriority) => {
        taskPriority = editedPriority;
    }
    const editIsDone = _ => {
        isDone != isDone;
    }

    return {
        getTaskName,
        getTaskDesc,
        getTaskDueDate,
        getTaskPriority,
        getIsDone,
        editTaskName,
        editTaskDesc,
        editTaskDueDate,
        editTaskPriority,
        editIsDone
    }
}

export default createTask;