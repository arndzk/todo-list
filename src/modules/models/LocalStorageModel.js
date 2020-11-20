class LocalStorageModel {
    constructor(storage) {
        if ( !!LocalStorageModel.instance ) {
            return LocalStorageModel.instance;
        }
        super();
        LocalStorageModel.instance = this;

        const dataStructure = {
            projectsList: []
        }

        const storage = storage;
        const projectsList = 'projects-list';
        const projectId = 'project-id';
        const listId = 'list-id';
        const todoId = 'todo-id'

        const checkLocalStorage = _ => {
            if ( !checkForProjectsList() ) {
                initializeProjectsList();
            }
        };

        const checkForProjectsList = _ => {
            if ( !(projectsList in storage) ) {
                return false;
            } else {
                return true;
            }
        };

        const initializeProjectsList = _ => {
            this.setProjectsList(dataStructure.projectsList);
        };

        this.getProjectsList = function() {
            return JSON.parse(storage.getItem(projectsList));
        }
        this.setProjectsList = function(newProjectsList) {
            storage.setItem(projectList, JSON.stringify(newProjectsList));
        }

    }
}