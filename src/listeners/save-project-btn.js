import selectElement from '../utils/element-selector';
import { validateTextInput } from '../utils/validator';

const regEx = {
    name: /^[a-zA-Z0-9À-ÿ\s]{1,20}$/,
    description: /^[a-zA-Z0-9À-ÿ\s]{1,60}$/,
}

const addListenerSaveProjectBtn = _ => {
    const saveProjectBtn = selectElement('save-project-btn');
    saveProjectBtn.addEventListener('click', (e) => {
        console.log(`${e}`)
        e.preventDefault();
        const form = selectElement('add-project-form');
        const name = selectElement('add-project-name-input');
        const desc = selectElement('add-project-desc-input');
        const errMsg = selectElement('add-project-err-msg');
        if (
            validateTextInput(regEx.name, name) === true
            &&
            validateTextInput(regEx.description, desc) === true
        ) {
            errMsg.classList.add('hidden');
        } else {
            if (errMsg.classList.contains('hidden')) {
                errMsg.classList.remove('hidden');
            }
            console.log(`name.value: ${name.value}`);
            if (name.value === null || name.value === '') {
                name.classList.add('empty-input');
            }
            if (desc.value === null || desc.value === '') {
                desc.classList.add('empty-input');
            }
        }
    });
}

export default addListenerSaveProjectBtn;