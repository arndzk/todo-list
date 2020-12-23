import selectElement from "../utils/element-selector";
import { projectsArray } from '../index';

const addListenerProjectListItem = (projectListItem) => {
    const listItem = selectElement(projectListItem);
    listItem.addEventListener('click', () => {
        const projectList = selectElement('projects-list');
        const listItems = projectList.getElementsByTagName('li');
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].classList.remove('project-list-item-focused');
            let listItemDeleteButton = selectElement(`delete-project-btn-${i + 1}`);
            listItemDeleteButton.classList.add('hidden');
            let listItemEditButton = selectElement(`edit-project-btn-${i + 1}`);
            listItemEditButton.classList.add('hidden');
        }
        listItem.classList.add('project-list-item-focused');
        let listIndex;
        for (let i = 0; i < listItems.length; i++) {
            if (listItem.textContent === listItems[i].textContent) {
                listIndex = i;
            }
        }
        const projectHeader = selectElement('project-title');
        projectHeader.textContent = '';
        projectHeader.textContent = projectsArray[listIndex].getProjectName();
        const projectDesc = selectElement('project-desc');
        projectDesc.textContent = '';
        projectDesc.textContent = projectsArray[listIndex].getProjectDesc();

        console.log(listIndex);
        const projectDeleteButton = selectElement(`delete-project-btn-${listIndex + 1}`);
        const projectEditButton = selectElement(`edit-project-btn-${listIndex + 1}`);
        projectDeleteButton.classList.remove('hidden');
        projectEditButton.classList.remove('hidden');
    });
}

export default addListenerProjectListItem;