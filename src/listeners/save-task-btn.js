import selectElement from '../utils/element-selector';
import { validateTextInput } from '../utils/validator';
import createTask from '../modules/task';
import { pushTaskToProject, updateLocalStorage } from '../modules/local-storage';
import renderProjects from '../modules/render';
import { projectsArray } from '../index';
import removeElement from '../utils/element-remover';

const regEx = {
    name: /^[.,:!?'-À-ÿ\w\s]{1,20}$/,
    description: /^[.,:!?'-À-ÿ\w\s]{1,60}$/,
}

const addListenerSaveTaskBtn = (listIndex) => {
    const saveTaskBtn = selectElement('save-task-btn');
    saveTaskBtn.addEventListener('click', (e) => {
        console.log('attempting to save task')
        e.preventDefault();
        const form = selectElement('add-task-form');
        const name = selectElement('add-task-name-input');
        const errMsg = selectElement('add-task-err-msg');
        if (
            validateTextInput(regEx.name, name) === true
        ) {
            errMsg.classList.add('hidden');
            const newTask = createTask(name.value);
            pushTaskToProject(newTask, listIndex);
            updateLocalStorage();
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
    });
}

const closeForm = _ => {
    const projectList = selectElement('projects-list');
    const listItems = projectList.getElementsByTagName('li');
    renderProjects(projectsArray, `project-list-item-${listItems.length+1}`);
    const sidePanel = document.getElementById('side-panel');
    sidePanel.classList.remove('inactive', 'blurred');
    const centerPanel = document.getElementById('center-panel');
    centerPanel.classList.remove('inactive', 'blurred');
    removeElement('main', 'add-task-container');
}

export default addListenerSaveTaskBtn;