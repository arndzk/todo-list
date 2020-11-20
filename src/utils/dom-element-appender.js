import selectDomElement from './dom-element-selector';

const appendDomElement = (
    domElementTarget, 
    domElementChild
    ) => {
    const targetElement = selectDomElement(domElementTarget);
    targetElement.appendChild(domElementChild);
}

export default appendDomElement;