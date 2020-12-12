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
    const taskList = createElement('div', 'task-list');
    appendElement('center-panel', taskList);
}

const loadCenterPanel = _ => {
    createProjectHeader();
    createTaskList();
}

export default loadCenterPanel;