import selectElement from "../utils/element-selector";
import { switchProjectFocus } from "../modules/focus";
import { projectsArray } from '../index';
import { updateLocalStorage } from "../modules/local-storage";
import renderProjects from "../modules/render";
import clearCenterPanel from '../modules/clear-center-panel';
import createDeletePrompt from "../modules/prompt-delete-project";

const addListenerDeleteProjectBtn = (projectDeleteBtn, indexOfElement) => {
    const deleteBtn = selectElement(projectDeleteBtn);
    deleteBtn.addEventListener('click', () => {
        createDeletePrompt(indexOfElement);
    }, false);
}

export default addListenerDeleteProjectBtn;