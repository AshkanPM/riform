import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './FormValidation.module.scss'

import { Riform, RiformControl } from 'riform'
import formValidationRecipe from './FormValidationRecipe'
import formValidationRules from './FormValidationRules'

import Paper from '@material-ui/core/Paper'

class FormValidation extends Component {
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
                    <span>Form Validation</span>
                </div>

                <Riform
                    recipe={formValidationRecipe}
                    rules={formValidationRules}
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}
                    onReset={this.handleReset}
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

export default FormValidation
