import selectElement from '../utils/element-selector';
import { switchProjectFocus } from '../modules/focus';
import clearCenterPanel from '../modules/clear-center-panel';

const addListenerProjectListItem = (projectListItem) => {
  const listItem = selectElement(projectListItem);
  listItem.addEventListener('click', () => {
    clearCenterPanel();
    const idOfElement = listItem.getAttribute('id');
    switchProjectFocus(idOfElement);
  });
};

export default addListenerProjectListItem;
