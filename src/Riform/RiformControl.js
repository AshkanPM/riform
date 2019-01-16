import React, { Component } from 'react'
import PropTypes from 'prop-types'

import RiformContext from './RiformContext'

class RiformControl extends Component {
    static propTypes = {
        name: PropTypes.string,
        children: PropTypes.node
    }
    static contextType = RiformContext

    render() {
        const { name, children, ...props } = this.props
        const recipe = this.context

        // Checking if component exists in recipe
        if (!recipe[name]) {
            return <span style={{ color: 'red' }}>Component not found!</span>
        }

        // Deconstructing the relevant input
        const {
            component: Component,
            props: recipeProps
        } = recipe[name]

        return (
            <Component {...recipeProps} {...props}>
                {children}
            </Component>
        )
    }
}

export default RiformControl
