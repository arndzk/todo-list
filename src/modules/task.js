const createTask = (name, desc, dueDate, priority, status) => {
  let taskName = name;
  let taskDesc = desc;
  let taskDueDate = dueDate;
  let taskPriority = priority;
  let isDone;
  if (status == null) {
    isDone = false;
  } else {
    isDone = status;
  }

  const getTaskName = () => {
    return taskName;
  };
  const getTaskDesc = () => {
    return taskDesc;
  };
  const getTaskDueDate = () => {
    return taskDueDate;
  };
  const getTaskPriority = () => {
    return taskPriority;
  };
  const getIsDone = () => {
    return isDone;
  };

  const editTaskName = (editedName) => {
    taskName = editedName;
  };
  const editTaskDesc = (editedDesc) => {
    taskDesc = editedDesc;
  };
  const editTaskDueDate = (editedDueDate) => {
    taskDueDate = editedDueDate;
  };
  const editTaskPriority = (editedPriority) => {
    taskPriority = editedPriority;
  };
  const editIsDone = () => {
    isDone = !isDone;
  };

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
    editIsDone,
  };
};

export default createTask;
