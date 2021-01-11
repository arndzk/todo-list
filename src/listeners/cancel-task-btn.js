import selectElement from '../utils/element-selector';
import removeElement from '../utils/element-remover';

const addListenerCancelTaskBtn = () => {
  const cancelTaskBtn = selectElement('cancel-task-btn');
  cancelTaskBtn.addEventListener('click', () => {
    const sidePanel = document.getElementById('side-panel');
    sidePanel.classList.remove('inactive', 'blurred');
    const centerPanel = document.getElementById('center-panel');
    centerPanel.classList.remove('inactive', 'blurred');
    removeElement('main', 'add-task-container');
  });
};

export default addListenerCancelTaskBtn;
