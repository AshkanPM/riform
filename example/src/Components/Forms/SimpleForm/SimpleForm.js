import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './SimpleForm.module.scss'

import { Riform, RiformControl } from 'riform'
import simpleFormRecipe from './SimpleFormRecipe'

import Paper from '@material-ui/core/Paper'

class SimpleForm extends Component {
    static propTypes = {
        onPreviewUpdate: PropTypes.func
    }

    componentWillUnmount = () => this.handleReset()

    handleChange = formObject => this.props.onPreviewUpdate(formObject.toJS())
    handleSubmit = formObject => this.props.onPreviewUpdate(formObject.toJS())
    handleReset = () => this.props.onPreviewUpdate({})

    render() {
        return (
            <Paper className={styles.paper}>
                <div className={styles.head}>
                    <span>Simple Form</span>
                </div>

                <Riform
                    recipe={simpleFormRecipe}
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}
                    onReset={this.handleReset}
                >
                    <div className={styles.body}>
                        <RiformControl name='firstName' />

                        <RiformControl name='lastName' />

                        <RiformControl name='job' />
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
