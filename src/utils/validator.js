const validateTextInput = (rule, input) => {
    if (rule.test(input.value)) {
        console.log(`${input.value} validates!`)
        return true;
    } else {
        return  false;
    }
}

export {
    validateTextInput
}