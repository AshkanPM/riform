import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#84C3BE'
        },
        secondary: {
            main: '#497E76'
        },
        error: {
            main: '#6D3F5B'
        },
        contrastThreshold: 3,
        tonalOffset: 0.2
    },
    typography: {
        useNextVariants: true
    }
})

export default theme
