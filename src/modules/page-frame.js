import buildSignature from '../utils/signature-builder';
import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';

const createHeader = _ => {
    const header = createElement('header', 'header');
    appendElement('content', header);
}
const createMain = _ => {
    const main = createElement('main', 'main');
    appendElement('content', main);
}
const createSidePanel = _ => {
    const sidePanel = createElement('div', 'side-panel');
    appendElement('main', sidePanel);
}
const createCenterPanel = _ => {
    const centerPanel = createElement('div', 'center-panel');
    appendElement('main', centerPanel);
}
const createFooter = _ => {
    const footer = createElement('footer', 'footer');
    buildSignature(footer);
    appendElement('content', footer);
}
const loadPageFrame = _ => {
    createHeader();
    createMain();
    createSidePanel();
    createCenterPanel();
    createFooter();
}

export default loadPageFrame;