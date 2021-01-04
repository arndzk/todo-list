import selectElement from '../utils/element-selector';
import { validateTextInput } from '../utils/validator';
import createProject from '../modules/project';
import { pushProjectToArray, updateLocalStorage } from '../modules/local-storage';
import renderProjects from '../modules/render';
import { projectsArray } from '../index';
import removeElement from '../utils/element-remover';
import { switchProjectFocus } from '../modules/focus';

const regEx = {
    name: /^[.,:!?'-À-ÿ\w\s]{1,20}$/,
    description: /^[.,:!?'-À-ÿ\w\s]{1,60}$/,
}

const addListenerSaveProjectBtn = () => {
    const saveProjectBtn = selectElement('save-project-btn');
    saveProjectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const form = selectElement('add-project-form');
        const name = selectElement('add-project-name-input');
        const desc = selectElement('add-project-desc-input');
        const errMsg = selectElement('add-project-err-msg');
        if (
            validateTextInput(regEx.name, name) === true
            &&
            validateTextInput(regEx.description, desc) === true
        ) {
            errMsg.classList.add('hidden');
            const newProject = createProject(name.value, desc.value);
            pushProjectToArray(newProject);
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
    removeElement('main', 'add-project-container');
}

export default addListenerSaveProjectBtn;