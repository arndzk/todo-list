import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';
import addListenerAddProjectBtn from '../listeners/add-project-btn';

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
    const addProjectBtn = createElement('button', 'add-project-btn', null, 'Add Project');
    appendElement('projects-controls', addProjectBtn);
}

const loadSidePanel = _ => {
    createProjectsHeader();
    createProjectsList();
    createProjectsControls();
    addListenerAddProjectBtn();
}

export default loadSidePanel;