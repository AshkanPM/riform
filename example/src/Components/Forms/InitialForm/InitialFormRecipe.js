import TextInput from '../../../UI/TextInput/TextInput'
import Button from '@material-ui/core/Button'

const initialFormRecipe = {
    firstName: {
        component: TextInput,
        address: ['firstName'],
        props: {
            label: 'First Name',
            autoComplete: 'off'
        }
    },
    lastName: {
        component: TextInput,
        address: ['lastName'],
        props: {
            label: 'Last Name',
            autoComplete: 'off'
        }
    },
    job: {
        component: TextInput,
        address: ['job'],
        props: {
            label: 'Job',
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

export default initialFormRecipe
