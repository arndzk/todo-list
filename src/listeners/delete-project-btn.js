import selectElement from "../utils/element-selector";
import { switchProjectFocus } from "../modules/focus";
import { projectsArray } from '../index';
import { updateLocalStorage } from "../modules/local-storage";
import renderProjects from "../modules/render";

const addListenerDeleteProjectBtn = (projectDeleteBtn, indexOfElement) => {
    const deleteBtn = selectElement(projectDeleteBtn);
    deleteBtn.addEventListener('click', () => {
        projectsArray.splice(indexOfElement, 1);
        updateLocalStorage();
        renderProjects(projectsArray, `project-list-item-0`);
    });
}

export default addListenerDeleteProjectBtn;