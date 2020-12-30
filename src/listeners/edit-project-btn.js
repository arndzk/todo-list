import { projectsArray } from '../index';
import { updateLocalStorage } from "../modules/local-storage";
import renderProjects from "../modules/render";
import selectElement from '../utils/element-selector';
import createEditProjectForm from "../modules/form-edit-project";

const addListenerEditProjectBtn = (projectEditBtn, indexOfElement) => {
    const editBtn = selectElement(projectEditBtn);
    editBtn.addEventListener('click', () => {
        const sidePanel = document.getElementById('side-panel');
        sidePanel.classList.add('inactive', 'blurred');
        const centerPanel = document.getElementById('center-panel');
        centerPanel.classList.add('inactive', 'blurred');
        createEditProjectForm(indexOfElement);
    });
}

export default addListenerEditProjectBtn;