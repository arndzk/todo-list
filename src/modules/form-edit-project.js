import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';
import addListenerCancelProjectBtn from '../listeners/cancel-project-btn';
import addListenerSaveProjectBtn from '../listeners/save-project-btn';
import addListenerFormInput from '../listeners/form-input';

const createProjectFormContainer = _ => {
    const projectFormContainer = createElement('div', 'edit-project-container');
    appendElement('main', projectFormContainer);
}

const createProjectFormBody = _ => {
    const projectFormBody = createElement('form', 'edit-project-form');
    projectFormBody.setAttribute('action', '');
    appendElement('edit-project-container', projectFormBody);
}

const createProjectFormHeader = _ => {
    const projectFormHeader = createElement('div', 'edit-project-header');
    appendElement('edit-project-form', projectFormHeader);
    const projectFormHeaderText = createElement('span', 'add-project-header-text', null, 'Edit Project');
    appendElement('edit-project-header', projectFormHeaderText);
}

const createProjectFormInputs = _ => {
    const projectFormInputs = createElement('div', 'edit-project-inputs');
    appendElement('edit-project-form', projectFormInputs);
    const projectFormNameField = createElement('div', 'edit-project-name-field');
    appendElement('edit-project-inputs', projectFormNameField);
    const projectFormNameLabel = createElement('label', 'edit-project-name-label', null, 'Project Name');
    appendElement('edit-project-name-field', projectFormNameLabel);
    projectFormNameLabel.htmlFor = 'edit-project-name-input';
    const projectFormNameInput = createElement('input', 'edit-project-name-input', 'form-input');
    projectFormNameInput.type = 'text';
    projectFormNameInput.placeholder = `Enter your new project's name`;
    appendElement('edit-project-name-field', projectFormNameInput);
    const projectFormDescField = createElement('div', 'edit-project-desc-field');
    appendElement('edit-project-inputs', projectFormDescField);
    const projectFormDescLabel = createElement('label', 'edit-project-desc-label', null, 'Project Description');
    appendElement('edit-project-desc-field', projectFormDescLabel);
    projectFormDescLabel.htmlFor = 'edit-project-desc-textarea';
    const projectFormDescTextArea = createElement('textarea', 'edit-project-desc-input', 'form-textarea');
    projectFormDescTextArea.placeholder = `Enter your new project's description`;
    appendElement('edit-project-desc-field', projectFormDescTextArea);
    const projectFormErrMsg = createElement('div', 'edit-project-err-msg', 'hidden', 'Please fill out the empty field(s).');
    appendElement('edit-project-inputs', projectFormErrMsg)
}

const createProjectFormControls = _ => {
    const projectFormControls = createElement('div', 'edit-project-controls');
    appendElement('edit-project-form', projectFormControls);
    const saveProjectEditBtn = createElement('button', 'save-project-edit-btn', null, 'Save');
    appendElement('edit-project-controls', saveProjectEditBtn);
    const cancelProjectEditBtn = createElement('button', 'cancel-project-edit-btn', null, 'Cancel');
    appendElement('edit-project-controls', cancelProjectEditBtn);
}

const createEditProjectForm = () => {
    createProjectFormContainer();
    createProjectFormBody();
    createProjectFormHeader();
    createProjectFormInputs();
    createProjectFormControls();
    addListenerFormInput('edit-project-name-input');
    addListenerFormInput('edit-project-desc-input');
    //addListenerSaveProjectBtn();
    addListenerCancelProjectBtn();
}

export default createEditProjectForm;