import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TextField from '@material-ui/core/TextField'

class TextInput extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        type: PropTypes.string
    }

    render() {
        const { label, type } = this.props

        return (
            <TextField
                fullWidth
                required
                label={label}
                type={type}
                margin='dense'
                variant='outlined'
            />
        )
    }
}

export default TextInput
