import loadPageFrame from './modules/page-frame';
import './styles/styles.css';

const init = _ => {
    loadPageFrame();
}

init();

console.log(`This is the ToDo List!`);