const MuiTextField = (theme) => {
    return {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: theme.shape.borderRadius,
                        '& fieldset': {
                            borderColor: theme.palette.border.main
                        },
                        '&:hover fieldset': {
                            borderColor: theme.palette.primary.main
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: theme.palette.primary.main,
                            borderWidth: '1.5px'
                        }
                    },
                    '& .MuiInputLabel-root': {
                        color: theme.palette.text.secondary,
                        '&.Mui-focused': {
                            color: theme.palette.primary.main
                        }
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.primary.main,
                        borderWidth: '1.5px'
                    }
                }
            }
        }
    }
}

export default MuiTextField
