const getPriority = priorityInputs => {
    console.log('this is what getPriority() receives:')
    console.log(priorityInputs);
    console.log('spreading to array...')
    const inputsArray = [...document.getElementsByName('priority')];
    console.log('spreading complete')
    if (inputsArray.length != 0) {
        console.log('filtering array...')
        const checkedInput = inputsArray.filter(input => input.checked === true);
        console.log(checkedInput);
        console.log('array filtered')
        if (checkedInput.length != 0) {
            console.log('checked input is not empty')
            const priority = checkedInput[0].value;
            return priority;
        } else {
            console.log('checked input is empty')
            return 'empty';
        }
    }
    else {
        console.log('array is empty')
        return 'empty';
    }
}

export default getPriority;