import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';
import addListenerCancelProjectBtn from '../listeners/cancel-project-btn';
import addListenerSaveProjectBtn from '../listeners/save-project-btn';
import addListenerFormInput from '../listeners/form-input';

const createProjectFormContainer = () => {
  const projectFormContainer = createElement(
    'div',
    'add-project-container',
    'form-container'
  );
  appendElement('main', projectFormContainer);
};

const createProjectFormBody = () => {
  const projectFormBody = createElement(
    'form',
    'add-project-form',
    'form-body'
  );
  projectFormBody.setAttribute('action', '');
  appendElement('add-project-container', projectFormBody);
};

const createProjectFormHeader = () => {
  const projectFormHeader = createElement(
    'div',
    'add-project-header',
    'form-header'
  );
  appendElement('add-project-form', projectFormHeader);
  const projectFormHeaderText = createElement(
    'span',
    'add-project-header-text',
    'header-text',
    'Add Project'
  );
  appendElement('add-project-header', projectFormHeaderText);
};

const createProjectFormInputs = () => {
  const projectFormInputs = createElement(
    'div',
    'add-project-inputs',
    'form-inputs'
  );
  appendElement('add-project-form', projectFormInputs);
  const projectFormNameField = createElement(
    'div',
    'add-project-name-field',
    'project-name-input-field'
  );
  appendElement('add-project-inputs', projectFormNameField);
  const projectFormNameLabel = createElement(
    'label',
    'add-project-name-label',
    null,
    'Project Name'
  );
  appendElement('add-project-name-field', projectFormNameLabel);
  projectFormNameLabel.htmlFor = 'add-project-name-input';
  const projectFormNameInput = createElement(
    'input',
    'add-project-name-input',
    'form-input'
  );
  projectFormNameInput.type = 'text';
  projectFormNameInput.placeholder = `Enter your new project's name`;
  appendElement('add-project-name-field', projectFormNameInput);
  const projectFormDescField = createElement(
    'div',
    'add-project-desc-field',
    'project-desc-input-field'
  );
  appendElement('add-project-inputs', projectFormDescField);
  const projectFormDescLabel = createElement(
    'label',
    'add-project-desc-label',
    null,
    'Project Description'
  );
  appendElement('add-project-desc-field', projectFormDescLabel);
  projectFormDescLabel.htmlFor = 'add-project-desc-textarea';
  const projectFormDescTextArea = createElement(
    'textarea',
    'add-project-desc-input',
    'form-textarea'
  );
  projectFormDescTextArea.placeholder = `Enter your new project's description`;
  appendElement('add-project-desc-field', projectFormDescTextArea);
  const projectFormErrMsg = createElement(
    'div',
    'add-project-err-msg',
    'err-msg',
    'Please fill out the empty field(s).'
  );
  projectFormErrMsg.classList.add('hidden');
  appendElement('add-project-inputs', projectFormErrMsg);
};

const createProjectFormControls = () => {
  const projectFormControls = createElement(
    'div',
    'add-project-controls',
    'form-controls'
  );
  appendElement('add-project-form', projectFormControls);
  const saveProjectBtn = createElement(
    'button',
    'save-project-btn',
    null,
    'Save'
  );
  appendElement('add-project-controls', saveProjectBtn);
  const cancelProjectBtn = createElement(
    'button',
    'cancel-project-btn',
    null,
    'Cancel'
  );
  appendElement('add-project-controls', cancelProjectBtn);
};

const createAddProjectForm = () => {
  createProjectFormContainer();
  createProjectFormBody();
  createProjectFormHeader();
  createProjectFormInputs();
  createProjectFormControls();
  addListenerFormInput('add-project-name-input');
  addListenerFormInput('add-project-desc-input');
  addListenerSaveProjectBtn();
  addListenerCancelProjectBtn();
};

export default createAddProjectForm;
