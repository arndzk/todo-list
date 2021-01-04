import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';
import addListenerCancelTaskBtn from '../listeners/cancel-task-btn';
import addListenerSaveTaskBtn from '../listeners/add-task-btn';

const createTaskFormContainer = _ => {
    const taskFormContainer = createElement('div', 'add-task-container', 'form-container');
    appendElement('main', taskFormContainer);
}

const createTaskFormBody = _ => {
    const taskFormBody = createElement('form', 'add-task-form', 'form-body');
    taskFormBody.setAttribute('action', '');
    appendElement('add-task-container', taskFormBody);
}

const createTaskFormInputs = () => {
    const taskFormInputs = createElement('div', 'add-task-inputs', 'form-inputs');
    appendElement('add-task-form', taskFormInputs);
    const taskFormNameField = createElement('div', 'add-task-name-field', 'project-name-input-field');
    appendElement('add-task-inputs', taskFormNameField);
    const taskFormNameLabel = createElement('label', 'add-task-name-label', null, 'Task Name');
    appendElement('add-task-name-field', taskFormNameLabel);
    taskFormNameLabel.htmlFor = 'add-task-name-input';
    const taskFormNameInput = createElement('textarea', 'add-task-name-input', 'form-input');
    appendElement('add-task-name-field', taskFormNameInput);
    const taskFormErrMsg = createElement('div', 'add-task-err-msg', 'err-msg', 'Please fill out the empty field(s).');
    taskFormErrMsg.classList.add('hidden');
    appendElement('add-task-inputs', taskFormErrMsg)
}

const createTaskFormControls = _ => {
    const taskFormControls = createElement('div', 'add-task-controls', 'form-controls');
    appendElement('add-task-form', taskFormControls);
    const saveTaskBtn = createElement('button', 'save-task-btn', null, 'Save');
    appendElement('add-task-controls', saveTaskBtn);
    const cancelTaskBtn = createElement('button', 'cancel-task-btn', null, 'Cancel');
    appendElement('add-task-controls', cancelTaskBtn);
}

const createAddTaskForm = (listIndex) => {
    console.log('creating add task form...')
    createTaskFormContainer();
    createTaskFormBody();
    createTaskFormInputs();
    createTaskFormControls();
    console.log(`adding event listener for ${listIndex}`)
    addListenerSaveTaskBtn(listIndex);
    console.log('save event listener added')
    addListenerCancelTaskBtn();
}

export default createAddTaskForm;