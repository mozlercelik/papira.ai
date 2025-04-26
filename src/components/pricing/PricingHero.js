import { Box, Typography, Container } from '@mui/material'
import FadeIn from '@/components/animation/FadeIn'

const PricingHero = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        marginLeft: "-24px",
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #ede0d4 0%, #bfa084 100%)',
        color: '#5B4636',
        position: 'relative',
        boxShadow: '0 2px 24px 0 rgba(91, 70, 54, 0.04) inset'
      }}
    >
      <Container maxWidth="lg">
        <FadeIn>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontFamily: '"Playfair Display", serif',
              letterSpacing: '-0.02em',
              color: '#5B4636',
              textShadow: '0 1px 0 #fff, 0 2px 8px rgba(91,70,54,0.04)'
            }}
          >
            Fiyatlandırma Planları
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textAlign: 'center',
              fontWeight: 400,
              color: '#7c5e44',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
              textShadow: '0 1px 0 #fff'
            }}
          >
            İhtiyacınıza uygun, esnek ve şeffaf fiyatlandırma. Her ölçekten kullanıcı için modern ve güçlü belge oluşturma!
          </Typography>
        </FadeIn>
      </Container>
    </Box>
  )
}

export default PricingHero 