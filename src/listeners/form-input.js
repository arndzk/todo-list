import selectElement from '../utils/element-selector';

const addListenerFormInput = (targetElement) => {
    const formInput = selectElement(targetElement);
    formInput.addEventListener('input', () => {
        if (formInput.classList.contains('empty-input')) {
            formInput.classList.remove('empty-input');
        }
    });
}

export default addListenerFormInput;