import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TextField from '@material-ui/core/TextField'
import WarningIcon from '@material-ui/icons/Warning'

class TextInput extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        type: PropTypes.string,
        error: PropTypes.string,
        onChange: PropTypes.func,
        richange: PropTypes.func,
        value: PropTypes.any,
        rivalue: PropTypes.any,
        rivalidate: PropTypes.func
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
        const { label, type, rivalidate, error } = this.props

        let errorMessage = ' '
        if (error) {
            errorMessage = (
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    <WarningIcon style={{fontSize: '1.2em', marginRight: '0.5rem'}} />
                    {error}
                </span>
            )
        }

        return (
            <TextField
                fullWidth
                error={Boolean(error)}
                label={label}
                type={type}
                margin='dense'
                variant='outlined'
                onChange={this.handleChange}
                onBlur={rivalidate}
                value={this.state.value}
                helperText={errorMessage}
            />
        )
    }
}

export default TextInput
