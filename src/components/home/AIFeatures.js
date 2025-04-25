import { Box, Grid, Typography, Container } from '@mui/material'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'
import PlagiarismIcon from '@mui/icons-material/Plagiarism'
import SearchIcon from '@mui/icons-material/Search'

const features = [
  {
    title: 'AI-Powered Feedback',
    description: 'Get intelligent suggestions to improve your content quality and structure.',
    icon: <AutoFixHighIcon sx={{ fontSize: 40, color: 'primary.main' }} />
  },
  {
    title: 'Plagiarism Check',
    description: 'Ensure your content is original with our advanced plagiarism detection.',
    icon: <PlagiarismIcon sx={{ fontSize: 40, color: 'primary.main' }} />
  },
  {
    title: 'Smart Research',
    description: 'Find relevant literature and sources for your topic automatically.',
    icon: <SearchIcon sx={{ fontSize: 40, color: 'primary.main' }} />
  }
]

const AIFeatures = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{ mb: 6, fontWeight: 'bold' }}
        >
          AI-Powered Features
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid item key={feature.title} xs={12} md={4}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 3
                }}
              >
                <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h5" component="h3" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default AIFeatures 