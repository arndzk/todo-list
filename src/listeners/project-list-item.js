import selectElement from "../utils/element-selector";
import { projectsArray } from '../index';

const addListenerProjectListItem = (projectListItem) => {
    console.log(projectListItem)
    const listItem = selectElement(projectListItem);
    console.log(listItem)
    listItem.addEventListener('click', () => {
        const projectList = selectElement('projects-list');
        const listItems = projectList.getElementsByTagName('li');
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].classList.remove('project-list-item-focused');
        }
        listItem.classList.add('project-list-item-focused');
        const projectHeader = selectElement('project-header');
        const projectDesc = selectElement('project-desc');
    });
}

export default addListenerProjectListItem;