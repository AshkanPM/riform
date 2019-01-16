import React, { Component } from 'react'
import styles from './SimpleForm.module.scss'

import { Riform, RiformControl } from 'riform'
import simpleFormRecipe from './SimpleFormRecipe'

import Paper from '@material-ui/core/Paper'

class SimpleForm extends Component {
    render() {
        return (
            <Paper className={styles.paper}>
                <div className={styles.head}>
                    <span>Simple Form</span>
                </div>

                <Riform
                    recipe={simpleFormRecipe}
                >
                    <div className={styles.body}>
                        <RiformControl name='username' />

                        <RiformControl name='email' />

                        <RiformControl name='password' />

                        <RiformControl name='passwordConfirmation' />
                    </div>

                    <div className={styles.actions}>
                        <RiformControl name='submit'>Submit</RiformControl>
                        <RiformControl name='reset'>Reset</RiformControl>
                    </div>
                </Riform>
            </Paper>
        )
    }
}

export default SimpleForm
