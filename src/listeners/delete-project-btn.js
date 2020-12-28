import selectElement from "../utils/element-selector";
import { switchProjectFocus } from "../modules/focus";
import { projectsArray } from '../index';
import { updateLocalStorage } from "../modules/local-storage";
import renderProjects from "../modules/render";

const addListenerDeleteProjectBtn = (projectDeleteBtn, indexOfElement) => {
    console.log(projectDeleteBtn);
    const deleteBtn = selectElement(projectDeleteBtn);
    console.log(deleteBtn)
    console.log('selected proper button')
    deleteBtn.addEventListener('click', () => {
        projectsArray.splice(indexOfElement, 1);
        updateLocalStorage();
        renderProjects(projectsArray, `project-list-item-0`);
    });
}

export default addListenerDeleteProjectBtn;