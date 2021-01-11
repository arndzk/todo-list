import loadPageFrame from './modules/page-frame';
import loadSidePanel from './modules/side-panel';
import loadCenterPanel from './modules/center-panel';
import createProject from './modules/project';
import createTask from './modules/task';
import { renderProjects } from './modules/render';
import './styles/styles.css';

const init = () => {
  loadPageFrame();
  loadSidePanel();
  loadCenterPanel();
};

const setupLocalStorage = (projectsArray) => {
  const data = JSON.parse(localStorage.getItem('projects') || '[]');
  if (data.length === 0) {
    localStorage.setItem('projects', JSON.stringify(data));
  } else {
    data.forEach((project) => {
      const taskList = [];
      project.tasks.forEach((task) => {
        taskList.push(
          createTask(
            task.name,
            task.desc,
            task.dueDate,
            task.priority,
            task.isDone
          )
        );
      });
      projectsArray.push(createProject(project.name, project.desc, taskList));
    });
  }
};

init();

let projectsArray = [];
setupLocalStorage(projectsArray);
renderProjects(projectsArray, `project-list-item-1`);

export { projectsArray };
