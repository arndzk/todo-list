import buildSignature from '../utils/signature-builder';
import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';

const createHeader = _ => {
    const header = createElement('header', 'header');
    appendElement('content', header);
}
const createSidePanel = _ => {
    const sidePanel = createElement('div', 'side-panel');
    appendElement('content', sidePanel);
}
const createMainPanel = _ => {
    const mainPanel = createElement('main', 'main-panel');
    appendElement('content', mainPanel);
}
const createFooter = _ => {
    const footer = createElement('footer', 'footer');
    buildSignature(footer);
    appendElement('content', footer);
}
const loadPageFrame = _ => {
    createHeader();
    createSidePanel();
    createMainPanel();
    createFooter();
}

export default loadPageFrame;