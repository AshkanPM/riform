import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'

import RiformContext from './Riform/RiformContext'
import RiformControl from './Riform/RiformControl'

import Rivalidate, { validObject } from './Rivalidate/Rivalidate'

class Riform extends Component {
    static propTypes = {
        children: PropTypes.node,
        recipe: PropTypes.object,
        initial: PropTypes.objectOf(Map)
    }

    state = {
        formObject: Map({}),
        validator: false,
        validation: validObject,
        isSubmitted: false
    }

    componentDidMount = () => {
        const { rules } = this.props
        if (rules) this.setState({ validator: new Rivalidate(rules) })

        this.resetForm()
    }

    validate = callback => {
        const { formObject, validator, isSubmitted } = this.state
        const { onError } = this.props

        let validation = validObject
        if (validator) validation = validator.validate(formObject, isSubmitted)

        this.setState({ validation }, () => {
            const isValid = validation.getIn(['isValid'])
            if (isValid && typeof callback === "function") callback()
            if (onError) onError(validation)
        })
    }

    handleSubmit = () => {
        const { onSubmit } = this.props

        this.setState({ isSubmitted: true }, () => {
            this.validate(() => {
                if (onSubmit) onSubmit(this.state.formObject)
            })
        })
    }
    handleFormUpdate = (address, value) => {
        const { onChange } = this.props

        if (address) {
            const formObject = this.state.formObject.setIn(address, value)

            this.setState({ formObject }, () => {
                if (onChange) onChange(formObject)
            })
        }
    }
    handleFormAction = action => {
        const { onReset } = this.props

        if (action === 'submit') this.handleSubmit()
        if (action === 'reset') {
            this.resetForm()
            if (onReset) onReset()
        }
    }

    resetForm = () => {
        const { initial } = this.props

        this.setState({ formObject: initial ? initial : Map({}), validation: validObject, isSubmitted: false })
    }

    render() {
        const { children, recipe } = this.props
        const { formObject, validation } = this.state

        const context = {
            recipe: recipe,
            handleFormUpdate: this.handleFormUpdate,
            handleFormAction: this.handleFormAction,
            formObject: formObject,
            validation: validation,
            validate: this.validate
        }

        return (
            <RiformContext.Provider value={context}>
                {children}
            </RiformContext.Provider>
        )
    }
}

export { Riform, RiformControl }
