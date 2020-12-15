import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';
import addListenerProjectBtn from '../listeners/create-project-btn';

const createProjectsHeader = _ => {
    const projectsHeader = createElement('div', 'projects-header', null, `Projects`);
    appendElement('side-panel', projectsHeader);
}
const createProjectsList = _ => {
    const projectsList = createElement('div', 'projects-list');
    appendElement('side-panel', projectsList);
}
const createProjectsControls = _ => {
    const projectsControls = createElement('div', 'projects-controls');
    appendElement('side-panel', projectsControls);
    const createProjectBtn = createElement('button', 'create-project-btn', null, 'Create Project');
    appendElement('projects-controls', createProjectBtn);
}

const loadSidePanel = _ => {
    createProjectsHeader();
    createProjectsList();
    createProjectsControls();
    addListenerProjectBtn();
}

export default loadSidePanel;