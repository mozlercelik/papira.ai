import { Box, Card, Typography, useTheme } from '@mui/material'
import FadeIn from '../animation/FadeIn'

const AnimatedCard = ({ title, content, delay = 0 }) => {
  const theme = useTheme()

  return (
    <FadeIn delay={delay}>
      <Card
        sx={{
          p: 3,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: theme.shadows[8]
          }
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {content}
        </Typography>
      </Card>
    </FadeIn>
  )
}

export default AnimatedCard 