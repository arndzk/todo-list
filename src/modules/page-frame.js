import buildSignature from '../utils/signature-builder';
import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';

const createHeader = () => {
  const header = createElement('header', 'header');
  appendElement('content', header);
  const headerIcon = createElement('span', 'header-icon', null, '✔️');
  appendElement('header', headerIcon);
  const headerContent = createElement(
    'h1',
    'header-content',
    null,
    'ToDo List'
  );
  appendElement('header', headerContent);
};
const createMain = () => {
  const main = createElement('main', 'main');
  appendElement('content', main);
};
const createSidePanel = () => {
  const sidePanel = createElement('div', 'side-panel');
  appendElement('main', sidePanel);
};
const createCenterPanel = () => {
  const centerPanel = createElement('div', 'center-panel');
  appendElement('main', centerPanel);
};
const createFooter = () => {
  const footer = createElement('footer', 'footer');
  buildSignature(footer);
  appendElement('content', footer);
};
const loadPageFrame = () => {
  createHeader();
  createMain();
  createSidePanel();
  createCenterPanel();
  createFooter();
};

export default loadPageFrame;
