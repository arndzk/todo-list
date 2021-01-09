import selectElement from '../utils/element-selector';
import { projectsArray } from '../index';
import { renderTasks } from './render';
import addEventListenerAddTaskBtn from '../listeners/add-task-btn';

const switchProjectFocus = (projectToFocus) => {
    const projectList = selectElement('projects-list');
    const listItems = projectList.getElementsByTagName('li');
    // Make sure all list items are unfocused
    for (let i = 0; i < listItems.length; i++) {
        // Remove focused class from list items
        listItems[i].classList.remove('project-list-item-focused');
        // Make list item buttons hiddden
        let listItemDeleteButton = selectElement(`delete-project-btn-${i + 1}`);
        listItemDeleteButton.classList.add('hidden');
        let listItemEditButton = selectElement(`edit-project-btn-${i + 1}`);
        listItemEditButton.classList.add('hidden');
    }
    const project = selectElement(projectToFocus);
    project.classList.add('project-list-item-focused');
    let listIndex;
    for (let i = 0; i < listItems.length; i++) {
        if (project.textContent === listItems[i].textContent) {
            listIndex = i;
        }
    }
    const projectHeader = selectElement('project-title');
    projectHeader.textContent = '';
    projectHeader.textContent = projectsArray[listIndex].getProjectName();
    const projectDesc = selectElement('project-desc');
    projectDesc.textContent = '';
    projectDesc.textContent = projectsArray[listIndex].getProjectDesc();

    const addTaskBtn = selectElement('add-task-btn');
    addTaskBtn.outerHTML = addTaskBtn.outerHTML;
    addEventListenerAddTaskBtn(listIndex);

    const projectDeleteButton = selectElement(`delete-project-btn-${listIndex + 1}`);
    const projectEditButton = selectElement(`edit-project-btn-${listIndex + 1}`);
    projectDeleteButton.classList.remove('hidden');
    projectEditButton.classList.remove('hidden');

    renderTasks(projectsArray, projectToFocus);
}

export {
    switchProjectFocus
}