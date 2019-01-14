import React, { Component } from 'react'
import styles from './Forms.module.scss'

import TextField from '@material-ui/core/TextField';

class Forms extends Component {

    render() {
        return (
            <div className={styles.simpleForm}>
                <TextField
                    id="name"
                    label="Name"
                    margin="dense"
                    variant="outlined"
                />
            </div>
        )
    }
}

export default Forms