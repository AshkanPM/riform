import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './FamilyInput.module.scss'

import TextField from '@material-ui/core/TextField'

class FamilyInput extends Component {
    static propTypes = {
        richange: PropTypes.func,
        rivalue: PropTypes.any
    }

    state = {
        member: {
            relation: '',
            name: ''
        }
    }

    componentDidMount = () => {
        const { rivalue } = this.props

        if (rivalue) {
            const { relation, name } = rivalue
            const updatedMember = {}

            if (relation) updatedMember.relation = relation
            if (name) updatedMember.name = name

            this.setState({ member: updatedMember })
        } else {
            this.setState({ member: {relation: '', name: ''} })
        }
    }
    componentWillReceiveProps = nextProps => {
        const { rivalue } = nextProps

        if (rivalue) {
            const { relation, name } = rivalue
            const updatedMember = {}

            updatedMember.relation = relation ? relation : ''
            updatedMember.name = name ? name : ''

            this.setState({ member: updatedMember })
        } else {
            this.setState({ member: {relation: '', name: ''} })
        }
    }

    handleChange = event => {
        const { member } = this.state
        const { richange } = this.props
        const { name, value } = event.target

        const updatedMember = { ...member }
        updatedMember[name] = value
        
        this.setState({ member: updatedMember }, () => {
            richange(updatedMember)
        })
    }

    render() {
        const { relation, name } = this.state.member

        return (
            <div className={styles.familyInput}>
                <TextField
                    fullWidth
                    label='Relation'
                    name='relation'
                    autoComplete='off'
                    margin='dense'
                    variant='outlined'
                    onChange={this.handleChange}
                    value={relation}
                />

                <TextField
                    fullWidth
                    label='Full Name'
                    name='name'
                    autoComplete='off'
                    margin='dense'
                    variant='outlined'
                    onChange={this.handleChange}
                    value={name}
                />
            </div>
        )
    }
}

export default FamilyInput