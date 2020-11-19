function buildDomElement(domElement, id, domClass = null , textContent = null) {
    const element = document.createElement(domElement);
    element.setAttribute('id', id);
    if ( domClass != null ) {
        element.classList.add(domClass);
    }
    if ( textContent != null) {
        element.textContent = textContent;
    }
    return element;
}

export default buildDomElement;