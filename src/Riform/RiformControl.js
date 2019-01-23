import React, { Component } from 'react'
import PropTypes from 'prop-types'

import RiformContext from './RiformContext'

class RiformControl extends Component {
    static propTypes = {
        name: PropTypes.string,
        children: PropTypes.node,
        label: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    }
    static contextType = RiformContext

    state = {
        recipe: undefined,
        submitLock: false
    }

    componentDidMount = () => {
        // Loads the relevant input from recipe into state
        const { recipe } = this.context
        const { name } = this.props

        this.setState({ recipe: recipe[name] })
    }
    componentWillUnmount = () => {
        this.handleChange(undefined)
    }

    handleAction = action => {
        const { handleFormAction } = this.context

        handleFormAction(action)
    }
    handleChange = value => {
        const { label } = this.props
        const { handleFormUpdate } = this.context
        const { address } = this.state.recipe

        const processedAddress = (label !== undefined) ? address.concat(label) : address

        handleFormUpdate(processedAddress, value)
    }

    render() {
        const { children, label, ...props } = this.props
        const { recipe } = this.state
        const { formObject, validation, validate } = this.context

        // Checking if component exists in recipe
        if (!recipe) {
            return <p style={{ color: 'red' }}>Component not found!</p>
        }

        // Deconstructing the relevant input
        const {
            component: Component,
            props: recipeProps,
            action,
            address
        } = recipe

        // Setting the relevant handlers for form actions vs form inputs
        const processedAddress = (label !== undefined) ? address.concat(label) : address
        const value = processedAddress ? formObject.getIn(processedAddress) : undefined
        const error = processedAddress ? validation.getIn(processedAddress.concat('message')) : undefined

        const controls = action
            ? {
                onClick: () => { this.handleAction(action) }
            } : {
                richange: this.handleChange,
                rivalue: value,
                rivalidate: validate,
                error: error
            }

        return (
            <Component {...controls} {...recipeProps} {...props}>
                {children}
            </Component>
        )
    }
}

export default RiformControl
