import { Box, Grid, Card, CardContent, Typography, CardActionArea, Container, Paper, useTheme, Fade, Button } from '@mui/material'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import EventIcon from '@mui/icons-material/Event'
import AssessmentIcon from '@mui/icons-material/Assessment'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { Fragment } from 'react'
import { Article, Assessment, StickyNote2 } from '@mui/icons-material'

const categories = [
  {
    title: 'Proje Dokümanları',
    description: 'Çalışanlar ve yöneticiler',
    icon: <Assessment sx={{ fontSize: 40 }} />,
    color: '#8d6748',
    example: 'Proje planı, ilerleme raporu',
    gradient: 'linear-gradient(135deg, #f3e8e2 0%, #bfa084 100%)',
    redirect: "/generator/projects",
  },
  {
    title: 'Akademik Çalışmalar',
    description: 'Öğrenciler ve araştırmacılar',
    icon: <SchoolIcon sx={{ fontSize: 40 }} />,
    color: '#7c5e44',
    example: 'Tez önerisi, literatür taraması, araştırma makalesi',
    gradient: 'linear-gradient(135deg, #ede0d4 0%, #d6ccc2 100%)',
    redirect: "/generator/academy",
    featured: true
  },
  {
    title: 'Kurumsal Dokümanlar',
    description: 'Etkinlik organizatörleri ve özel firmalar',
    icon: <StickyNote2 sx={{ fontSize: 40 }} />,
    color: '#a68a64',
    example: 'Teknik Şartname, toplantı gündemi, davetiye, sunum şablonu',
    gradient: 'linear-gradient(135deg, #f5eee6 0%, #bfa084 100%)',
    redirect: "/generator/business"
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

        <Grid container spacing={{ xs: 2, sm: 3, md: 2 }} sx={{ justifyContent: "center" }}>
          {categories.map((category, index) => (
            <Grid item key={category.title} xs={12} sm={6} md={4}>
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
                    onClick={() => window.open(category.redirect, '_blank')}
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
                          boxShadow: `0 4px 20px #bfa08430`,
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
                            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)',
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
                          textShadow: '0 1px 2px rgba(0,0,0,0.04)'
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
                      fullWidth
                      sx={{
                        mt: 2,
                        fontWeight: 700,
                        fontFamily: '"Playfair Display", serif',
                        color: '#7c5e44',
                        position: 'relative',
                        overflow: 'hidden',
                        background: "transparent",
                        border: '1px solid #7c5e44',
                        zIndex: 1,
                        fontSize: "1.25rem",
                        lineHeight: 2.5,
                        "&:hover": {
                          background: 'linear-gradient(90deg, #ede0d4 0%, #d6ccc2 100%)',
                          color: '#7c4f00',
                        },
                        ...(category.featured && {
                          background: 'linear-gradient(90deg, #ede0d4 0%, #d6ccc2 100%)',

                          "&:hover": {
                            background: 'linear-gradient(90deg, #d6ccc2 0%, #bfa084 100%)',
                            color: '#7c5e44',
                          },
                        }),
                        '& > *': {
                          position: 'relative',
                          zIndex: 3
                        }
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