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
- [x] it should have a way to display tasks
- [x] it should have a way to add a task
 - [x] it should have a way to add a task name
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
- [x] 07/01 - on saving a project, the add-project-form doesn't close as intended, 
  despite the project being saved successfully. The console prints an Uncaught TypeError
  about an array not being defined.
  ## FIX:
  07/01 - the error's source was a loop that was logging values to the console for me to check.
  After deleting that bit of code, since it wasn't useful anymore, no error appears in the console
  on saving a project.

### Progress Log

#### 07/01

  - Finally, built the task addition feature; most of the difficulties were caused by the fact
  that the tasks weren't handled consistently as objects throughout the entire logic and because 
  I haven't had figured out how to properly store an array of objects in an object in an array of
  objects in localStorage.
  - After solving the above, retrieving and rendering tasks also became possible.
