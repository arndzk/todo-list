import { isPast, parseISO } from 'date-fns';

const validateTextInput = (rule, input) => {
    if (rule.test(input.value)) {
        return true;
    } else {
        return  false;
    }
}

const validateDueDate = input => {
    if (input.value === '') {
        return false;
    }
    if (isPast(parseISO(input.value)) === true) {
        return false;
    } else {
        return true;
    }
}

const validatePriority = input => {
    if (input === 'low' || input === 'normal' || input === 'high') {
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