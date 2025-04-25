const MuiButton = (theme) => {
    return {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 500,
                    borderRadius: theme.shape.borderRadius,
                    padding: '8px 16px',
                    '&.MuiButton-contained': {
                        boxShadow: 'none',
                        '&:hover': {
                            boxShadow: theme.shadows[2]
                        }
                    },
                    '&.MuiButton-outlined': {
                        borderWidth: '1.5px',
                        '&:hover': {
                            borderWidth: '1.5px'
                        }
                    }
                },
                sizeSmall: {
                    padding: '4px 12px',
                    fontSize: '0.8125rem'
                },
                sizeLarge: {
                    padding: '10px 20px',
                    fontSize: '1rem'
                },
                containedPrimary: {
                    '&:hover': {
                        backgroundColor: theme.palette.primary.dark
                    }
                },
                containedSecondary: {
                    '&:hover': {
                        backgroundColor: theme.palette.secondary.dark
                    }
                }
            }
        }
    }
}

export default MuiButton
