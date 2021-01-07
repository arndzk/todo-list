import selectElement from "../utils/element-selector";
import createDeletePrompt from "../modules/prompt-delete-project";

const addListenerDeleteProjectBtn = (projectDeleteBtn, indexOfElement) => {
    const deleteBtn = selectElement(projectDeleteBtn);
    deleteBtn.addEventListener('click', () => {
        createDeletePrompt(indexOfElement);
    }, false);
}

export default addListenerDeleteProjectBtn;