import createProject from './project';
import { projectsArray } from '../index';

const setupLocalStorage = () => {
    console.log('setting up database...')
    const data = JSON.parse(localStorage.getItem('projects') || '[]');
    if (data.length === 0) {
        data.push(createProject('Test Project Name', 'Test Project Desc'));
    }
    return data;
}

const updateLocalStorage = () => {
    console.log('updating localStorage...')
    localStorage.clear();
    const data = [];
    projectsArray.forEach(project => {
        data.push({
            name: project.getProjectName(),
            desc: project.getProjectDesc()
        })
    })
    localStorage.setItem('projects', JSON.stringify(data));
    console.log('updated data set in localStorage');
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
    console.log('pushing project to projectsArray...')
    projectsArray.push(project);
    console.log('pushed to array')
    updateLocalStorage(projectsArray);
    console.log('localStorage updated!')
}

export {
    setupLocalStorage,
    updateLocalStorage,
    updateProjectsArray,
    pushProjectToArray
}