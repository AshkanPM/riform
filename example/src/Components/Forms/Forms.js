import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Forms.module.scss'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { paraisoDark } from 'react-syntax-highlighter/dist/styles/hljs'

import SimpleForm from './SimpleForm/SimpleForm'
import FormValidation from './FormValidation/FormValidation'
import FormGrouping from './FormGrouping/FormGrouping'

import Grid from '@material-ui/core/Grid'

const highlightStyles = {
    background: 'transparent',
    fontSize: '1.2em',
    lineHeight: '1.5'
}

class Forms extends Component {
    static propTypes = {
        activeTab: PropTypes.int
    }

    state = {
        preview: {}
    }

    handlePreviewUpdate = preview => this.setState({ preview })

    render() {
        const { activeTab } = this.props
        const { preview } = this.state
        const prettyPreview = JSON.stringify(preview, null, 4)

        return (
            <Grid container className={styles.forms}>
                <Grid item className={styles.center} xs={6}>

                    {activeTab === 0 && <SimpleForm onPreviewUpdate={this.handlePreviewUpdate} />}
                    {activeTab === 1 && <FormValidation onPreviewUpdate={this.handlePreviewUpdate} />}
                    {activeTab === 2 && <FormGrouping onPreviewUpdate={this.handlePreviewUpdate} />}

                </Grid>
                <Grid item className={styles.preview} xs={6}>
                    <span className={styles.previewTitle}>Form Data</span>

                    <SyntaxHighlighter
                        language='json'
                        style={paraisoDark}
                        customStyle={highlightStyles}
                    >
                        {prettyPreview}
                    </SyntaxHighlighter>
                </Grid>

            </Grid>
        )
    }
}

export default Forms
