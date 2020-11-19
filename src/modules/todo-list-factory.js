const toDoListFactory = (
    title,
    description,
    dueDate,
    priority,
    notes
) => {
    return { title, description, dueDate, priority, notes };
}

export default toDoListFactory;