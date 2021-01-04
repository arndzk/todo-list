# todo-list

## Version 1.0

### Requirements Checklist:

- [x] it should have a place to store ~~todos~~ projects
- [x] it should have a way to display ~~todos~~ projects
- [x] it should have a way to add a ~~todo~~ project
  - [x] it should have a way to add a project name
  - [x] it should have a way to add a project description
- [x] it should have a way to edit a ~~todo~~ project
- [x] it should have a way to remove a ~~todo~~ project
- [ ] it should have a way to display tasks
- [ ] it should have a way to add a task
 - [ ] it should have a way to add a task name
 - [ ] it should have a way to add a task due date
 - [ ] it should have a way to add a task priority
- [ ] it should have a way to edit a task
- [ ] it should have a way to delete a task

### Bugs

- [x] on project deletion, a mysteriously generated click causes a refocus
  on the list item that is the object of the deletion, overriding the default
  behavior - focus on the first item on the list, if one exists - this will either
  cause the project that takes the deleted ones' place on the list to become 
  focused or, if the item was the last on one the list, the focusing function 
  will return null.
  ## FIX: 
    After several attempts at fixing this (incl. making the list unclickable while 
  it re-renders, deleting the event listener of the list item being deleted, making the 
  listener activate on dblclick), the opt was to refactor the deletion feature, by 
  creating a prompt when the project-delete-btn is clicked, to confirm the deletion 
  from its controls, instead of proceeding with it right away. This way, the rogue 
  click doesn't seem to be generated at all and now the post-deletion project focus 
  works as intended.
