import TextInput from '../../../UI/TextInput/TextInput'
import Button from '@material-ui/core/Button'

const simpleFormRecipe = {
    username: {
        component: TextInput,
        address: ['username'],
        props: {
            label: 'Username',
            autoComplete: 'off'
        }
    },
    email: {
        component: TextInput,
        address: ['email'],
        props: {
            label: 'Email',
            autoComplete: 'off'
        }
    },
    password: {
        component: TextInput,
        address: ['password'],
        props: {
            label: 'Password',
            type: 'password'
        }
    },
    passwordConfirmation: {
        component: TextInput,
        address: ['passwordConfirmation'],
        props: {
            label: 'Password Confirmation',
            type: 'password'
        }
    },
    submit: {
        component: Button,
        action: 'submit',
        props: {
            variant: 'contained',
            color: 'secondary'
        }
    },
    reset: {
        component: Button,
        action: 'reset',
        props: {
            variant: 'contained'
        }
    }
}

export default simpleFormRecipe
