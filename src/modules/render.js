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
            `project-list-item-${i+1}`, 
            'project-list-item',
            project.getProjectName()
        );
        //const deleteProjectBtn = createElement('button', `delete-project-btn-${i+1}`);
        appendElement('projects-list', projectDiv);
        console.log('project appended!');
        console.log('adding listener...')
        addListenerProjectListItem(`project-list-item-${i+1}`);
        console.log('listener added!')
        i++;
    })
    console.log('projectsList rendered!')
}

export default renderProjects;