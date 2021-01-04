import selectElement from '../utils/element-selector';
import removeElement from '../utils/element-remover';

const addListenerDeleteCancelBtn = _ => {
    const deleteCancelBtn = selectElement('delete-cancel-btn');
    deleteCancelBtn.addEventListener('click', () => {
        const sidePanel = document.getElementById('side-panel');
        sidePanel.classList.remove('inactive', 'blurred');
        const centerPanel = document.getElementById('center-panel');
        centerPanel.classList.remove('inactive', 'blurred');
        removeElement('main', 'delete-prompt-container');
    });
}

export default addListenerDeleteCancelBtn;