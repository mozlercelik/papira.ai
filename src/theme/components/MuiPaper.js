export default {
  styleOverrides: {
    root: {
      backgroundImage: `
        linear-gradient(45deg, transparent 48%, rgba(0,0,0,0.02) 49%, rgba(0,0,0,0.02) 51%, transparent 52%),
        linear-gradient(-45deg, transparent 48%, rgba(0,0,0,0.02) 49%, rgba(0,0,0,0.02) 51%, transparent 52%)
      `,
      backgroundSize: '60px 60px',
      backgroundPosition: '0 0, 30px 30px',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
        pointerEvents: 'none'
      }
    },
    elevation1: {
      boxShadow: '0 2px 8px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.05)'
    },
    elevation2: {
      boxShadow: '0 4px 12px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.05)'
    },
    elevation3: {
      boxShadow: '0 6px 16px rgba(0,0,0,0.1), 0 3px 6px rgba(0,0,0,0.05)'
    },
    elevation4: {
      boxShadow: '0 8px 20px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.05)'
    },
    elevation5: {
      boxShadow: '0 10px 24px rgba(0,0,0,0.1), 0 5px 10px rgba(0,0,0,0.05)'
    }
  }
} 