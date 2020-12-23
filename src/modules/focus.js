import selectElement from '../utils/element-selector';
import { projectsArray } from '../index';

const switchProjectFocus = (projectToFocus) => {
    console.log('changing focus');
    console.log('getting project list')
    const projectList = selectElement('projects-list');
    console.log('getting projects dom elements')
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
    console.log('all projects are now unfocused');
    console.log(`project to focus: ${projectToFocus}`);
    const project = selectElement(projectToFocus);
    console.log(project);
    project.classList.add('project-list-item-focused');
    console.log('DOM element focused')
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

    console.log(listIndex);
    const projectDeleteButton = selectElement(`delete-project-btn-${listIndex + 1}`);
    const projectEditButton = selectElement(`edit-project-btn-${listIndex + 1}`);
    projectDeleteButton.classList.remove('hidden');
    projectEditButton.classList.remove('hidden');
}

export {
    switchProjectFocus
}