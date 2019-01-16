import React, { Component } from 'react'
import PropTypes from 'prop-types'

import RiformContext from './RiformContext'

class RiformControl extends Component {
    static propTypes = {
        name: PropTypes.string,
        children: PropTypes.node
    }
    static contextType = RiformContext

    state = {
        recipe: undefined
    }

    componentDidMount = () => {
        // Loads the relevant input from recipe into state
        const { recipe } = this.context
        const { name } = this.props

        this.setState({ recipe: recipe[name] })
    }

    handleAction = action => {
        const { handleFormAction } = this.context

        handleFormAction(action)
    }
    handleChange = value => {
        const { handleFormUpdate } = this.context
        const { address } = this.state.recipe

        handleFormUpdate(address, value)
    }

    render() {
        const { children, ...props } = this.props
        const { recipe } = this.state
        const { formObject } = this.context

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
        const value = address ? formObject.getIn(address) : undefined
        const controls = action
            ? {
                onClick: () => { this.handleAction(action) }
            } : {
                richange: this.handleChange,
                rivalue: value
            }

        return (
            <Component {...controls} {...recipeProps} {...props}>
                {children}
            </Component>
        )
    }
}

export default RiformControl
