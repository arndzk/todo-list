import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';
import selectElement from '../utils/element-selector';
import addListenerProjectListItem from '../listeners/project-list-item';

const renderProjects = (projectsArray) => {
    const projectsList = selectElement('projects-list');
    while (projectsList.lastElementChild) {
        projectsList.removeChild(projectsList.lastElementChild);
    }
    let i = 0;
    projectsArray.forEach(project => {
        const projectDiv = createElement(
            'li', 
            `project-list-item-${i}`, 
            'project-list-item'
        );
        const listItemName = createElement('span', `item-list-name--${i+1}`, 'item-list-name', project.getProjectName());
        const deleteProjectBtn = createElement('div', `delete-project-btn-${i+1}`, 'delete-project-btn');
        const deleteProjectIcon = createElement('span', `delete-project-icon-${i+1}`, 'material-icons', 'delete');
        deleteProjectIcon.classList.add('delete-project-icon');
        deleteProjectBtn.classList.add('hidden');
        const editProjectBtn = createElement('div', `edit-project-btn-${i+1}`, 'edit-project-btn');
        const editProjectIcon = createElement('span', `edit-project-icon-${i+1}`, 'material-icons', 'edit');
        editProjectIcon.classList.add('edit-project-icon');
        editProjectBtn.classList.add('hidden');
        appendElement('projects-list', projectDiv);
        appendElement(`project-list-item-${i}`, listItemName);
        appendElement(`project-list-item-${i}`, editProjectBtn);
        appendElement(`edit-project-btn-${i+1}`, editProjectIcon);
        appendElement(`project-list-item-${i}`, deleteProjectBtn);
        appendElement(`delete-project-btn-${i+1}`, deleteProjectIcon);
        addListenerProjectListItem(`project-list-item-${i}`);
        i++;
    })
}

export default renderProjects;