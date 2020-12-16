import loadPageFrame from './modules/page-frame';
import loadSidePanel from './modules/side-panel';
import loadCenterPanel from './modules/center-panel';
import { setupDatabase } from './modules/local-storage';
import './styles/styles.css';

const init = _ => {
    loadPageFrame();
    loadSidePanel();
    loadCenterPanel();

    const projects = [];
    setupDatabase(projects);
}

init();