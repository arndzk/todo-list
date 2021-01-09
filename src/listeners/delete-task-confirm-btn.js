import { projectsArray } from '../index';
import { updateLocalStorage } from '../modules/local-storage';
import { renderTasksfromEdit } from '../modules/render';
import selectElement from '../utils/element-selector';
import removeElement from '../utils/element-remover';

const addListenerTaskDeleteConfirmBtn = (projectListIndex, taskListIndex) => {
    console.log('adding confirm listener...')
    const confirmBtn = selectElement('task-delete-confirm-btn');
    confirmBtn.addEventListener('click', () => {
        let taskList = projectsArray[projectListIndex].getProjectTasks();
        taskList.splice(taskListIndex, 1);
        console.log('calling updateLocalStorage from taskDeleteConfirmBtn')
        updateLocalStorage();
        closePrompt(projectListIndex);
    }, false);
}

const closePrompt = (projectListIndex) => {
    renderTasksfromEdit(projectsArray, `task-list-item-${projectListIndex}`);
    const sidePanel = document.getElementById('side-panel');
    sidePanel.classList.remove('inactive', 'blurred');
    const centerPanel = document.getElementById('center-panel');
    centerPanel.classList.remove('inactive', 'blurred');
    removeElement('main', 'delete-prompt-container');
}

export default addListenerTaskDeleteConfirmBtn;