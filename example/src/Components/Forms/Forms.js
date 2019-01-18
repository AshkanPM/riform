import React, { Component } from 'react'
import styles from './Forms.module.scss'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { paraisoDark } from 'react-syntax-highlighter/dist/styles/hljs';

import SimpleForm from './SimpleForm/SimpleForm'

import Grid from '@material-ui/core/Grid'

const highlightStyles = {
    background: 'transparent',
    fontSize: '1.2em',
    lineHeight: '1.5'
}

class Forms extends Component {
    state = {
        preview: {}
    }

    handlePreviewUpdate = preview => this.setState({ preview })

    render() {
        const { preview } = this.state
        const prettyPreview = JSON.stringify(preview, null, 4)

        return (
            <Grid container className={styles.forms}>
                <Grid item className={styles.center} xs={6}>
                    <SimpleForm onPreviewUpdate={this.handlePreviewUpdate} />
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
