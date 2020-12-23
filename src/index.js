import loadPageFrame from './modules/page-frame';
import loadSidePanel from './modules/side-panel';
import loadCenterPanel from './modules/center-panel';
import createProject from './modules/project';
import renderProjects from './modules/render';
import './styles/styles.css';

const init = _ => {
    loadPageFrame();
    loadSidePanel();
    loadCenterPanel();
}

const setupLocalStorage = (projectsArray) => {
    const data = JSON.parse(localStorage.getItem('projects') || '[]');
    if (data.length === 0) {
        localStorage.setItem('projects', JSON.stringify(data));
    } else {
        data.forEach(project => {
            projectsArray.push(createProject(project.name, project.desc));
        })
    }
}

init();

let projectsArray = [];
setupLocalStorage(projectsArray);
renderProjects(projectsArray, `project-list-item-0`);

export {
    projectsArray
}