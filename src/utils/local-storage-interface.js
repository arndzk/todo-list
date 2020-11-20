import ProjectsList from '../modules/projects-list';

const getProjectsArray = _ => {
    if ( !('projects-array' in localStorage) ) {
        let newProjectsList = new ProjectsList();
        window.localStorage.setItem('projects-list', JSON.stringify(newProjectsList));
    }
    return JSON.parse(window.localStorage.getItem('projects-list'));
}

export default getProjectsArray;