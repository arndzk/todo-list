import selectElement from '../utils/element-selector';
import removeElement from '../utils/element-remover';

const addListenerCancelTaskEditBtn = () => {
  const cancelTaskBtn = selectElement('cancel-task-edit-btn');
  cancelTaskBtn.addEventListener('click', () => {
    const sidePanel = document.getElementById('side-panel');
    sidePanel.classList.remove('inactive', 'blurred');
    const centerPanel = document.getElementById('center-panel');
    centerPanel.classList.remove('inactive', 'blurred');
    removeElement('main', 'edit-task-container');
  });
};

export default addListenerCancelTaskEditBtn;
