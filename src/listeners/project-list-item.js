import selectElement from "../utils/element-selector";
import { switchProjectFocus } from "../modules/focus";
import { projectsArray } from '../index';

const addListenerProjectListItem = (projectListItem) => {
    const listItem = selectElement(projectListItem);
    listItem.addEventListener('click', () => {
        const idOfElement = listItem.getAttribute('id');
        console.log('is it here, maybe?')
        switchProjectFocus(idOfElement);
    });
}

export default addListenerProjectListItem;