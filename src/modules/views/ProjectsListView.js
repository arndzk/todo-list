class ProjectsListView {
    constructor() {
        if ( !!ProjectsListView.instance ) {
            return ProjectsListView.instance;
        }
        super();
        ProjectsListView.instance = this;
        return this;
    }
    
}