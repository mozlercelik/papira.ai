const MuiButton = (theme) => {
    return {
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
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
                    },

                    ...(ownerState.variant === 'aiGradient' && {
                        fontWeight: 700,
                        fontSize: '1rem',
                        fontFamily: '"Playfair Display", serif',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        boxShadow: '0 4px 24px 0 rgba(102,126,234,0.15), 0 1.5px 8px 0 rgba(118,75,162,0.12)',
                        letterSpacing: '0.03em',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                        color: 'white',
                        '&:hover': {
                        boxShadow: '0 6px 30px 0 rgba(102,126,234,0.2), 0 2px 10px 0 rgba(118,75,162,0.15)',
                        transform: 'translateY(-1px)',
                        },
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            left: '-40%',
                            top: '-40%',
                            width: '180%',
                            height: '180%',
                            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(102,126,234,0.1) 60%, transparent 100%)',
                            zIndex: 0,
                            pointerEvents: 'none',
                            animation: `${aiGlowKeyframes['@global']['@keyframes aiGlow']} 3s linear infinite`
                        },
                        '& > *': {
                            position: 'relative',
                            zIndex: 1
                        }
                    }),
                }),
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
                },
            }
        }
    }
}

export const aiGlowKeyframes = {
    '@global': {
        '@keyframes aiGlow': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' }
        }
    }
}

export default MuiButton
