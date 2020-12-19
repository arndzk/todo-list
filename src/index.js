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
    console.log('setting up database...')
    const data = JSON.parse(localStorage.getItem('projects') || '[]');
    console.log(`${data}`);
    if (data.length === 0) {
        projectsArray.push(createProject('Test Project Name', 'Test Project Desc'));
        projectsArray.forEach(project => {
            data.push({
                name: project.getProjectName(),
                desc: project.getProjectDesc()
            });
        });
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
console.log(projectsArray);
projectsArray.forEach(project => {
    console.log(`${project.getProjectName()}`)
})
renderProjects(projectsArray);

export {
    projectsArray
}