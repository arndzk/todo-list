import selectElement from "../utils/element-selector";
import { switchProjectFocus } from "../modules/focus";
import { projectsArray } from '../index';

const addListenerProjectListItem = (projectListItem) => {
    const listItem = selectElement(projectListItem);
    listItem.addEventListener('click', () => {
        const idOfElement = listItem.getAttribute('id');
        switchProjectFocus(idOfElement);
    });
}

export default addListenerProjectListItem;