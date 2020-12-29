import { projectsArray } from '../index';
import { updateLocalStorage } from "../modules/local-storage";
import renderProjects from "../modules/render";
import selectElement from '../utils/element-selector';
import createEditProjectForm from "../modules/form-edit-project";

const addListenerEditProjectBtn = (projectEditBtn, indexOfElement) => {
    console.log(projectEditBtn);
    const editBtn = selectElement(projectEditBtn);
    console.log(editBtn)
    console.log('selected proper edit button')
    editBtn.addEventListener('click', () => {
        const sidePanel = document.getElementById('side-panel');
        sidePanel.classList.add('inactive', 'blurred');
        const centerPanel = document.getElementById('center-panel');
        centerPanel.classList.add('inactive', 'blurred');
        createEditProjectForm();
    });
}

export default addListenerEditProjectBtn;