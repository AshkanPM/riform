import React, { Component } from 'react'
import styles from './SimpleForm.module.scss'

import TextInput from '../../../UI/TextInput/TextInput'

import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

class SimpleForm extends Component {
    render() {
        return (
            <Paper className={styles.paper}>
                <div className={styles.head}>
                    <span>Simple Form</span>
                </div>

                <div className={styles.body}>
                    <TextInput label='username' />

                    <TextInput label='Email' />

                    <TextInput label='Password' type='password' />

                    <TextInput label='Confirm Password' type='password' />
                </div>

                <div className={styles.actions}>
                    <Button variant='contained' color='secondary'>Submit</Button>
                    <Button variant='contained'>Reset</Button>
                </div>
            </Paper>
        )
    }
}

export default SimpleForm
