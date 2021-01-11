import selectElement from '../utils/element-selector';
import { projectsArray } from '../index';
import { checkTask } from '../modules/local-storage';

const addListenerTaskCheck = (
  taskCheckBtn,
  projectListIndex,
  taskListIndex
) => {
  const taskCheck = selectElement(taskCheckBtn);
  const taskCheckInput = document.getElementById(`task-input-${taskListIndex}`);
  const taskName = document.getElementById(`task-name-${taskListIndex}`);
  const taskDesc = document.getElementById(`task-desc-${taskListIndex}`);
  const taskDueDate = document.getElementById(`task-due-date-${taskListIndex}`);
  taskCheckInput.addEventListener('click', () => {
    let taskList = [];
    taskList = projectsArray[projectListIndex].getProjectTasks();
    const task = taskList[taskListIndex];
    if (taskCheck.classList.contains('material-icons')) {
      taskCheck.classList.remove('material-icons');
      taskCheck.innerHTML = '';
      taskName.classList.remove('checked');
      taskDesc.classList.remove('checked');
      taskDueDate.classList.remove('checked');
      if (task.getTaskPriority() === 'low') {
        taskCheck.classList.add('low-check');
      } else if (task.getTaskPriority() === 'normal') {
        taskCheck.classList.add('normal-check');
      } else if (task.getTaskPriority() === 'high') {
        taskCheck.classList.add('high-check');
      }
      checkTask(task);
    } else {
      if (taskCheck.classList.contains('low-check')) {
        taskCheck.classList.remove('low-check');
      } else if (taskCheck.classList.contains('normal-check')) {
        taskCheck.classList.remove('normal-check');
      } else if (taskCheck.classList.contains('high-check')) {
        taskCheck.classList.remove('high-check');
      }
      taskCheck.classList.add('material-icons');
      taskCheck.innerHTML = 'check';
      taskName.classList.add('checked');
      taskDesc.classList.add('checked');
      taskDueDate.classList.add('checked');
      checkTask(task);
    }
  });
};

export default addListenerTaskCheck;
