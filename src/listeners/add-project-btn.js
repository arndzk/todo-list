import selectElement from '../utils/element-selector';
import createAddProjectForm from '../modules/form-add-project';

const addListenerAddProjectBtn = _ => {
    const addProjectBtn = selectElement('add-project-btn');
    addProjectBtn.addEventListener('click', () => {
        const sidePanel = document.getElementById('side-panel');
        sidePanel.classList.add('inactive', 'blurred');
        const centerPanel = document.getElementById('center-panel');
        centerPanel.classList.add('inactive', 'blurred');
        createAddProjectForm();
    });
    
}

export default addListenerAddProjectBtn;