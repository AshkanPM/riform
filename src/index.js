import React, { Component } from 'react'
import PropTypes from 'prop-types'

import RiformControl from './Riform/RiformControl'

export const RiformContext = React.createContext('test')

class Riform extends Component {
    static propTypes = {
        children: PropTypes.node,
        recipe: PropTypes.array
    }

    render() {
        const { children, recipe } = this.props

        console.log(recipe)

        return (
            <RiformContext.Provider value={'test'}>
                {children}
            </RiformContext.Provider>
        )
    }
}

export default Riform

export { RiformControl }
