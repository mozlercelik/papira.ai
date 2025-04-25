import { hexToRGBA } from "@/utils/hex-to-rgba"

const MuiCard = (theme) => {
    return {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: theme.shape.borderRadius,
                    boxShadow: theme.shadows[1],
                    '&:hover': {
                        boxShadow: theme.shadows[4]
                    }
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(2, 3),
                    '& .MuiCardHeader-title': {
                        fontSize: '1.125rem',
                        fontWeight: 600
                    }
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(2, 3),
                    '&:last-child': {
                        paddingBottom: theme.spacing(2)
                    }
                }
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(2, 3)
                }
            }
        }
    }
}

export default MuiCard
