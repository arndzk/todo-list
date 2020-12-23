import selectElement from '../utils/element-selector';
import createAddTaskForm from '../modules/form-add-task';

const addListenerAddTaskBtn = () => {
    const addTaskBtn = selectElement('add-task-btn');
    addTaskBtn.addEventListener('click', () => {
        const sidePanel = document.getElementById('side-panel');
        sidePanel.classList.add('inactive', 'blurred');
        const centerPanel = document.getElementById('center-panel');
        centerPanel.classList.add('inactive', 'blurred');
        createAddTaskForm();
    });
}

export default addListenerAddTaskBtn;