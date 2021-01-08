const getPriority = priorityInputs => {
    console.log('this is what getPriority() receives:')
    console.log(priorityInputs);
    const inputsArray = [...document.getElementsByName('priority')];
    console.log(inputsArray);
    const checkedInput = inputsArray.filter(input => input.checked === true);
    console.log(checkedInput);
    const priority = checkedInput[0].value;
    console.log(priority);
    return priority
}

export default getPriority;