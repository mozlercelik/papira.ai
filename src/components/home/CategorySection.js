import { Box, Grid, Card, CardContent, Typography, CardActionArea, Container, Paper, useTheme, Fade, Button } from '@mui/material'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import EventIcon from '@mui/icons-material/Event'
import AssessmentIcon from '@mui/icons-material/Assessment'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { Fragment } from 'react'

const categories = [
  {
    title: 'Akademik Çalışmalar',
    description: 'Öğrenciler ve araştırmacılar',
    icon: <SchoolIcon sx={{ fontSize: 40 }} />,
    color: '#2196F3',
    example: 'Tez önerisi, literatür taraması, araştırma makalesi',
    gradient: 'linear-gradient(135deg, #2196F3 0%, #64B5F6 100%)'
  },
  {
    title: 'Proje Dokümanları',
    description: 'Çalışanlar ve yöneticiler',
    icon: <WorkIcon sx={{ fontSize: 40 }} />,
    color: '#FF4081',
    example: 'Proje planı, ilerleme raporu, değerlendirme formu',
    gradient: 'linear-gradient(135deg, #FF4081 0%, #FF80AB 100%)'
  },
  {
    title: 'Toplantı Materyalleri',
    description: 'Etkinlik organizatörleri',
    icon: <EventIcon sx={{ fontSize: 40 }} />,
    color: '#4CAF50',
    example: 'Toplantı gündemi, davetiye, sunum şablonu',
    gradient: 'linear-gradient(135deg, #4CAF50 0%, #81C784 100%)'
  },
  {
    title: 'Detaylı Raporlar',
    description: 'Analistler ve danışmanlar',
    icon: <AssessmentIcon sx={{ fontSize: 40 }} />,
    color: '#FFC107',
    example: 'Pazar analizi, performans raporu, değerlendirme sunumu',
    gradient: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)'
  }
]

const CategorySection = () => {
  const router = useRouter()
  const theme = useTheme()

  return (
    <Box
      sx={{
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 3, md: 4 },
        bgcolor: 'background.default',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{
            mb: { xs: 4, sm: 5, md: 6 },
            fontWeight: 700,
            fontFamily: '"Playfair Display", serif',
            position: 'relative',
            '&::after': {
              content: '""',
              display: 'block',
              width: '60px',
              height: '4px',
              background: theme.palette.primary.main,
              margin: '16px auto 0',
              borderRadius: '2px'
            }
          }}
        >
          Belge Türünü Seçin
        </Typography>
        <Grid container spacing={{ xs: 2, sm: 3, md: 2 }}>
          {categories.map((category, index) => (
            <Grid item key={category.title} xs={12} sm={6} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease-in-out',
                    background: 'linear-gradient(135deg, #fff 0%, #f8f8f8 100%)',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.02) 0px, rgba(0,0,0,0.02) 1px, transparent 1px, transparent 2px)',
                      pointerEvents: 'none',
                      opacity: 0.5
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)',
                      pointerEvents: 'none',
                      opacity: 0.3
                    },
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                      '& .category-icon': {
                        transform: 'scale(1.1)'
                      }
                    }
                  }}
                >
                  <CardActionArea
                    onClick={() => router.push('/editor')}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      p: { xs: 2, sm: 2.5, md: 3 },
                      position: 'relative',
                      zIndex: 1,
                      '&:hover': {
                        backgroundColor: 'transparent'
                      }
                    }}
                  >
                    <Box 
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "start",
                      height: "100%",
                    }}
                    >
                      {/* Icon Section */}
                      <Box
                        className="category-icon"
                        sx={{
                          mb: 2,
                          p: 1.5,
                          borderRadius: '50%',
                          background: category.gradient,
                          transition: 'transform 0.3s ease-in-out',
                          boxShadow: `0 4px 20px ${category.color}40`,
                          position: 'relative',
                          height: "40px",
                          width: "40px",

                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            borderRadius: '50%',
                            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)',
                            pointerEvents: 'none'
                          }
                        }}
                      >
                        {category.icon}
                      </Box>

                      {/* Title Section */}
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        sx={{
                          textAlign: 'center',
                          fontWeight: 700,
                          color: category.color,
                          mb: 1,
                          fontFamily: '"Playfair Display", serif',
                          textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                        }}
                      >
                        {category.title}
                      </Typography>

                      {/* Description Section */}
                      <Typography
                        color="text.secondary"
                        sx={{
                          textAlign: 'center',
                          mb: 0,
                          minHeight: '48px',
                          px: 1,
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: 8,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '40%',
                            height: '1px',
                            background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.1), transparent)'
                          }
                        }}
                      >
                        {category.description}
                      </Typography>

                      {/* Example Section */}
                      <Paper
                        elevation={0}
                        sx={{
                          height: "100%",
                          width: 'auto',
                          maxWidth: '100%',
                          p: 1.5,
                          bgcolor: 'background.paper',
                          borderRadius: 2,
                          border: `1px solid ${theme.palette.border.light}`,
                          transition: 'all 0.3s ease-in-out',
                          position: 'relative',
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.02) 0px, rgba(0,0,0,0.02) 1px, transparent 1px, transparent 2px)',
                            pointerEvents: 'none',
                            opacity: 0.3,
                            borderRadius: 2
                          },
                          '&:hover': {
                            borderColor: category.color,
                            backgroundColor: `${category.color}08`,
                            transform: 'translateY(-2px)',
                            boxShadow: `0 4px 12px ${category.color}20`
                          }
                        }}
                      >
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            textAlign: 'center',
                            fontStyle: 'italic',
                            lineHeight: 1.6,
                            px: { xs: 0.5, sm: 1 }
                          }}
                        >
                          {category.example}
                        </Typography>
                      </Paper>
                    </Box>

                    {/* Quick Start Button */}
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => router.push('/editor')}
                      sx={{
                        mt: 2,
                        py: 1,
                        px: 3,
                        borderRadius: 2,
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        background: category.gradient,
                        boxShadow: `0 4px 14px ${category.color}40`,
                        '&:hover': {
                          background: category.gradient,
                          boxShadow: `0 6px 20px ${category.color}60`,
                          transform: 'translateY(-2px)'
                        },
                        transition: 'all 0.3s ease-in-out'
                      }}
                    >
                      Hemen Başla
                    </Button>
                  </CardActionArea>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default CategorySection 