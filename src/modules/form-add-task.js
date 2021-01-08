import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';
import addListenerCancelTaskBtn from '../listeners/cancel-task-btn';
import addListenerSaveTaskBtn from '../listeners/save-task-btn';

const createTaskFormContainer = _ => {
    const taskFormContainer = createElement('div', 'add-task-container', 'form-container');
    appendElement('main', taskFormContainer);
}

const createTaskFormBody = _ => {
    const taskFormBody = createElement('form', 'add-task-form', 'form-body');
    taskFormBody.setAttribute('action', '');
    appendElement('add-task-container', taskFormBody);
}

const createTaskFromHeader = _ => {
    const taskFormHeader = createElement('div', 'add-task-header', 'form-header');
    appendElement('add-task-form', taskFormHeader);
    const taskFormHeaderText = createElement('span', 'add-task-header-text', 'header-text', 'Add Task');
    appendElement('add-task-header', taskFormHeaderText);
}

const createTaskFormInputs = _ => {
    const taskFormInputs = createElement('div', 'add-task-inputs', 'form-inputs');
    appendElement('add-task-form', taskFormInputs);
    // Task Name
    const taskFormNameField = createElement('div', 'add-task-name-field', 'project-name-input-field');
    appendElement('add-task-inputs', taskFormNameField);
    const taskFormNameLabel = createElement('label', 'add-task-name-label', null, 'Task Name');
    appendElement('add-task-name-field', taskFormNameLabel);
    taskFormNameLabel.htmlFor = 'add-task-name-input';
    const taskFormNameInput = createElement('textarea', 'add-task-name-input', 'form-input');
    appendElement('add-task-name-field', taskFormNameInput);
    // Task Description
    const taskFormDescField = createElement('div', 'add-task-desc-field', 'project-desc-input-field');
    appendElement('add-task-inputs', taskFormDescField);
    const taskFormDescLabel = createElement('label', 'add-task-desc-label', null, 'Task Description');
    appendElement('add-task-desc-field', taskFormDescLabel);
    taskFormDescLabel.htmlFor = 'add-task-desc-input';
    const taskFormDescInput = createElement('textarea', 'add-task-desc-input', 'form-input');
    appendElement('add-task-desc-field', taskFormDescInput);
    // Task Due Date
    const taskFormDateField = createElement('div', 'add-task-date-field');
    appendElement('add-task-inputs', taskFormDateField);
    const taskFormDateLabel = createElement('label', 'add-task-date-label', null, 'Due Date');
    appendElement('add-task-date-field', taskFormDateLabel);
    taskFormDateLabel.htmlFor = 'add-task-date-input';
    const taskFormDateInput = createElement('input', 'add-task-date-input');
    taskFormDateInput.setAttribute('type', 'date');
    appendElement('add-task-date-field', taskFormDateInput);
    // Task Priority
    const taskFormPriorityField = createElement('div', 'add-task-priority-field');
    appendElement('add-task-inputs', taskFormPriorityField);
    const taskFormPriorityLabel = createElement('label', 'add-task-priority-label', null, 'Priority');
    appendElement('add-task-priority-field', taskFormPriorityLabel);
    taskFormPriorityLabel.htmlFor = 'add-task-priority-input';
    const taskFormPriorityInput = createElement('div', 'add-task-priority-input');
    appendElement('add-task-priority-field', taskFormPriorityInput);
    console.log('creating high priority...')

    const priorityHigh = createElement('div', 'priority-high-container', 'priority-container');
    const priorityNormal = createElement('div', 'priority-normal-container', 'priority-container');
    const priorityLow = createElement('div', 'priority-low-container', 'priority-container');
    appendElement('add-task-priority-input', priorityHigh);
    appendElement('add-task-priority-input', priorityNormal);
    appendElement('add-task-priority-input', priorityLow);

    const priorityHighRadio = createElement('input', 'priority-high', 'priority-radio');
    priorityHighRadio.setAttribute('type', 'radio');
    priorityHighRadio.setAttribute('name', 'priority');
    priorityHighRadio.setAttribute('value', 'high');
    const priorityHighLabel = createElement('label', 'priority-high-label', 'priority-label', 'High');
    priorityHighLabel.htmlFor = 'priority-high';
    appendElement('priority-high-container', priorityHighRadio);
    appendElement('priority-high-container', priorityHighLabel);

    const priorityNormalRadio = createElement('input', 'priority-normal', 'priority-radio');
    priorityNormalRadio.setAttribute('type', 'radio');
    priorityNormalRadio.setAttribute('name', 'priority');
    priorityNormalRadio.setAttribute('value', 'normal');
    const priorityNormalLabel = createElement('label', 'priority-normal-label', 'priority-label', 'Normal');
    priorityNormalLabel.htmlFor = 'priority-normal';
    appendElement('priority-normal-container', priorityNormalRadio);
    appendElement('priority-normal-container', priorityNormalLabel);

    const priorityLowRadio = createElement('input', 'priority-low', 'priority-radio');
    priorityLowRadio.setAttribute('type', 'radio');
    priorityLowRadio.setAttribute('name', 'priority');
    priorityLowRadio.setAttribute('value', 'low');
    const priorityLowLabel = createElement('label', 'priority-low-label', 'priority-label', 'Low');
    priorityLowLabel.htmlFor = 'priority-low';
    appendElement('priority-low-container', priorityLowRadio);
    appendElement('priority-low-container', priorityLowLabel);

    // Form Error Message
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
    createTaskFormContainer();
    createTaskFormBody();
    createTaskFromHeader();
    createTaskFormInputs();
    createTaskFormControls();
    addListenerSaveTaskBtn(listIndex);
    addListenerCancelTaskBtn();
}

export default createAddTaskForm;