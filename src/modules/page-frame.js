import buildDomElement from '../utils/dom-element-builder';
import appendDomElement from '../utils/dom-element-appender';
import buildSignature from '../utils/signature-builder';

function createHeader() {
    const header = buildDomElement('header', 'header');
    appendDomElement('content', header);
}
function createSidePanel() {
    const sidePanel = buildDomElement('div', 'side-panel');
    appendDomElement('content', sidePanel);
}
function createMainPanel() {
    const mainPanel = buildDomElement('main', 'main-panel');
    appendDomElement('content', mainPanel);
}
function createFooter() {
    const footer = buildDomElement('footer', 'footer');
    buildSignature(footer);
    appendDomElement('content', footer);
}


function loadPage() {
    createHeader();
    createSidePanel();
    createMainPanel();
    createFooter();
}

export default loadPage;