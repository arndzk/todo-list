const toDoFactory = (
    title,
    description,
    dueDate,
    priority,
    notes
) => {
    return { title, description, dueDate, priority, notes };
}

export default toDoFactory;