import { projectsArray } from '../index';
import { updateLocalStorage } from '../modules/local-storage';
import clearCenterPanel from '../modules/clear-center-panel';
import renderProjects from '../modules/render';
import selectElement from '../utils/element-selector';
import removeElement from '../utils/element-remover';

const addListenerDeleteConfirmBtn = (indexOfElement) => {
    const confirmBtn = selectElement('delete-confirm-btn');
    confirmBtn.addEventListener('click', () => {
        projectsArray.splice(indexOfElement, 1);
        console.log('array spliced')
        updateLocalStorage();
        console.log('storage updated')
        clearCenterPanel();
        console.log('center panel cleared')
        closePrompt();
    }, false);
}

const closePrompt = () => {
    renderProjects(projectsArray, `project-list-item-1`);
    console.log('post deletion rendering complete')
    const sidePanel = document.getElementById('side-panel');
    sidePanel.classList.remove('inactive', 'blurred');
    const centerPanel = document.getElementById('center-panel');
    centerPanel.classList.remove('inactive', 'blurred');
    removeElement('main', 'delete-prompt-container');
}

export default addListenerDeleteConfirmBtn;