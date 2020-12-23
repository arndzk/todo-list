import createProject from './project';
import { projectsArray } from '../index';

const setupLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem('projects') || '[]');
    if (data.length === 0) {
        data.push(createProject('Test Project Name', 'Test Project Desc'));
    }
    return data;
}

const updateLocalStorage = () => {
    localStorage.clear();
    const data = [];
    projectsArray.forEach(project => {
        data.push({
            name: project.getProjectName(),
            desc: project.getProjectDesc()
        })
    })
    localStorage.setItem('projects', JSON.stringify(data));
    updateProjectsArray();
}

const updateProjectsArray = () => {
    projectsArray = [];
    const data = JSON.parse(localStorage.getItem('projects'));
    data.forEach(project => {
        projectsArray.push(createProject(project.name, project.desc));
    })
}

const pushProjectToArray = (project) => {
    projectsArray.push(project);
    updateLocalStorage(projectsArray);
}

export {
    setupLocalStorage,
    updateLocalStorage,
    updateProjectsArray,
    pushProjectToArray
}