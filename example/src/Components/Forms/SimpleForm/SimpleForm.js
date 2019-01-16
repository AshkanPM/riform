import React, { Component } from 'react'
import styles from './SimpleForm.module.scss'

import { Riform, RiformControl } from 'riform'
import simpleFormRecipe from './SimpleFormRecipe'

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
                    <Riform
                        recipe={simpleFormRecipe}
                    >
                        <RiformControl name='username' />

                        <RiformControl name='email' />

                        <RiformControl name='password' />

                        <RiformControl name='passwordConfirmation' />
                    </Riform>
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
