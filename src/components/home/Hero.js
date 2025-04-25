import { Box, Typography, Button, Container, Grid, useTheme } from '@mui/material'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Hero = () => {
  const router = useRouter()
  const theme = useTheme()

  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: 'background.paper',
        overflow: 'hidden',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Background gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, ${theme.palette.primary.light}15 0%, ${theme.palette.secondary.light}15 100%)`,
          zIndex: 1
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              component="h1"
              variant="h2"
              color="text.primary"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                mb: 3,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}
            >
              Papira'ya Hoş Geldiniz
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              paragraph
              sx={{ mb: 4, lineHeight: 1.6 }}
            >
              Profesyonel belgelerinizi özelleştirilebilir şablonlarla kolayca oluşturun.
              AI destekli özelliklerimizle içeriğinizi geliştirin ve zamandan tasarruf edin.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                flexWrap: 'wrap'
              }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => router.push('/editor')}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderRadius: 2,
                  boxShadow: 3,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 6,
                    transition: 'all 0.2s ease-in-out'
                  }
                }}
              >
                Hemen Başla
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => router.push('/about')}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderRadius: 2,
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                    transform: 'translateY(-2px)',
                    transition: 'all 0.2s ease-in-out'
                  }
                }}
              >
                Daha Fazla Bilgi
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: 300, md: 500 },
                width: '100%',
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: 6
              }}
            >
              <Image
                src="/images/hero-image.png"
                alt="Document creation illustration"
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                priority
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Hero 