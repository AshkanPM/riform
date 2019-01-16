import React, { Component } from 'react'
import PropTypes from 'prop-types'

import RiformContext from './Riform/RiformContext'
import RiformControl from './Riform/RiformControl'

class Riform extends Component {
    static propTypes = {
        children: PropTypes.node,
        recipe: PropTypes.object
    }

    render() {
        const { children, recipe } = this.props

        return (
            <RiformContext.Provider value={recipe}>
                {children}
            </RiformContext.Provider>
        )
    }
}

export { Riform, RiformControl }
