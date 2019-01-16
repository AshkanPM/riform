import TextInput from '../../../UI/TextInput/TextInput'

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
    }
}

export default simpleFormRecipe
