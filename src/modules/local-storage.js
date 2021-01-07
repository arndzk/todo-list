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
    console.log('updating local storage')
    localStorage.clear();
    const data = [];
    projectsArray.forEach(project => {
        let taskList = project.getProjectTasks();
        console.log('tasklist to update')
        console.log(taskList);
        let taskListString = JSON.stringify(taskList);
        console.log(taskListString)
        console.log(JSON.stringify(project));
        data.push({
            name: project.getProjectName(),
            desc: project.getProjectDesc(),
            tasks: project.getProjectTasks()
        })
    })
    localStorage.setItem('projects', JSON.stringify(data));
    console.log('before updating projectsArray')
    console.log(localStorage)
    updateProjectsArray();
}

const updateProjectsArray = () => {
    projectsArray = [];
    const data = JSON.parse(localStorage.getItem('projects'));
    data.forEach(project => {
        
        projectsArray.push(createProject(project.name, project.desc, project.tasks));
    })
    projectsArray.forEach(project => {
        console.log(project.getProjectTasks());
    })
}

const pushProjectToArray = (project) => {
    projectsArray.push(project);
    updateLocalStorage(projectsArray);
}

const pushTaskToProject = (task, listIndex) => {
    console.log(task);
    console.log(`pushing ${task} to ${listIndex}`);
    projectsArray[listIndex].addProjectTask(task);
    console.log('task pushed')
    updateLocalStorage(projectsArray);
}

export {
    setupLocalStorage,
    updateLocalStorage,
    updateProjectsArray,
    pushProjectToArray,
    pushTaskToProject
}