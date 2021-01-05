import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';
import selectElement from '../utils/element-selector';
import addListenerProjectListItem from '../listeners/project-list-item';
import { switchProjectFocus } from './focus';
import addListenerAddTaskBtn from '../listeners/add-task-btn';
import addListenerProjectDeleteBtn from '../listeners/delete-project-btn';
import addListenerProjectEditBtn from '../listeners/edit-project-btn';

const renderProjects = (projectsArray, projectToFocus) => {
    const projectsList = selectElement('projects-list');
    projectsList.classList.add('no-click');
    while (projectsList.lastElementChild) {
        projectsList.removeChild(projectsList.lastElementChild);
    }
    let i = 0;
    projectsArray.forEach(project => {
        const projectDiv = createElement('li', `project-list-item-${i + 1}`, 'project-list-item');
        const listItemName = createElement('span', `item-list-name-${i + 1}`, 'item-list-name', project.getProjectName());
        const deleteProjectBtn = createElement('div', `delete-project-btn-${i + 1}`, 'delete-project-btn');
        const deleteProjectIcon = createElement('span', `delete-project-icon-${i + 1}`, 'material-icons', 'delete');
        deleteProjectIcon.classList.add('delete-project-icon');
        deleteProjectBtn.classList.add('hidden');
        const editProjectBtn = createElement('div', `edit-project-btn-${i + 1}`, 'edit-project-btn');
        const editProjectIcon = createElement('span', `edit-project-icon-${i + 1}`, 'material-icons', 'edit');
        editProjectIcon.classList.add('edit-project-icon');
        editProjectBtn.classList.add('hidden');
        appendElement('projects-list', projectDiv);
        appendElement(`project-list-item-${i + 1}`, listItemName);
        appendElement(`project-list-item-${i + 1}`, editProjectBtn);
        appendElement(`edit-project-btn-${i + 1}`, editProjectIcon);
        appendElement(`project-list-item-${i + 1}`, deleteProjectBtn);
        appendElement(`delete-project-btn-${i + 1}`, deleteProjectIcon);
        addListenerProjectListItem(`project-list-item-${i + 1}`);
        addListenerProjectDeleteBtn(`delete-project-btn-${i + 1}`, i);
        addListenerProjectEditBtn(`edit-project-btn-${i + 1}`, i);
        i++;
    })
    if (projectToFocus != null) {
        const listItems = projectsList.getElementsByTagName('li');
        if (listItems.length > 0) {
            switchProjectFocus(projectToFocus);

            renderTasks(projectsArray, projectToFocus);
        }
    }

    projectsList.classList.remove('no-click');
}

const renderTasks = (projectsArray, projectToFocus) => {
    console.log(projectToFocus);
    const taskList = selectElement('task-list');
    const listIndex = projectToFocus.substr(projectToFocus.length - 1);
    const arrayIndex = parseInt(listIndex) - 1;
    console.log(`array-index: ${arrayIndex}`);
    while (taskList.lastElementChild) {
        taskList.removeChild(taskList.lastElementChild);
    }
    let projectTasks = [];
    projectTasks = projectsArray[arrayIndex].getProjectTasks();
    console.log('let us see the state of projectsArray');
    console.log(projectsArray);
    console.log('let us see the state of projectTasks');
    console.log(projectTasks);
    // let i = 0;
    // projectTasks.forEach(task => {
    //     const taskDiv = createElement('li', `task-list-item-${i}`, `task-list-item`);
    //     const taskItemName = createElement('span', `task-name-${i+1}, 'task-name`, projectTasks[i].getTaskName());

    //     i++
    // })
}

export default renderProjects;