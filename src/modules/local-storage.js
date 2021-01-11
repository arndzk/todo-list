import createProject from './project';
import createTask from './task';
import { projectsArray } from '../index';

const setupLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem('projects') || '[]');
  if (data.length === 0) {
    data.push(createProject('Test Project Name', 'Test Project Desc', []));
  }
  return data;
};

const updateLocalStorage = () => {
  localStorage.clear();
  const data = [];
  projectsArray.forEach((project) => {
    const taskList = project.getProjectTasks();
    data.push({
      name: project.getProjectName(),
      desc: project.getProjectDesc(),
      tasks: getTasks(taskList),
    });
  });
  localStorage.setItem('projects', JSON.stringify(data));
  updateProjectsArray();
};

const updateProjectsArray = () => {
  let projectsArray = [];
  const data = JSON.parse(localStorage.getItem('projects'));
  data.forEach((project) => {
    const taskList = [];
    project.tasks.forEach((task) => {
      taskList.push(
        createTask(
          task.name,
          task.desc,
          task.dueDate,
          task.priority,
          task.isDone
        )
      );
    });
    projectsArray.push(createProject(project.name, project.desc, taskList));
  });
};

const pushProjectToArray = (project) => {
  projectsArray.push(project);
  updateLocalStorage(projectsArray);
};

const pushTaskToProject = (task, listIndex) => {
  projectsArray[listIndex].addProjectTask(task);
  updateLocalStorage(projectsArray);
};

const getTasks = (taskList) => {
  const tasksArray = [];
  taskList.forEach((task) => {
    tasksArray.push({
      name: task.getTaskName(),
      desc: task.getTaskDesc(),
      dueDate: task.getTaskDueDate(),
      priority: task.getTaskPriority(),
      isDone: task.getIsDone(),
    });
  });
  return tasksArray;
};

const checkTask = (task) => {
  task.editIsDone();
  updateLocalStorage();
};

export {
  setupLocalStorage,
  updateLocalStorage,
  updateProjectsArray,
  pushProjectToArray,
  pushTaskToProject,
  checkTask,
};
