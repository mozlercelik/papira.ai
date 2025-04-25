const typography = {
    fontFamily: [
        'Poppins',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
    ].join(','),
    h1: {
        fontWeight: 600,
        fontSize: '2.5rem',
        lineHeight: 1.2,
        letterSpacing: '-0.02em'
    },
    h2: {
        fontWeight: 600,
        fontSize: '2rem',
        lineHeight: 1.3,
        letterSpacing: '-0.01em'
    },
    h3: {
        fontWeight: 600,
        fontSize: '1.75rem',
        lineHeight: 1.4
    },
    h4: {
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: 1.4
    },
    h5: {
        fontWeight: 600,
        fontSize: '1.25rem',
        lineHeight: 1.4
    },
    h6: {
        fontWeight: 600,
        fontSize: '1rem',
        lineHeight: 1.4
    },
    subtitle1: {
        fontWeight: 500,
        fontSize: '1rem',
        lineHeight: 1.5,
        letterSpacing: '0.00938em'
    },
    subtitle2: {
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: 1.57,
        letterSpacing: '0.00714em'
    },
    body1: {
        fontSize: '1rem',
        lineHeight: 1.5,
        letterSpacing: '0.00938em'
    },
    body2: {
        fontSize: '0.875rem',
        lineHeight: 1.43,
        letterSpacing: '0.01071em'
    },
    button: {
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: 1.75,
        letterSpacing: '0.02857em',
        textTransform: 'none'
    },
    caption: {
        fontSize: '0.75rem',
        lineHeight: 1.66,
        letterSpacing: '0.03333em'
    },
    overline: {
        fontSize: '0.75rem',
        fontWeight: 600,
        lineHeight: 2.66,
        letterSpacing: '0.08333em',
        textTransform: 'uppercase'
    },
    lineHeight: "1.5rem",
    fontWeight: 300,
    body3: {
        fontSize: "1.563rem",
    },
    button1: {
        fontSize: "1rem",
    },
    button2: {
        fontSize: "1.25rem",
    },
    button3: {
        fontSize: "1.563rem",
    },
    link: {
        //
        fontSize: "1rem",
        fontWeight: 400,
        color: "#121E35",
        fontStyle: "italic",
        cursor: "pointer",
        "&:hover": {
            color: "#121E35",
        },
    },
    linklight: {
        //
        fontSize: "1rem",
        fontWeight: 400,
        color: "#F8F5EC",
        fontStyle: "italic",
        lineHeight: "1.875rem",
        cursor: "pointer",
        "&:hover": {
            color: "#F8F5EC",
        },
    },
    infoText: {
        color: "#121E35",
        fontSize: "1rem",
    },
    // Academic specific typography
    academicTitle: {
        fontSize: '1.125rem',
        fontWeight: 600,
        lineHeight: 1.4,
        letterSpacing: '0.0075em'
    },
    academicSubtitle: {
        fontSize: '1rem',
        fontWeight: 500,
        lineHeight: 1.5,
        letterSpacing: '0.00938em'
    },
    academicBody: {
        fontSize: '1rem',
        lineHeight: 1.6,
        letterSpacing: '0.00938em'
    },
    academicCaption: {
        fontSize: '0.875rem',
        lineHeight: 1.5,
        letterSpacing: '0.01071em',
        color: 'text.secondary'
    }
}

export default typography