import selectElement from '../utils/element-selector';
import { validateTextInput, validatePriority, validateDueDate } from '../utils/validator';
import getPriority from '../utils/priority-getter';
import createTask from '../modules/task';
import { pushTaskToProject, updateLocalStorage } from '../modules/local-storage';
import { renderTasks, renderTasksfromEdit } from '../modules/render';
import removeElement from '../utils/element-remover';
import { projectsArray } from '../index';

const regEx = {
    name: /^[.,:!?'-À-ÿ\w\s]{1,20}$/,
    description: /^[.,:!?'-À-ÿ\w\s]{1,60}$/,
}

const addListenerSaveTaskEditBtn = (projectListIndex, taskListIndex) => {
    console.log(`projectListIndex: ${projectListIndex}`);
    console.log(`taskListIndex: ${taskListIndex}`);
    const saveTaskEditBtn = selectElement('save-task-edit-btn');
    saveTaskEditBtn.onclick = function (e) {
        e.preventDefault();
        const name = selectElement('edit-task-name-input');
        const desc = selectElement('edit-task-desc-input');
        const dueDate = selectElement('edit-task-date-input');
        const priorities =  selectElement('edit-task-priority-input');
        console.log('calling getPriority()');
        const priority = getPriority(priorities);
        const errMsg = selectElement('edit-task-err-msg');
        if (
            validateTextInput(regEx.name, name) === true &&
            validateTextInput(regEx.description, desc) === true && 
            validateDueDate(dueDate) === true &&
            validatePriority(priority) === true
        ) {
            console.log('everything validates')
            errMsg.classList.add('hidden');
            let taskList = [];
            taskList = projectsArray[projectListIndex].getProjectTasks();
            console.log(taskList);
            taskList[taskListIndex].editTaskName(name.value);
            taskList[taskListIndex].editTaskDesc(desc.value);
            taskList[taskListIndex].editTaskDueDate(dueDate.value);
            taskList[taskListIndex].editTaskPriority(priority);
            updateLocalStorage();
            closeForm(projectListIndex);
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
            if (dueDate.value === null || dueDate.value === '' || validateDueDate(dueDate) === false) {
                dueDate.classList.add('empty-input');
            }
            if (priority === 'empty' || validatePriority(priority) === false) {
                priorities.classList.add('empty-input');
            }
        }

    }
}

const closeForm = (projectListIndex) => {;
    console.log('task saved, re-rendering projects...')
    renderTasksfromEdit(projectsArray, `task-list-item-${projectListIndex}`);
    const sidePanel = document.getElementById('side-panel');
    sidePanel.classList.remove('inactive', 'blurred');
    const centerPanel = document.getElementById('center-panel');
    centerPanel.classList.remove('inactive', 'blurred');
    removeElement('main', 'edit-task-container');
}

export default addListenerSaveTaskEditBtn;