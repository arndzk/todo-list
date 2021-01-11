import selectElement from '../utils/element-selector';
import createTaskDeletePrompt from '../modules/prompt-delete-task';

const addListenerTaskDeleteBtn = (
  taskDeleteBtn,
  projectListIndex,
  taskListIndex
) => {
  const deleteBtn = selectElement(taskDeleteBtn);
  deleteBtn.addEventListener(
    'click',
    () => {
      createTaskDeletePrompt(projectListIndex, taskListIndex);
    },
    false
  );
};

export default addListenerTaskDeleteBtn;
