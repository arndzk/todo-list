import selectElement from "../utils/element-selector";

const clearCenterPanel = _ => {
    const projectTitle = selectElement('project-title');
    const projectDesc = selectElement('project-desc');
    const taskList = selectElement('task-list');

    projectTitle.textContent = '';
    projectDesc.textContent = '';
    while (taskList.lastElementChild) {
        taskList.removeChild(taskList.lastElementChild);
    }
}

export default clearCenterPanel;