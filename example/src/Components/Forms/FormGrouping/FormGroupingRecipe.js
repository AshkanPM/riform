import TextInput from '../../../UI/TextInput/TextInput'
import FamilyInput from '../../../UI/FamilyInput/FamilyInput'
import Button from '@material-ui/core/Button'

const formGroupingRecipe = {
    fullname: {
        component: TextInput,
        address: ['fullname'],
        props: {
            label: 'Full Name',
            autoComplete: 'off'
        }
    },
    family: {
        component: FamilyInput,
        address: ['family']
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

export default formGroupingRecipe
