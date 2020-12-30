import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';
import addListenerCancelProjectEditBtn from '../listeners/cancel-project-edit-btn';
import addListenerSaveProjectBtn from '../listeners/save-project-btn';
import addListenerFormInput from '../listeners/form-input';

const createProjectFormContainer = _ => {
    const projectFormContainer = createElement('div', 'edit-project-container', 'form-container');
    appendElement('main', projectFormContainer);
}

const createProjectFormBody = _ => {
    const projectFormBody = createElement('form', 'edit-project-form', 'form-body');
    projectFormBody.setAttribute('action', '');
    appendElement('edit-project-container', projectFormBody);
}

const createProjectFormHeader = _ => {
    const projectFormHeader = createElement('div', 'edit-project-header', 'form-header');
    appendElement('edit-project-form', projectFormHeader);
    const projectFormHeaderText = createElement('span', 'add-project-header-text', 'header-text', 'Edit Project');
    appendElement('edit-project-header', projectFormHeaderText);
}

const createProjectFormInputs = _ => {
    const projectFormInputs = createElement('div', 'edit-project-inputs', 'form-inputs');
    appendElement('edit-project-form', projectFormInputs);
    const projectFormNameField = createElement('div', 'edit-project-name-field', 'project-name-input-field');
    appendElement('edit-project-inputs', projectFormNameField);
    const projectFormNameLabel = createElement('label', 'edit-project-name-label', null, 'Project Name');
    appendElement('edit-project-name-field', projectFormNameLabel);
    projectFormNameLabel.htmlFor = 'edit-project-name-input';
    const projectFormNameInput = createElement('input', 'edit-project-name-input', 'form-input');
    projectFormNameInput.type = 'text';
    projectFormNameInput.placeholder = `Enter your new project's name`;
    appendElement('edit-project-name-field', projectFormNameInput);
    const projectFormDescField = createElement('div', 'edit-project-desc-field', 'project-desc-input-field');
    appendElement('edit-project-inputs', projectFormDescField);
    const projectFormDescLabel = createElement('label', 'edit-project-desc-label', null, 'Project Description');
    appendElement('edit-project-desc-field', projectFormDescLabel);
    projectFormDescLabel.htmlFor = 'edit-project-desc-textarea';
    const projectFormDescTextArea = createElement('textarea', 'edit-project-desc-input', 'form-textarea');
    projectFormDescTextArea.placeholder = `Enter your new project's description`;
    appendElement('edit-project-desc-field', projectFormDescTextArea);
    const projectFormErrMsg = createElement('div', 'edit-project-err-msg', 'error-msg', 'Please fill out the empty field(s).');
    projectFormErrMsg.classList.add('hidden');
    appendElement('edit-project-inputs', projectFormErrMsg)
}

const createProjectFormControls = _ => {
    const projectFormControls = createElement('div', 'edit-project-controls', 'form-controls');
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
    addListenerCancelProjectEditBtn();
}

export default createEditProjectForm;