import selectElement from '../utils/element-selector';
import { validateTextInput } from '../utils/validator';
import createTask from '../modules/task';
import { pushTaskToProject } from '../modules/local-storage';
import removeElement from '../utils/element-remover';

const regEx = {
    name: /^[.,:!?'-À-ÿ\w\s]{1,20}$/,
    description: /^[.,:!?'-À-ÿ\w\s]{1,60}$/,
}

const addListenerSaveTaskBtn = (listIndex) => {
    console.log(listIndex);
    const saveTaskBtn = selectElement('save-task-btn');
    saveTaskBtn.onclick = function () {
        const name = selectElement('add-task-name-input');
        const desc = selectElement('add-task-desc-input');
        const dueDate = selectElement('add-task-date-input');
        const priorities =  selectElement('add-task-priority-input');
        const priority = getPriority(priorities);
        const errMsg = selectElement('add-task-err-msg');
        if (
            validateTextInput(regEx.name, name) === true &&
            validateTextInput(regEx.desc, desc) === true && 
            validatePriority(priority) === true &&
            validateDueDate(dueDate) === true
        ) {
            errMsg.classList.add('hidden');
            const newTask = createTask(name.value, desc.value, priority, date.value);
            console.log('will now see the object name');
            console.log(newTask.getTaskName())
            pushTaskToProject(newTask, listIndex);
            closeForm();
        } else {
            if (errMsg.classList.contains('hidden')) {
                errMsg.classList.remove('hidden');
            }
            if (name.value === null || name.value === '') {
                name.classList.add('empty-input');
            }
            if (desc.value === null || desc.value === '') {
                desc.classList.add('empty-input');
            }
        }

    }
}

const closeForm = _ => {
    const sidePanel = document.getElementById('side-panel');
    sidePanel.classList.remove('inactive', 'blurred');
    const centerPanel = document.getElementById('center-panel');
    centerPanel.classList.remove('inactive', 'blurred');
    removeElement('main', 'add-task-container');
}

export default addListenerSaveTaskBtn;