import loadPageFrame from './modules/page-frame';
import getProjectsArray from './utils/local-storage-interface';
import './styles/styles.css';

const init = _ => {
    loadPageFrame();
    const projectsArray = getProjectsArray();
}

init();

console.log(`This is the ToDo List!`);