import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TextField from '@material-ui/core/TextField'

class TextInput extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        type: PropTypes.string,
        richange: PropTypes.func,
        rivalue: PropTypes.any
    }

    state = {
        value: ''
    }

    componentDidMount = () => {
        const { rivalue } = this.props

        if (rivalue) this.setState({ value: rivalue })
    }
    componentWillReceiveProps = nextProps => {
        const { rivalue } = nextProps

        if (rivalue) this.setState({ value: rivalue })
    }

    handleChange = event => {
        const { richange } = this.props
        const { value } = event.target

        this.setState({ value }, () => {
            richange(value)
        })
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
                onChange={this.handleChange}
                value={this.state.value}
            />
        )
    }
}

export default TextInput
