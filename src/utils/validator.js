import { isPast, parseISO } from 'date-fns';

const validateTextInput = (rule, input) => {
    console.log(`validating ${input}`)
    if (rule.test(input.value)) {
        console.log(`${input.value} validates!`)
        return true;
    } else {
        return  false;
    }
}

const validateDueDate = input => {
    console.log('this is what validateDueDate receives:')
    console.log(input.value)
    if (input.value === '') {
        return false;
    }
    if (isPast(parseISO(input.value)) === true) {
        return false;
    } else {
        console.log('returning true...')
        return true;
    }
}

const validatePriority = input => {
    console.log('this is what validatePriority receives:')
    console.log(input)
    console.log(typeof(input));
    console.log(input === 'normal')
    if (input === 'low' || input === 'normal' || input === 'high') {
        console.log('returning true...')
        return true;
    } else {
        return false;
    }
}

export {
    validateTextInput,
    validateDueDate,
    validatePriority
}