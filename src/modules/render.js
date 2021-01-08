import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';
import selectElement from '../utils/element-selector';
import addListenerProjectListItem from '../listeners/project-list-item';
import { switchProjectFocus } from './focus';
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
            console.log('calling switchProjectFocus from renderProjects')
            switchProjectFocus(projectToFocus);
            // console.log('calling renderTasks from renderProjects')
            // renderTasks(projectsArray, projectToFocus);
        }
    }

    projectsList.classList.remove('no-click');
}

const renderTasks = (projectsArray, projectToFocus) => {
    console.log('rendering tasks...')
    console.log(projectToFocus);
    const taskList = selectElement('task-list');
    const listIndex = projectToFocus.substr(projectToFocus.length - 1);
    const arrayIndex = parseInt(listIndex) - 1;
    console.log(`array-index: ${arrayIndex}`);
    while (taskList.lastElementChild) {
        taskList.removeChild(taskList.lastElementChild);
    }
    console.log('task-list reset')
    let projectTasks = [];
    projectTasks = projectsArray[arrayIndex].getProjectTasks();
    console.log('let us see the state of projectsArray');
    console.log(projectsArray);
    console.log('let us see the state of projectTasks');
    console.log(projectTasks);
    let i = 0;
    projectTasks.forEach(task => {
        const taskDiv = createElement('li', `task-list-item-${i}`, `task-list-item`);
        console.log('creating taskCheck')
        const taskCheck = createElement('div', `task-check-${i}`, 'task-check');
        if (task.getTaskPriority() === 'low') {
            console.log(task.getTaskPriority());
            taskCheck.classList.add('low-check');
        } else if (task.getTaskPriority() === 'normal') {
            console.log(task.getTaskPriority());
            taskCheck.classList.add('normal-check');
        } else if (task.getTaskPriority() === 'high') {
            console.log(task.getTaskPriority());
            taskCheck.classList.add('high-check');
        }
        console.log('created taskCheck')
        appendElement('task-list', taskDiv);
        appendElement(`task-list-item-${i}`, taskCheck);
        const taskItemName = createElement('span', `task-name-${i}`, 'task-name', task.getTaskName());
        appendElement(`task-list-item-${i}`, taskItemName);
        const taskDueDate = createElement('span', `task-due-date-${i}`, 'task-due-date', task.getTaskDueDate());
        appendElement(`task-list-item-${i}`, taskDueDate);
        i++;
    })
}

export {
    renderProjects,
    renderTasks
}