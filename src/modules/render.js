import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';
import selectElement from '../utils/element-selector';
import addListenerProjectListItem from '../listeners/project-list-item';

const renderProjects = (projectsArray) => {
    console.log('rendering projects...')
    const projectsList = selectElement('projects-list');
    while (projectsList.lastElementChild) {
        projectsList.removeChild(projectsList.lastElementChild);
    }
    console.log('projectsList clear...')
    let i = 0;
    projectsArray.forEach(project => {
        const projectDiv = createElement(
            'li', 
            `project-list-item-${i}`, 
            'project-list-item'
        );
        console.log('creating delete-project-btn...')
        const listItemName = createElement('span', `item-list-name--${i+1}`, 'item-list-name', project.getProjectName());
        const deleteProjectBtn = createElement('div', `delete-project-btn-${i+1}`, 'delete-project-btn');
        const deleteProjectIcon = createElement('span', `delete-project-icon-${i+1}`, 'material-icons', 'delete');
        deleteProjectIcon.classList.add('delete-project-icon');
        console.log('delete-project-btn created!')
        console.log('appendingn delete button');
        appendElement('projects-list', projectDiv);
        appendElement(`project-list-item-${i}`, listItemName);
        appendElement(`project-list-item-${i}`, deleteProjectBtn);
        appendElement(`delete-project-btn-${i+1}`, deleteProjectIcon);
        console.log('project appended!');
        console.log('adding listener...')
        addListenerProjectListItem(`project-list-item-${i}`);
        console.log('listener added!')
        i++;
    })
    // const allProjects = [...document.querySelectorAll('.project-list-item')];
    // if (allProjects.length === 1) {
    //     allProjects[0].classList.add('project-list-item-focused');
    // } else {
    //     allProjects[allProjects.length - 1].classList.add('project-list-item-focused');
    // }
    console.log('projectsList rendered!')
}

export default renderProjects;