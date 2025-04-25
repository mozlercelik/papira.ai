export default {
  styleOverrides: {
    root: {
      textTransform: 'none',
      fontWeight: 600,
      borderRadius: 8,
      padding: '8px 24px',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        transform: 'translateY(-2px)'
      }
    },
    contained: {
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      '&:hover': {
        boxShadow: '0 6px 16px rgba(0,0,0,0.15)'
      }
    },
    outlined: {
      borderWidth: 2,
      '&:hover': {
        borderWidth: 2
      }
    },
    text: {
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.04)'
      }
    }
  }
} 