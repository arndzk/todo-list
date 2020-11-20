import loadPageFrame from './modules/page-frame';
//import getProjectsArray from './utils/local-storage-interface';
import LocalStorageController from './modules/controllers/LocalStorageController';
import './styles/styles.css';

const init = _ => {
    loadPageFrame();
}

init();
const localStorageController = new LocalStorageController;
localStorageController.init();

console.log(`This is the ToDo List!`);