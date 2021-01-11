import selectElement from '../utils/element-selector';
import removeElement from '../utils/element-remover';

const addListenerCancelProjectBtn = () => {
  const cancelProjectBtn = selectElement('cancel-project-btn');
  cancelProjectBtn.addEventListener('click', () => {
    const sidePanel = document.getElementById('side-panel');
    sidePanel.classList.remove('inactive', 'blurred');
    const centerPanel = document.getElementById('center-panel');
    centerPanel.classList.remove('inactive', 'blurred');
    removeElement('main', 'add-project-container');
  });
};

export default addListenerCancelProjectBtn;
