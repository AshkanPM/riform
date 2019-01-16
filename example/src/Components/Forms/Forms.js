import React, { Component } from 'react'
import styles from './Forms.module.scss'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class Forms extends Component {

    render() {
        return (
            <Grid container className={styles.simpleForm}>
                <Grid item className={styles.center} xs={6}>
                    <Paper className={styles.paper}>
                        <div className={styles.head}>
                            <span>Simple Form</span>
                        </div>

                        <div className={styles.body}>
                            <TextField
                                fullWidth
                                required
                                label="Username"
                                margin="dense"
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                required
                                label="Email"
                                margin="dense"
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                required
                                label="Password"
                                margin="dense"
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                required
                                label="Confirm Password"
                                margin="dense"
                                variant="outlined"
                            />
                        </div>

                        <div className={styles.actions}>
                            <Button variant="contained" color="secondary">Submit</Button>
                            <Button variant="contained">Reset</Button>
                        </div>
                    </Paper>
                </Grid>
                <Grid item className={styles.center} xs={6}>

                </Grid>

            </Grid>
        )
    }
}

export default Forms