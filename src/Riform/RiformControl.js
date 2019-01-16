import React, { Component } from 'react'

import { RiformContext } from '../index'

class RiformControl extends Component {
    static contextType = RiformContext

    render() {
        console.log(this.context)

        return (
            <p>Test</p>
        )
    }
}

export default RiformControl
