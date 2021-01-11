import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';

const createProjectHeader = () => {
  const projectHeader = createElement('div', 'project-header');
  appendElement('center-panel', projectHeader);
  const projectDataContainer = createElement('div', 'project-data-container');
  appendElement('project-header', projectDataContainer);
  const projectTitle = createElement('div', 'project-title');
  appendElement('project-data-container', projectTitle);
  const projectDesc = createElement('div', 'project-desc');
  appendElement('project-data-container', projectDesc);
};

const createTaskList = () => {
  const taskListContainer = createElement('div', 'task-list-container');
  const taskList = createElement('ul', 'task-list');
  appendElement('center-panel', taskListContainer);
  appendElement('task-list-container', taskList);
};

const createTaskListControls = () => {
  const taskListControls = createElement('div', 'task-list-controls');
  const addTaskButton = createElement(
    'button',
    'add-task-btn',
    'btn',
    'Add Task'
  );
  appendElement('project-header', taskListControls);
  appendElement('task-list-controls', addTaskButton);
};

const loadCenterPanel = () => {
  createProjectHeader();
  createTaskList();
  createTaskListControls();
};

export default loadCenterPanel;
