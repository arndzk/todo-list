import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';
import addListenerCancelTaskBtn from '../listeners/cancel-task-btn';

const createTaskFormContainer = _ => {
    const taskFormContainer = createElement('div', 'add-task-container');
    appendElement('main', taskFormContainer);
}

const createTaskFormBody = _ => {
    const taskFormBody = createElement('form', 'add-task-form');
    taskFormBody.setAttribute('action', '');
    appendElement('add-task-container', taskFormBody);
}

const createTaskFormControls = _ => {
    const taskFormControls = createElement('div', 'add-task-controls');
    appendElement('add-task-form', taskFormControls);
    const saveTaskBtn = createElement('button', 'save-task-btn', null, 'Save');
    appendElement('add-task-controls', saveTaskBtn);
    const cancelTaskBtn = createElement('button', 'cancel-task-btn', null, 'Cancel');
    appendElement('add-task-controls', cancelTaskBtn);
}

const createAddTaskForm = () => {
    console.log('creating add task form...')
    createTaskFormContainer();
    createTaskFormBody();
    createTaskFormControls();
    //addListenerSaveTaskBtn();
    addListenerCancelTaskBtn();
}

export default createAddTaskForm;