import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from '../../Theme/Theme'

import Forms from '../Forms/Forms'

export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Forms />
            </MuiThemeProvider>
        )
    }
}
