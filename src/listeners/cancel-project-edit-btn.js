import selectElement from '../utils/element-selector';
import removeElement from '../utils/element-remover';

const addListenerCancelProjectEditBtn = _ => {
    const cancelProjectBtn = selectElement('cancel-project-edit-btn');
    cancelProjectBtn.addEventListener('click', () => {
        const sidePanel = document.getElementById('side-panel');
        sidePanel.classList.remove('inactive', 'blurred');
        const centerPanel = document.getElementById('center-panel');
        centerPanel.classList.remove('inactive', 'blurred');
        removeElement('main', 'edit-project-container');
    });
}

export default addListenerCancelProjectEditBtn;