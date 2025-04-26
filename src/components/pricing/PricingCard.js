import { Paper, Typography, Button, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { styled } from '@mui/material/styles'

const StyledPaper = styled(Paper)(({ theme, featured }) => ({
  height: '100%',
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.shape.borderRadius * 2,
  transition: 'transform 0.3s ease-in-out',
  position: 'relative',
  overflow: 'hidden',
  transform: featured ? 'scale(1.05)' : 'none',
  border: featured ? `2px solid ${theme.palette.primary.main}` : 'none',
  '&:hover': {
    transform: featured ? 'scale(1.08)' : 'scale(1.03)'
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: featured
      ? 'linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(21, 101, 192, 0.05) 100%)'
      : 'none',
    pointerEvents: 'none'
  }
}))

const PricingCard = ({ title, price, features, buttonText, featured = false }) => {
  return (
    <StyledPaper elevation={featured ? 8 : 2} featured={featured}>
      {featured && (
        <Typography
          sx={{
            position: 'absolute',
            top: 12,
            right: -32,
            transform: 'rotate(45deg)',
            backgroundColor: 'primary.main',
            color: 'white',
            py: 0.5,
            px: 4,
            fontSize: '0.875rem'
          }}
        >
          Popüler
        </Typography>
      )}

      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
        {title}
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h3"
          component="span"
          sx={{ fontWeight: 700, color: featured ? 'primary.main' : 'text.primary' }}
        >
          {price === 0 ? 'Ücretsiz' : `₺${price}`}
        </Typography>
        {price !== 0 && (
          <Typography variant="subtitle1" component="span" sx={{ color: 'text.secondary', ml: 1 }}>
            /ay
          </Typography>
        )}
      </Box>

      <List sx={{ mb: 4, flexGrow: 1 }}>
        {features.map((feature, index) => (
          <ListItem key={index} sx={{ px: 0 }}>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <CheckCircleIcon color={featured ? 'primary' : 'action'} />
            </ListItemIcon>
            <ListItemText primary={feature} />
          </ListItem>
        ))}
      </List>

      <Button
        variant={featured ? 'contained' : 'outlined'}
        size="large"
        fullWidth
        sx={{
          py: 1.5,
          borderRadius: 2,
          ...(featured && {
            background: 'linear-gradient(135deg, #1976D2 0%, #1565C0 100%)',
            '&:hover': {
              background: 'linear-gradient(135deg, #1565C0 0%, #0D47A1 100%)'
            }
          })
        }}
      >
        {buttonText}
      </Button>
    </StyledPaper>
  )
}

export default PricingCard 