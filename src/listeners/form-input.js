import selectElement from '../utils/element-selector';

const addListenerFormInput = (targetElement) => {
    console.log(`${targetElement}`)
    const formInput = selectElement(targetElement);
    console.log(`${formInput}`)
    formInput.addEventListener('input', () => {
        if (formInput.classList.contains('empty-input')) {
            formInput.classList.remove('empty-input');
        }
    });
    console.log('listener added! input')
}

export default addListenerFormInput;