import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';
import addListenerDeleteCancelBtn from '../listeners/delete-cancel-btn';
import addListenerDeleteConfirmBtn from '../listeners/delete-confirm-btn';

const createDeletePromptContainer = _ => {
    const deletePromptContainer = createElement('div', 'delete-prompt-container', 'form-container');
    appendElement('main', deletePromptContainer);
}

const createDeletePromptBody = _ => {
    const deletePromptBody = createElement('div', 'delete-prompt', 'form-body');
    appendElement('delete-prompt-container', deletePromptBody);
}

const createDeletePromptText = _ => {
    const deletePromptText = createElement('div', 'delete-prompt-text', 'prompt-text', 'Are you sure you want to delete this project?');
    appendElement('delete-prompt', deletePromptText);
}

const createDeletePromptControls = _ => {
    const deletePromptControls = createElement('div', 'delete-prompt-controls', 'form-controls');
    appendElement('delete-prompt', deletePromptControls);
    const deleteConfirmBtn = createElement('button', 'delete-confirm-btn', null, 'Confirm');
    appendElement('delete-prompt-controls', deleteConfirmBtn);
    const deleteCancelBtn = createElement('button', 'delete-cancel-btn', null, 'Cancel');
    appendElement('delete-prompt-controls', deleteCancelBtn);
}


const createDeletePrompt = (indexOfElement) => {
    createDeletePromptContainer();
    createDeletePromptBody();
    createDeletePromptText();
    createDeletePromptControls();
    addListenerDeleteConfirmBtn(indexOfElement)
    addListenerDeleteCancelBtn();
}

export default createDeletePrompt;