import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';
import addListenerTaskDeleteCancelBtn from '../listeners/delete-task-cancel-btn';
import addListenerTaskDeleteConfirmBtn from '../listeners/delete-task-confirm-btn';

const createDeletePromptContainer = () => {
  const deletePromptContainer = createElement(
    'div',
    'delete-prompt-container',
    'form-container'
  );
  appendElement('main', deletePromptContainer);
};

const createDeletePromptBody = () => {
  const deletePromptBody = createElement('div', 'delete-prompt', 'form-body');
  appendElement('delete-prompt-container', deletePromptBody);
};

const createDeletePromptText = () => {
  const deletePromptText = createElement(
    'div',
    'delete-prompt-text',
    'prompt-text',
    'Are you sure you want to delete this task?'
  );
  appendElement('delete-prompt', deletePromptText);
};

const createDeletePromptControls = () => {
  const deletePromptControls = createElement(
    'div',
    'delete-prompt-controls',
    'form-controls'
  );
  appendElement('delete-prompt', deletePromptControls);
  const deleteConfirmBtn = createElement(
    'button',
    'task-delete-confirm-btn',
    null,
    'Confirm'
  );
  appendElement('delete-prompt-controls', deleteConfirmBtn);
  const deleteCancelBtn = createElement(
    'button',
    'task-delete-cancel-btn',
    null,
    'Cancel'
  );
  appendElement('delete-prompt-controls', deleteCancelBtn);
};

const createDeletePrompt = (projectListIndex, taskListIndex) => {
  createDeletePromptContainer();
  createDeletePromptBody();
  createDeletePromptText();
  createDeletePromptControls();
  addListenerTaskDeleteConfirmBtn(projectListIndex, taskListIndex);
  addListenerTaskDeleteCancelBtn();
};

export default createDeletePrompt;
