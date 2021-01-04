const validateTextInput = (rule, input) => {
    if (rule.test(input.value)) {
        return true;
    } else {
        return  false;
    }
}

export {
    validateTextInput
}