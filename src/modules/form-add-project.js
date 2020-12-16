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
    const projectFormNameField = createElement('div', 'add-project-name-field');
    appendElement('add-project-inputs', projectFormNameField);
    const projectFormNameLabel = createElement('label', 'add-project-name-label', null, 'Project Name');
    appendElement('add-project-name-field', projectFormNameLabel);
    projectFormNameLabel.htmlFor = 'add-project-name-input';
    const projectFormNameInput = createElement('input', 'add-project-name-input', 'form-input');
    projectFormNameInput.type = 'text';
    projectFormNameInput.placeholder = `Enter your new project's name`;
    appendElement('add-project-name-field', projectFormNameInput);
    const projectFormDescField = createElement('div', 'add-project-desc-field');
    appendElement('add-project-inputs', projectFormDescField);
    const projectFormDescLabel = createElement('label', 'add-project-desc-label', null, 'Project Description');
    appendElement('add-project-desc-field', projectFormDescLabel);
    projectFormDescLabel.htmlFor = 'add-project-desc-textarea';
    const projectFormDescTextArea = createElement('textarea', 'add-project-desc-input', 'form-textarea');
    projectFormDescTextArea.placeholder = `Enter your new project's description`;
    appendElement('add-project-desc-field', projectFormDescTextArea);
}

const createProjectFormControls = _ => {
    const projectFormControls = createElement('div', 'add-project-controls');
    appendElement('add-project-form', projectFormControls);
    const saveProjectBtn = createElement('button', 'save-project-btn', null, 'Save');
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