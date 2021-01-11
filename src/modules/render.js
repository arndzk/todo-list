import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';
import selectElement from '../utils/element-selector';
import addListenerProjectListItem from '../listeners/project-list-item';
import { switchProjectFocus } from './focus';
import addListenerProjectDeleteBtn from '../listeners/delete-project-btn';
import addListenerEditProjectBtn from '../listeners/edit-project-btn';
import addListenerTaskEditBtn from '../listeners/edit-task-btn';
import addListenerTaskDeleteBtn from '../listeners/delete-task-btn';
import addListenerTaskCheckInput from '../listeners/task-check-input';

const renderProjects = (projectsArray, projectToFocus) => {
  const projectsList = selectElement('projects-list');
  projectsList.classList.add('no-click');
  while (projectsList.lastElementChild) {
    projectsList.removeChild(projectsList.lastElementChild);
  }
  let i = 0;
  projectsArray.forEach((project) => {
    const projectDiv = createElement(
      'li',
      `project-list-item-${i + 1}`,
      'project-list-item'
    );
    const listItemName = createElement(
      'span',
      `item-list-name-${i + 1}`,
      'item-list-name',
      project.getProjectName()
    );
    const deleteProjectBtn = createElement(
      'div',
      `delete-project-btn-${i + 1}`,
      'delete-project-btn'
    );
    const deleteProjectIcon = createElement(
      'span',
      `delete-project-icon-${i + 1}`,
      'material-icons',
      'delete'
    );
    deleteProjectIcon.classList.add('delete-project-icon');
    deleteProjectBtn.classList.add('hidden');
    const editProjectBtn = createElement(
      'div',
      `edit-project-btn-${i + 1}`,
      'edit-project-btn'
    );
    const editProjectIcon = createElement(
      'span',
      `edit-project-icon-${i + 1}`,
      'material-icons',
      'edit'
    );
    editProjectIcon.classList.add('edit-project-icon');
    editProjectBtn.classList.add('hidden');
    appendElement('projects-list', projectDiv);
    appendElement(`project-list-item-${i + 1}`, listItemName);
    appendElement(`project-list-item-${i + 1}`, editProjectBtn);
    appendElement(`edit-project-btn-${i + 1}`, editProjectIcon);
    appendElement(`project-list-item-${i + 1}`, deleteProjectBtn);
    appendElement(`delete-project-btn-${i + 1}`, deleteProjectIcon);
    addListenerProjectListItem(`project-list-item-${i + 1}`);
    addListenerProjectDeleteBtn(`delete-project-btn-${i + 1}`, i);
    addListenerEditProjectBtn(`edit-project-btn-${i + 1}`, i);
    i++;
  });
  if (projectToFocus != null) {
    const listItems = projectsList.getElementsByTagName('li');
    if (listItems.length > 0) {
      switchProjectFocus(projectToFocus);
      // renderTasks(projectsArray, projectToFocus);
    }
  }

  projectsList.classList.remove('no-click');
};

const renderTasks = (projectsArray, projectToFocus) => {
  const taskList = selectElement('task-list');
  const listIndex = projectToFocus.substr(projectToFocus.length - 1);
  const arrayIndex = parseInt(listIndex) - 1;
  while (taskList.lastElementChild) {
    taskList.removeChild(taskList.lastElementChild);
  }
  let projectTasks = [];
  projectTasks = projectsArray[arrayIndex].getProjectTasks();
  let i = 0;
  projectTasks.forEach((task) => {
    const taskDiv = createElement(
      'li',
      `task-list-item-${i}`,
      `task-list-item`
    );
    const taskCheck = createElement('span', `task-check-${i}`, 'task-check');
    const taskInput = createElement('span', `task-input-${i}`, 'task-input');
    const isDone = task.getIsDone();

    appendElement('task-list', taskDiv);
    appendElement(`task-list-item-${i}`, taskInput);
    appendElement(`task-input-${i}`, taskCheck);

    const taskItemName = createElement(
      'span',
      `task-name-${i}`,
      'task-name',
      task.getTaskName()
    );
    appendElement(`task-list-item-${i}`, taskItemName);
    const taskDesc = createElement(
      'span',
      `task-desc-${i}`,
      'task-desc',
      task.getTaskDesc()
    );
    appendElement(`task-list-item-${i}`, taskDesc);
    const taskDueDate = createElement(
      'span',
      `task-due-date-${i}`,
      'task-due-date',
      `Due on: ${task.getTaskDueDate()}`
    );
    appendElement(`task-list-item-${i}`, taskDueDate);

    if (isDone === false) {
      if (task.getTaskPriority() === 'low') {
        taskCheck.classList.add('low-check');
      } else if (task.getTaskPriority() === 'normal') {
        taskCheck.classList.add('normal-check');
      } else if (task.getTaskPriority() === 'high') {
        taskCheck.classList.add('high-check');
      }
    } else if (isDone === true) {
      taskCheck.classList.add('material-icons');
      taskCheck.innerHTML = 'check';
      taskItemName.classList.add('checked');
      taskDesc.classList.add('checked');
      taskDueDate.classList.add('checked');
    }

    // Edit & Delete Buttons
    const editTaskBtn = createElement(
      'div',
      `edit-task-btn-${i}`,
      'edit-task-btn'
    );
    const editTaskBtnIcon = createElement(
      'span',
      `edit-task-icon-${i}`,
      'edit-task-icon',
      'edit'
    );
    editTaskBtnIcon.classList.add('material-icons');
    const deleteTaskBtn = createElement(
      'div',
      `delete-task-btn-${i}`,
      'delete-task-btn'
    );
    const deleteTaskBtnIcon = createElement(
      'span',
      `delete-task-icon-${i}`,
      'delete-task-icon',
      'delete'
    );
    deleteTaskBtnIcon.classList.add('material-icons');
    appendElement(`task-list-item-${i}`, editTaskBtn);
    appendElement(`task-list-item-${i}`, deleteTaskBtn);
    appendElement(`edit-task-btn-${i}`, editTaskBtnIcon);
    appendElement(`delete-task-btn-${i}`, deleteTaskBtnIcon);
    addListenerTaskEditBtn(`edit-task-btn-${i}`, arrayIndex, i);
    addListenerTaskDeleteBtn(`delete-task-btn-${i}`, arrayIndex, i);
    addListenerTaskCheckInput(`task-check-${i}`, arrayIndex, i);
    i++;
  });
};

const renderTasksfromEdit = (projectsArray, projectToFocus) => {
  const taskList = selectElement('task-list');
  const listIndex = projectToFocus.substr(projectToFocus.length - 1);
  const arrayIndex = parseInt(listIndex);
  while (taskList.lastElementChild) {
    taskList.removeChild(taskList.lastElementChild);
  }
  let projectTasks = [];
  projectTasks = projectsArray[arrayIndex].getProjectTasks();
  let i = 0;
  projectTasks.forEach((task) => {
    const taskDiv = createElement(
      'li',
      `task-list-item-${i}`,
      `task-list-item`
    );
    const taskCheck = createElement('span', `task-check-${i}`, 'task-check');
    const taskInput = createElement('span', `task-input-${i}`, 'task-input');
    const isDone = task.getIsDone();

    appendElement('task-list', taskDiv);
    appendElement(`task-list-item-${i}`, taskInput);
    appendElement(`task-input-${i}`, taskCheck);

    const taskItemName = createElement(
      'span',
      `task-name-${i}`,
      'task-name',
      task.getTaskName()
    );
    appendElement(`task-list-item-${i}`, taskItemName);
    const taskDesc = createElement(
      'span',
      `task-desc-${i}`,
      'task-desc',
      task.getTaskDesc()
    );
    appendElement(`task-list-item-${i}`, taskDesc);
    const taskDueDate = createElement(
      'span',
      `task-due-date-${i}`,
      'task-due-date',
      `Due on: ${task.getTaskDueDate()}`
    );
    appendElement(`task-list-item-${i}`, taskDueDate);

    if (isDone === false) {
      if (task.getTaskPriority() === 'low') {
        taskCheck.classList.add('low-check');
      } else if (task.getTaskPriority() === 'normal') {
        taskCheck.classList.add('normal-check');
      } else if (task.getTaskPriority() === 'high') {
        taskCheck.classList.add('high-check');
      }
    } else if (isDone === true) {
      taskCheck.classList.add('material-icons');
      taskCheck.innerHTML = 'check';
      taskItemName.classList.add('checked');
      taskDesc.classList.add('checked');
      taskDueDate.classList.add('checked');
    }

    // Edit & Delete Buttons
    const editTaskBtn = createElement(
      'div',
      `edit-task-btn-${i}`,
      'edit-task-btn'
    );
    const editTaskBtnIcon = createElement(
      'span',
      `edit-task-icon-${i}`,
      'edit-task-icon',
      'edit'
    );
    editTaskBtnIcon.classList.add('material-icons');
    const deleteTaskBtn = createElement(
      'div',
      `delete-task-btn-${i}`,
      'delete-task-btn'
    );
    const deleteTaskBtnIcon = createElement(
      'span',
      `delete-task-icon-${i}`,
      'delete-task-icon',
      'delete'
    );
    deleteTaskBtnIcon.classList.add('material-icons');
    appendElement(`task-list-item-${i}`, editTaskBtn);
    appendElement(`task-list-item-${i}`, deleteTaskBtn);
    appendElement(`edit-task-btn-${i}`, editTaskBtnIcon);
    appendElement(`delete-task-btn-${i}`, deleteTaskBtnIcon);
    addListenerTaskEditBtn(`edit-task-btn-${i}`, arrayIndex, i);
    addListenerTaskDeleteBtn(`delete-task-btn-${i}`, arrayIndex, i);
    addListenerTaskCheckInput(`task-check-${i}`, arrayIndex, i);
    i++;
  });
};

export { renderProjects, renderTasks, renderTasksfromEdit };
