import loadPage from './modules/initial-page-load';
import './styles/style.css';

console.log(`This is the ToDo List!`);

 init();

 function init() {
    console.log(`inside init()`);
    loadPage();
 }