import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './FormGrouping.module.scss'

import { Riform, RiformControl } from 'riform'
import formGroupingRecipe from './FormGroupingRecipe'

import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'

class FormGrouping extends Component {
    static propTypes = {
        onPreviewUpdate: PropTypes.func
    }

    state = {
        family: []
    }

    componentDidMount = () => {
        this.addFamily()
    }
    componentWillUnmount = () => this.handleReset()

    addFamily = () => {
        const { family } = this.state
        const updatedFamily = [...family]
        const index = (updatedFamily.length - 1) + 1

        updatedFamily.push(index)

        this.setState({ family: updatedFamily })
    }
    removeFamily = (key) => {
        const { family } = this.state
        let updatedFamily = [...family]
        updatedFamily = updatedFamily.filter(id => id !== key)

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

                        {family.map((id) => (
                            <div className={styles.inputGroup} key={id}>
                                <RiformControl label={id} name='family' />
                                <Button variant='outlined' color='primary' onClick={() => { this.removeFamily(id) }}>
                                    <DeleteOutlinedIcon />
                                </Button>
                            </div>
                        ))}

                        <div className={styles.controls}>
                            <Button variant='contained' color='secondary' onClick={this.addFamily}>Add</Button>
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
