import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';

const createProjectHeader = _ => {
    const projectHeader = createElement('div', 'project-header');
    appendElement('center-panel', projectHeader);
    const projectTitle = createElement('div', 'project-title');
    appendElement('project-header', projectTitle);
    const projectDesc = createElement('div', 'project-desc');
    appendElement('project-header', projectDesc);
}

const createTaskList = _ => {
    const taskListContainer = createElement('div', 'task-list-container');
    const taskList = createElement('ul', 'task-list');
    appendElement('center-panel', taskListContainer);
    appendElement('task-list-container', taskList);
}

const createTaskListControls = _ => {
    const taskListControls = createElement('div', 'task-list-controls');
    const addTaskButton = createElement('button', 'add-task-btn', 'btn', 'Add Task');
    appendElement('task-list-container', taskListControls);
    appendElement('task-list-controls', addTaskButton);
}

const loadCenterPanel = _ => {
    createProjectHeader();
    createTaskList();
    createTaskListControls();
}

export default loadCenterPanel;