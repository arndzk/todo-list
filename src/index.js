import loadPageFrame from './modules/page-frame';
import loadSidePanel from './modules/side-panel';
import loadCenterPanel from './modules/center-panel';
import './styles/styles.css';

const init = _ => {
    loadPageFrame();
    loadSidePanel();
    loadCenterPanel();
}

init();