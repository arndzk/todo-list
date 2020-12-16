import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';
import addListenerCancelProjectBtn from '../listeners/cancel-project-btn';

const createProjectFormContainer = _ => {
    const projectFormContainer = createElement('div', 'add-project-container');
    appendElement('main', projectFormContainer);
}

const createProjectFormBody = _ => {
    const projectFormBody = createElement('div', 'add-project-form');
    appendElement('add-project-container', projectFormBody);
}

const createProjectFormHeader = _ => {
    const projectFormHeader = createElement('div', 'add-project-header');
    appendElement('add-project-form', projectFormHeader);
    const projectFormHeaderText = createElement('span', 'add-project-header-text', null, 'Add Project');
    appendElement('add-project-header', projectFormHeaderText);
}

const createProjectFormInputs = _ => {
    const projectFormInputs = createElement('div', 'add-project-inputs');
    appendElement('add-project-form', projectFormInputs);
}

const createProjectFormControls = _ => {
    const projectFormControls = createElement('div', 'add-project-controls');
    appendElement('add-project-form', projectFormControls);
    const saveProjectBtn = createElement('button', 'save-project-btn', null, 'Add Project');
    appendElement('add-project-controls', saveProjectBtn);
    const cancelProjectBtn = createElement('button', 'cancel-project-btn', null, 'Cancel');
    appendElement('add-project-controls', cancelProjectBtn);
}

const createAddProjectForm = _ => {
    createProjectFormContainer();
    createProjectFormBody();
    createProjectFormHeader();
    createProjectFormInputs();
    createProjectFormControls();
    addListenerCancelProjectBtn();
}

export default createAddProjectForm;