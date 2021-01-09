import selectElement from '../utils/element-selector';
import { validateTextInput, validatePriority, validateDueDate } from '../utils/validator';
import getPriority from '../utils/priority-getter';
import createTask from '../modules/task';
import { pushTaskToProject } from '../modules/local-storage';
import { renderTasks } from '../modules/render';
import removeElement from '../utils/element-remover';
import { projectsArray } from '../index';

const regEx = {
    name: /^[.,:!?'-À-ÿ\w\s]{1,20}$/,
    description: /^[.,:!?'-À-ÿ\w\s]{1,60}$/,
}

const addListenerSaveTaskBtn = (listIndex) => {
    console.log(`listIndex: ${listIndex}`);
    const saveTaskBtn = selectElement('save-task-btn');
    saveTaskBtn.onclick = function () {
        const name = selectElement('add-task-name-input');
        const desc = selectElement('add-task-desc-input');
        const dueDate = selectElement('add-task-date-input');
        const priorities =  selectElement('add-task-priority-input');
        console.log('calling getPriority()');
        const priority = getPriority(priorities);
        const errMsg = selectElement('add-task-err-msg');
        if (
            validateTextInput(regEx.name, name) === true &&
            validateTextInput(regEx.description, desc) === true && 
            validateDueDate(dueDate) === true &&
            validatePriority(priority) === true
        ) {
            console.log('everything validates')
            errMsg.classList.add('hidden');
            const newTask = createTask(name.value, desc.value, dueDate.value, priority);
            console.log('will now see the object fields');
            console.log(newTask.getTaskName())
            console.log(newTask.getTaskDesc())
            console.log(newTask.getTaskPriority())
            console.log(newTask.getTaskDueDate())
            console.log(newTask.getIsDone())
            pushTaskToProject(newTask, listIndex);
            closeForm(listIndex);
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

const closeForm = (listIndex) => {
    const taskList = selectElement('task-list');
    const listItems = taskList.getElementsByTagName('li');
    console.log('task saved, re-rendering projects...')
    renderTasks(projectsArray, `task-list-item-${listIndex}`);
    const sidePanel = document.getElementById('side-panel');
    sidePanel.classList.remove('inactive', 'blurred');
    const centerPanel = document.getElementById('center-panel');
    centerPanel.classList.remove('inactive', 'blurred');
    removeElement('main', 'add-task-container');
}

export default addListenerSaveTaskBtn;