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
        let listIndex;
        for (let i = 0; i < listItems.length; i++) {
            console.log('looking for listIndex...')
            if (listItem.textContent === listItems[i].textContent) {
                listIndex = i;
            }
        }
        console.log(`listIndex: ${listIndex}`)
        const projectHeader = selectElement('project-title');
        projectHeader.textContent = '';
        projectHeader.textContent = projectsArray[listIndex].getProjectName();
        const projectDesc = selectElement('project-desc');
        console.log('project-desc selected!');
        projectDesc.textContent = '';
        projectDesc.textContent = projectsArray[listIndex].getProjectDesc();
    });
}

export default addListenerProjectListItem;