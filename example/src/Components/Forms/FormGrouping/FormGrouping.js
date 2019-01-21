import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './FormGrouping.module.scss'

import { Riform, RiformControl } from 'riform'
import formGroupingRecipe from './FormGroupingRecipe'

import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

class FormGrouping extends Component {
    static propTypes = {
        onPreviewUpdate: PropTypes.func
    }

    state = {
        family: [true]
    }

    componentWillUnmount = () => this.handleReset()

    addFamily = () => {
        const { family } = this.state
        const updatedFamily = [ ...family ]
        updatedFamily.push(true)

        this.setState({ family: updatedFamily })
    }
    removeFamily = () => {
        const { family } = this.state
        const updatedFamily = [ ...family ]
        updatedFamily.pop()

        this.setState({ family: updatedFamily })
    }

    handleChange = formObject => this.props.onPreviewUpdate(formObject.toJS())
    handleSubmit = formObject => this.props.onPreviewUpdate(formObject.toJS())
    handleReset = () => this.props.onPreviewUpdate({})

    render() {
        const { family } = this.state

        return (
            <Paper className={styles.paper}>
                <div className={styles.head}>
                    <span>Form Grouping</span>
                </div>

                <Riform
                    recipe={formGroupingRecipe}
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}
                    onReset={this.handleReset}
                >
                    <div className={styles.body}>
                        <RiformControl name='fullname' />

                        {family.map((_, index) => (
                            <RiformControl key={index} label={index} name='family' />
                        ))}

                        <div className={styles.controls}>
                            <Button variant='contained' color='secondary' onClick={this.addFamily}>Add</Button>
                            <Button variant='contained' onClick={this.removeFamily}>Remove</Button>
                        </div>
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

export default FormGrouping
