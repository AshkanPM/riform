import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Riform extends Component {
    static propTypes = {
        children: PropTypes.node,
        recipe: PropTypes.array
    }

    render() {
        const { children, recipe } = this.props

        console.log(recipe)

        return (
            <React.Fragment>
                {children}
            </React.Fragment>
        )
    }
}

export default Riform
