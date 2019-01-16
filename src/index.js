import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'

import RiformContext from './Riform/RiformContext'
import RiformControl from './Riform/RiformControl'

class Riform extends Component {
    static propTypes = {
        children: PropTypes.node,
        recipe: PropTypes.object
    }

    state = {
        formObject: Map({})
    }

    handleFormUpdate = (address, value) => {
        const formObject = this.state.formObject.setIn(address, value)
        this.setState({ formObject })
    }
    handleFormAction = action => {
        if (action === 'submit') {
            console.log(this.state.formObject.toJS())
        }
    }

    render() {
        const { children, recipe } = this.props

        const context = {
            recipe: recipe,
            handleFormUpdate: this.handleFormUpdate,
            handleFormAction: this.handleFormAction
        }

        return (
            <RiformContext.Provider value={context}>
                {children}
            </RiformContext.Provider>
        )
    }
}

export { Riform, RiformControl }
