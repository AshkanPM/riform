import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from '../../Theme/Theme'

import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import Forms from '../Forms/Forms'

export default class App extends Component {
    state = {
        activeTab: 2
    }

    handleTabChange = (_, value) => {
        this.setState({ activeTab: value })
    }

    render() {
        const { activeTab } = this.state

        return (
            <MuiThemeProvider theme={theme}>
                <AppBar position="fixed" color="secondary">
                    <Tabs value={activeTab} onChange={this.handleTabChange}>
                        <Tab label="Simple Form" />
                        <Tab label="Form Validation" />
                        <Tab label="Form Grouping" />
                    </Tabs>
                </AppBar>

                <Forms activeTab={activeTab} />
            </MuiThemeProvider>
        )
    }
}
