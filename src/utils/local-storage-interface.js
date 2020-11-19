const setProjectsArray = _ => {
    let newProjectsArray = [];
    window.localStorage.setItem('projects-array', JSON.stringify(newProjectsArray));
}

const getProjectsArray = _ => {
    if ( !('projects-array' in localStorage) ) {
        setProjectsArray();
    }
    return JSON.parse(window.localStorage.getItem('projects-array'));
}

export default getProjectsArray;