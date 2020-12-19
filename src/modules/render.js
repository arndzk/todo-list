import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';
import selectElement from '../utils/element-selector';
import addListenerProjectListItem from '../listeners/project-list-item';
import addListenerCancelProjectBtn from '../listeners/cancel-project-btn';

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
            'project-list-item',
            project.getProjectName()
        );
        //const deleteProjectBtn = createElement('button', `delete-project-btn-${i+1}`);
        appendElement('projects-list', projectDiv);
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