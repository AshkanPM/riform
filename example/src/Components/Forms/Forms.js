import React, { Component } from 'react'
import styles from './Forms.module.scss'

import SimpleForm from './SimpleForm/SimpleForm'

import Grid from '@material-ui/core/Grid'

class Forms extends Component {
    render() {
        return (
            <Grid container className={styles.forms}>
                <Grid item className={styles.center} xs={6}>
                    <SimpleForm />
                </Grid>
                <Grid item className={styles.center} xs={6}>
                    <p>Preview</p>
                </Grid>

            </Grid>
        )
    }
}

export default Forms
