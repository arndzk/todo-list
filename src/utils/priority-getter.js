const getPriority = priorityInputs => {
    const inputsArray = [...document.getElementsByName('priority')];
    if (inputsArray.length != 0) {
        const checkedInput = inputsArray.filter(input => input.checked === true);
        if (checkedInput.length != 0) {
            const priority = checkedInput[0].value;
            return priority;
        } else {
            return 'empty';
        }
    }
    else {
        return 'empty';
    }
}

export default getPriority;