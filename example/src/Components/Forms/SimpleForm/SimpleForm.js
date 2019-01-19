import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './SimpleForm.module.scss'

import { Map } from 'immutable'

import { Riform, RiformControl } from 'riform'
import simpleFormRecipe from './SimpleFormRecipe'

import Paper from '@material-ui/core/Paper'

class SimpleForm extends Component {
    state = {
        initial: Map({})
    }

    static propTypes = {
        onPreviewUpdate: PropTypes.func
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({ initial: Map({username: 'test'}) })
        }, 5000)
    }
    componentWillUnmount = () => this.handleReset()

    handleChange = formObject => this.props.onPreviewUpdate(formObject.toJS())
    handleSubmit = formObject => this.props.onPreviewUpdate(formObject.toJS())
    handleReset = () => this.props.onPreviewUpdate({})

    render() {
        const { initial } = this.state

        return (
            <Paper className={styles.paper}>
                <div className={styles.head}>
                    <span>Simple Form</span>
                </div>

                <Riform
                    recipe={simpleFormRecipe}
                    initial={initial}
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

export default SimpleForm
