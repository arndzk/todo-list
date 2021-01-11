import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';
import addListenerCancelTaskEditBtn from '../listeners/cancel-task-edit-btn';
import addListenerSaveTaskEditBtn from '../listeners/save-task-edit-btn';
import { projectsArray } from '../index';

const createTaskFormContainer = () => {
  const taskFormContainer = createElement(
    'div',
    'edit-task-container',
    'form-container'
  );
  appendElement('main', taskFormContainer);
};

const createTaskFormBody = () => {
  const taskFormBody = createElement('form', 'edit-task-form', 'form-body');
  taskFormBody.setAttribute('action', '');
  appendElement('edit-task-container', taskFormBody);
};

const createTaskFromHeader = () => {
  const taskFormHeader = createElement(
    'div',
    'edit-task-header',
    'form-header'
  );
  appendElement('edit-task-form', taskFormHeader);
  const taskFormHeaderText = createElement(
    'span',
    'edit-task-header-text',
    'header-text',
    'Edit Task'
  );
  appendElement('edit-task-header', taskFormHeaderText);
};

const createTaskFormInputs = (projectListIndex, taskListIndex) => {
  let taskList = [];

  taskList = projectsArray[projectListIndex].getProjectTasks();
  // Inputs
  const taskFormInputs = createElement(
    'div',
    'edit-task-inputs',
    'form-inputs'
  );
  appendElement('edit-task-form', taskFormInputs);
  // Task Name
  const taskFormNameField = createElement(
    'div',
    'edit-task-name-field',
    'task-name-input-field'
  );
  appendElement('edit-task-inputs', taskFormNameField);
  const taskFormNameLabel = createElement(
    'label',
    'edit-task-name-label',
    null,
    'Task Name'
  );
  appendElement('edit-task-name-field', taskFormNameLabel);
  taskFormNameLabel.htmlFor = 'edit-task-name-input';
  const taskFormNameInput = createElement(
    'textarea',
    'edit-task-name-input',
    'form-input'
  );
  taskFormNameInput.textContent = taskList[taskListIndex].getTaskName();
  appendElement('edit-task-name-field', taskFormNameInput);
  // Task Description
  const taskFormDescField = createElement(
    'div',
    'edit-task-desc-field',
    'task-desc-input-field'
  );
  appendElement('edit-task-inputs', taskFormDescField);
  const taskFormDescLabel = createElement(
    'label',
    'edit-task-desc-label',
    null,
    'Task Description'
  );
  appendElement('edit-task-desc-field', taskFormDescLabel);
  taskFormDescLabel.htmlFor = 'edit-task-desc-input';
  const taskFormDescInput = createElement(
    'textarea',
    'edit-task-desc-input',
    'form-input'
  );
  taskFormDescInput.textContent = taskList[taskListIndex].getTaskDesc();
  appendElement('edit-task-desc-field', taskFormDescInput);
  // Task Due Date
  const taskFormDateField = createElement(
    'div',
    'edit-task-date-field',
    'task-date-input-field'
  );
  appendElement('edit-task-inputs', taskFormDateField);
  const taskFormDateLabel = createElement(
    'label',
    'edit-task-date-label',
    null,
    'Due Date'
  );
  appendElement('edit-task-date-field', taskFormDateLabel);
  taskFormDateLabel.htmlFor = 'edit-task-date-input';
  const taskFormDateInput = createElement('input', 'edit-task-date-input');
  taskFormDateInput.setAttribute('type', 'date');
  taskFormDateInput.setAttribute(
    'value',
    taskList[taskListIndex].getTaskDueDate()
  );
  appendElement('edit-task-date-field', taskFormDateInput);
  // Task Priority
  const taskFormPriorityField = createElement(
    'div',
    'edit-task-priority-field',
    'task-priority-input-field'
  );
  appendElement('edit-task-inputs', taskFormPriorityField);
  const taskFormPriorityLabel = createElement(
    'label',
    'edit-task-priority-label',
    null,
    'Priority'
  );
  appendElement('edit-task-priority-field', taskFormPriorityLabel);
  taskFormPriorityLabel.htmlFor = 'edit-task-priority-input';
  const taskFormPriorityInput = createElement(
    'div',
    'edit-task-priority-input'
  );
  appendElement('edit-task-priority-field', taskFormPriorityInput);

  const priorityHigh = createElement(
    'div',
    'priority-high-container',
    'priority-container'
  );
  const priorityNormal = createElement(
    'div',
    'priority-normal-container',
    'priority-container'
  );
  const priorityLow = createElement(
    'div',
    'priority-low-container',
    'priority-container'
  );
  appendElement('edit-task-priority-input', priorityLow);
  appendElement('edit-task-priority-input', priorityNormal);
  appendElement('edit-task-priority-input', priorityHigh);

  const priorityHighRadioInput = createElement(
    'span',
    'high-radio-input',
    'radio__input'
  );
  const priorityNormalRadioInput = createElement(
    'span',
    'normal-radio-input',
    'radio__input'
  );
  const priorityLowRadioInput = createElement(
    'span',
    'low-radio-input',
    'radio__input'
  );
  appendElement('priority-low-container', priorityLowRadioInput);
  appendElement('priority-normal-container', priorityNormalRadioInput);
  appendElement('priority-high-container', priorityHighRadioInput);

  let savedPriority = taskList[taskListIndex].getTaskPriority();

  const priorityHighRadioControl = createElement(
    'span',
    'high-radio-control',
    'radio__control'
  );
  const priorityNormalRadioControl = createElement(
    'span',
    'normal-radio-control',
    'radio__control'
  );
  const priorityLowRadioControl = createElement(
    'span',
    'low-radio-control',
    'radio__control'
  );

  const priorityHighRadio = createElement(
    'input',
    'priority-high',
    'priority-radio'
  );
  priorityHighRadio.setAttribute('type', 'radio');
  priorityHighRadio.setAttribute('name', 'priority');
  priorityHighRadio.setAttribute('value', 'high');
  if (savedPriority === 'high') {
    priorityHighRadio.checked = true;
  }

  const priorityHighLabel = createElement(
    'label',
    'priority-high-label',
    'priority-label',
    'High'
  );
  priorityHighLabel.htmlFor = 'priority-high';

  const priorityNormalRadio = createElement(
    'input',
    'priority-normal',
    'priority-radio'
  );
  priorityNormalRadio.setAttribute('type', 'radio');
  priorityNormalRadio.setAttribute('name', 'priority');
  priorityNormalRadio.setAttribute('value', 'normal');
  if (savedPriority === 'normal') {
    priorityNormalRadio.checked = true;
  }

  const priorityNormalLabel = createElement(
    'label',
    'priority-normal-label',
    'priority-label',
    'Normal'
  );
  priorityNormalLabel.htmlFor = 'priority-normal';

  const priorityLowRadio = createElement(
    'input',
    'priority-low',
    'priority-radio'
  );
  priorityLowRadio.setAttribute('type', 'radio');
  priorityLowRadio.setAttribute('name', 'priority');
  priorityLowRadio.setAttribute('value', 'low');
  if (savedPriority === 'low') {
    priorityLowRadio.checked = true;
  }

  const priorityLowLabel = createElement(
    'label',
    'priority-low-label',
    'priority-label',
    'Low'
  );
  priorityLowLabel.htmlFor = 'priority-low';

  appendElement('low-radio-input', priorityLowRadio);
  appendElement('low-radio-input', priorityLowRadioControl);
  appendElement('priority-low-container', priorityLowLabel);
  appendElement('normal-radio-input', priorityNormalRadio);
  appendElement('normal-radio-input', priorityNormalRadioControl);
  appendElement('priority-normal-container', priorityNormalLabel);
  appendElement('high-radio-input', priorityHighRadio);
  appendElement('high-radio-input', priorityHighRadioControl);
  appendElement('priority-high-container', priorityHighLabel);

  // Form Error Message
  const taskFormErrMsg = createElement(
    'div',
    'edit-task-err-msg',
    'err-msg',
    'Please fill out the empty field(s).'
  );
  taskFormErrMsg.classList.add('hidden');
  appendElement('edit-task-inputs', taskFormErrMsg);
};

const createTaskFormControls = () => {
  const taskFormControls = createElement(
    'div',
    'edit-task-controls',
    'form-controls'
  );
  appendElement('edit-task-form', taskFormControls);
  const saveTaskBtn = createElement(
    'button',
    'save-task-edit-btn',
    null,
    'Save'
  );
  appendElement('edit-task-controls', saveTaskBtn);
  const cancelTaskBtn = createElement(
    'button',
    'cancel-task-edit-btn',
    null,
    'Cancel'
  );
  appendElement('edit-task-controls', cancelTaskBtn);
};

const createEditTaskForm = (projectListIndex, taskListIndex) => {
  createTaskFormContainer();
  createTaskFormBody();
  createTaskFromHeader();
  createTaskFormInputs(projectListIndex, taskListIndex);
  createTaskFormControls();
  addListenerSaveTaskEditBtn(projectListIndex, taskListIndex);
  addListenerCancelTaskEditBtn();
};

export default createEditTaskForm;
