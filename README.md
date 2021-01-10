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
- [x] it should have a way to add a task - 07/01
 - [x] it should have a way to add a task name - 07/01
 - [x] it should have a way to add a task due date - 08/01
 - [x] it should have a way to add a task priority - 08/01
- [x] it should have a way to edit a task - 09/01
- [x] it should have a way to delete a task - 09/01
- [x] it should have a way to check a task as done/not done

### Nice-to-have Changes:

- [x] move Add Project and Add Task buttons to the top of their respective lists
- [x] make Task List scrollable
- [ ] make Tasks focusable and their buttons clickable on focus
- [ ] implement expandable divs for the descriptions of both Projects and Tasks
- [ ] implement a day countdown for task due dates
- [ ] task sort by priority

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

#### 08/01

  - Extended the task additon feature by allowing the addition of descriptions, due dates and priority.
  The priority buttons themselves are custom radio buttons.
  - All data for each task-list-item are displayed, priority is signified by the color of the task's 
  corresponding "check circle".

#### 09/01

  - Task list items now have their own edit and delete buttons.
  - Tasks can now be edited - task editing form requires further styling.
  - Tasks can now be deleted.

#### 10/01

  - Tasks can now be marked and unmarked, which changes their isDone value between 
  false and true.
