import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';
import addListenerAddProjectBtn from '../listeners/add-project-btn';

const createProjectsHeader = () => {
  const projectsHeader = createElement(
    'div',
    'projects-header',
    null,
    `Projects`
  );
  appendElement('side-panel', projectsHeader);
};
const createProjectsList = () => {
  const projectsListContainer = createElement('div', 'projects-list-container');
  appendElement('side-panel', projectsListContainer);
  const projectsList = createElement('ul', 'projects-list');
  appendElement('projects-list-container', projectsList);
};
const createProjectsControls = () => {
  const projectsControls = createElement('div', 'projects-controls');
  appendElement('projects-header', projectsControls);
  const addProjectBtn = createElement(
    'button',
    'add-project-btn',
    'btn',
    'Add Project'
  );
  appendElement('projects-controls', addProjectBtn);
};

const loadSidePanel = (projectsArray) => {
  createProjectsHeader();
  createProjectsControls();
  createProjectsList();
  addListenerAddProjectBtn(projectsArray);
};

export default loadSidePanel;
