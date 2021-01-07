import createProject from './project';
import createTask from './task';
import { projectsArray } from '../index';

const setupLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem('projects') || '[]');
    if (data.length === 0) {
        data.push(createProject('Test Project Name', 'Test Project Desc', []));
    }
    return data;
}

const updateLocalStorage = () => {
    debugger;
    console.log('updating local storage')
    localStorage.clear();
    const data = [];
    projectsArray.forEach(project => {
        const taskList = project.getProjectTasks();
        console.log(`tasklist in ${project.getProjectName()}:`)
        console.log(taskList);
        data.push({
            name: project.getProjectName(),
            desc: project.getProjectDesc(),
            tasks: getTasks(taskList),
        })
    })
    localStorage.setItem('projects', JSON.stringify(data));
    console.log('before updating projectsArray')
    console.log(localStorage)
    updateProjectsArray();
    console.log('projectsArray updated');
}

const updateProjectsArray = () => {
    projectsArray = [];
    const data = JSON.parse(localStorage.getItem('projects'));
    data.forEach(project => {
        const taskList = [];
        project.tasks.forEach(task => {
            taskList.push(createTask(task.name));
        })
        projectsArray.push(createProject(project.name, project.desc, taskList));
    })
}

const pushProjectToArray = (project) => {
    projectsArray.push(project);
    console.log('calling updateLocalStorage from pushProjectToArray');
    updateLocalStorage(projectsArray);
}

const pushTaskToProject = (task, listIndex) => {
    console.log(task);
    console.log(`pushing ${task} to ${listIndex}`);
    projectsArray[listIndex].addProjectTask(task);
    console.log('task pushed')
    console.log('calling updateLocalStorage from pushTaskToProject');
    updateLocalStorage(projectsArray);
}

const getTasks = (taskList) => {
    const tasksArray = [];
    taskList.forEach(task => {
        console.log('task pushed to taskArray:')
        console.log(task.getTaskName());
        tasksArray.push({
            name: task.getTaskName(),
        })
    })
    return tasksArray;
}

export {
    setupLocalStorage,
    updateLocalStorage,
    updateProjectsArray,
    pushProjectToArray,
    pushTaskToProject
}