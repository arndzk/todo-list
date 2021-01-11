import selectElement from '../utils/element-selector';
import createEditTaskForm from '../modules/form-edit-task';

const addListenerEditTaskBtn = (
  taskEditBtn,
  projectListIndex,
  taskListIndex
) => {
  const editBtn = selectElement(taskEditBtn);
  editBtn.addEventListener('click', () => {
    const sidePanel = document.getElementById('side-panel');
    sidePanel.classList.add('inactive', 'blurred');
    const centerPanel = document.getElementById('center-panel');
    centerPanel.classList.add('inactive', 'blurred');
    createEditTaskForm(projectListIndex, taskListIndex);
  });
};

export default addListenerEditTaskBtn;
