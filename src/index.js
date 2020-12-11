import loadPageFrame from './modules/page-frame';
import loadSidePanel from './modules/side-panel';
import './styles/styles.css';

const init = _ => {
    loadPageFrame();
    loadSidePanel();
}

init();
console.log(`This is the ToDo List!`);