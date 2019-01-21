import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './InitialForm.module.scss'

import { Riform, RiformControl } from 'riform'
import initialFormRecipe from './InitialFormRecipe'
import { Map } from 'immutable'

import Paper from '@material-ui/core/Paper'

class InitialForm extends Component {
    static propTypes = {
        onPreviewUpdate: PropTypes.func
    }

    state = {
        initial: Map({}),
        isLoading: true
    }

    componentDidMount = () => {
        // Simulating server call
        setTimeout(() => {
            this.setState({
                initial: Map({
                    firstName: 'John',
                    lastName: 'Smith',
                    job: 'Developer'
                }),
                isLoading: false
            })
        }, 4000)
    }
    componentWillUnmount = () => this.handleReset()

    handleChange = formObject => this.props.onPreviewUpdate(formObject.toJS())
    handleSubmit = formObject => this.props.onPreviewUpdate(formObject.toJS())
    handleReset = () => this.props.onPreviewUpdate({})

    render() {
        const { initial, isLoading } = this.state

        return (
            <Paper className={styles.paper}>
                <div className={styles.head}>
                    <span>Initial Form</span>
                </div>

                <Riform
                    initial={initial}
                    isLoading={isLoading}
                    recipe={initialFormRecipe}
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

export default InitialForm
