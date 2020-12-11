import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';

const createProjectsHeader = _ => {
    const projectsHeader = createElement('div', 'projects-header');
    appendElement('side-panel', projectsHeader);
}
const createProjectsList = _ => {
    const projectsList = createElement('div', 'projects-list');
    appendElement('side-panel', projectsList);
}
const createProjectsControls = _ => {
    const projectsControls = createElement('div', 'projects-controls');
    appendElement('side-panel', projectsControls);
}

const loadSidePanel = _ => {
    createProjectsHeader();
    createProjectsList();
    createProjectsControls();
}

export default loadSidePanel;