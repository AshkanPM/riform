import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'

import RiformContext from './Riform/RiformContext'
import RiformControl from './Riform/RiformControl'

class Riform extends Component {
    static propTypes = {
        children: PropTypes.node,
        recipe: PropTypes.object,
        initial: PropTypes.objectOf(Map)
    }

    state = {
        formObject: Map({})
    }

    componentDidMount = () => {
        this.resetForm()
    }

    handleFormUpdate = (address, value) => {
        const { onChange } = this.props

        const formObject = this.state.formObject.setIn(address, value)
        this.setState({ formObject }, () => {
            if (onChange) onChange(formObject)
        })
    }
    handleFormAction = action => {
        const { onSubmit, onReset } = this.props

        if (action === 'submit') {
            if (onSubmit) onSubmit(this.state.formObject)
        }
        if (action === 'reset') {
            this.resetForm()
            if (onReset) onReset()
        }
    }

    resetForm = () => {
        const { initial } = this.props
        
        this.setState({ formObject: initial ? initial : Map({}) })
    }

    render() {
        const { children, recipe } = this.props
        const { formObject } = this.state

        const context = {
            recipe: recipe,
            handleFormUpdate: this.handleFormUpdate,
            handleFormAction: this.handleFormAction,
            formObject: formObject
        }

        return (
            <RiformContext.Provider value={context}>
                {children}
            </RiformContext.Provider>
        )
    }
}

export { Riform, RiformControl }
