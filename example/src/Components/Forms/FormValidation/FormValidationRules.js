const formValidationRules = [
    {
        field: ['username'],
        method: value => value && value.length > 0,
        validWhen: true,
        message: 'Please enter your username'
    },
    {
        field: ['email'],
        method: value => value && value.length > 0,
        validWhen: true,
        message: 'Please enter your email address'
    },
    {
        field: ['password'],
        method: value => value && value.length > 0,
        validWhen: true,
        message: 'Please enter your password'
    },
    {
        field: ['passwordConfirmation'],
        method: (value, formObject) => value === formObject.getIn(['password']),
        validWhen: true,
        message: 'Your password doesn\'t match the confirmation'
    },
    {
        field: ['passwordConfirmation'],
        method: value => value && value.length > 0,
        validWhen: true,
        message: 'Please confirm your password'
    },
]

export default formValidationRules