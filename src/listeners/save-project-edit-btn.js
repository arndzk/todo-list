import selectElement from '../utils/element-selector';
import { validateTextInput } from '../utils/validator';
import { updateLocalStorage } from '../modules/local-storage';
import { renderProjects } from '../modules/render';
import { projectsArray } from '../index';
import removeElement from '../utils/element-remover';

const regEx = {
  name: /^[.,:!?'-À-ÿ\w\s]{1,20}$/,
  description: /^[.,:!?'-À-ÿ\w\s]{1,60}$/,
};

const addListenerSaveProjectEditBtn = (indexOfElement) => {
  const saveProjectEditBtn = selectElement('save-project-edit-btn');
  saveProjectEditBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const name = selectElement('edit-project-name-input');
    const desc = selectElement('edit-project-desc-input');
    const errMsg = selectElement('edit-project-err-msg');
    if (
      validateTextInput(regEx.name, name) === true &&
      validateTextInput(regEx.description, desc) === true
    ) {
      errMsg.classList.add('hidden');
      projectsArray[indexOfElement].editProjectName(name.value);
      projectsArray[indexOfElement].editProjectDesc(desc.value);
      updateLocalStorage();
      closeForm(indexOfElement);
    } else {
      if (errMsg.classList.contains('hidden')) {
        errMsg.classList.remove('hidden');
      }
      if (name.value === null || name.value === '') {
        name.classList.add('empty-input');
      }
      if (desc.value === null || desc.value === '') {
        desc.classList.add('empty-input');
      }
    }
  });
};

const closeForm = (indexOfElement) => {
  renderProjects(projectsArray, `project-list-item-${indexOfElement + 1}`);
  const sidePanel = document.getElementById('side-panel');
  sidePanel.classList.remove('inactive', 'blurred');
  const centerPanel = document.getElementById('center-panel');
  centerPanel.classList.remove('inactive', 'blurred');
  removeElement('main', 'edit-project-container');
};

export default addListenerSaveProjectEditBtn;
