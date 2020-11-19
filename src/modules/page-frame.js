import buildDomElement from '../utils/dom-element-builder';
import appendDomElement from '../utils/dom-element-appender';
import buildSignature from '../utils/signature-builder';

const createHeader = _ => {
    const header = buildDomElement('header', 'header');
    appendDomElement('content', header);
}
const createSidePanel = _ => {
    const sidePanel = buildDomElement('div', 'side-panel');
    appendDomElement('content', sidePanel);
}
const createMainPanel = _ => {
    const mainPanel = buildDomElement('main', 'main-panel');
    appendDomElement('content', mainPanel);
}
const createFooter = _ => {
    const footer = buildDomElement('footer', 'footer');
    buildSignature(footer);
    appendDomElement('content', footer);
}
const loadPageFrame = _ => {
    createHeader();
    createSidePanel();
    createMainPanel();
    createFooter();
}

export default loadPageFrame;