import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';

const createProjectFormContainer = _ => {
    const projectFormContainer = createElement('div', 'add-project-container');
    appendElement('main', projectFormContainer);
}

const createProjectFormBody = _ => {
    const projectFormBody = createElement('div', 'add-project-form');
    appendElement('add-project-container', projectFormBody);
}

const createAddProjectForm = _ => {
    createProjectFormContainer();
    createProjectFormBody();
}

export default createAddProjectForm;