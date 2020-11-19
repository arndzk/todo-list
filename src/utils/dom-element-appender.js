function appendDomElement (domElementTarget, domElementChild) {
    const targetElement = document.getElementById(domElementTarget);
    targetElement.appendChild(domElementChild);
}

export default appendDomElement;