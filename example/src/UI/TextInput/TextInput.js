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
        const { rivalue, value } = this.props
        const processedValue = rivalue ? rivalue : value ? value : ''

        this.setState({ value: processedValue })
    }
    componentWillReceiveProps = nextProps => {
        const { rivalue, value } = nextProps
        const processedValue = rivalue ? rivalue : value ? value : ''

        this.setState({ value: processedValue })
    }

    handleChange = event => {
        const { richange, onChange } = this.props
        const { value } = event.target
        if (onChange) onChange(event)

        this.setState({ value }, () => {
            if (richange) richange(value)
        })
    }

    render() {
        const { label, type } = this.props

        return (
            <TextField
                fullWidth
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
