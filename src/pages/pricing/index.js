import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tooltip
} from '@mui/material';
import {
  Check as CheckIcon,
  Close as CloseIcon,
  Star as StarIcon,
  Business as BusinessIcon,
  School as SchoolIcon,
  Person as PersonIcon,
  Info as InfoIcon,
  Rocket as RocketIcon
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const PricingPage = () => {
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const pricingTiers = [
    {
      name: 'Freemium',
      price: 'Ücretsiz',
      description: 'Temel belge oluşturma ihtiyacı olan kullanıcılar için',
      icon: <PersonIcon />,
      features: [
        'Formatlama (Aylık 2 defa)',
        'Sayfa sınırı (Aylık 20 sayfa)',
        'Doküman kontrolü (Aylık 2 defa)',
        'Temel şablonlar',
        'AI önerileri ve geri bildirim',
        'Temel formatlar açık'
      ],
      highlight: false
    },
    {
      name: 'Premium',
      price: '$29',
      period: '/ay',
      description: 'Daha kapsamlı özelliklere ihtiyaç duyan öğrenciler, akademisyenler ve profesyoneller için',
      icon: <SchoolIcon />,
      features: [
        // 'Premium şablonlar',
        'Formatlama (Aylık 10 defa)',
        'Literatür taraması (Aylık 10 defa)',
        'İntihal kontrolü (Aylık 10 defa)',
        'Doküman Kontrol Hakkı (Aylık 20 defa)',
        'Sayfa sınırı (Aylık 1500 sayfa)',
        'Düzenleme hakkı',
        'Özel formatlama',
        'Tüm formatlar açık',
        'Kaynakça oluşturma',
        'Lisanslama önerisi',
        'Standartlara uygunluk kontrolü',
      ],
      highlight: true
    },
    {
      name: 'Basic',
      price: '$9',
      period: '/ay',
      description: 'Uzun belgeler oluşturma ve düzenleme ihtiyacı olan kullanıcılar için',
      icon: <RocketIcon />,
      features: [
        // 'Premium şablonlar',
        'Formatlama (Aylık 3 defa)',
        'Literatür taraması (Aylık 3 defa)',
        'İntihal kontrolü (Aylık 3 defa)',
        'Doküman Kontrol Hakkı (Aylık 7 defa)',
        'Sayfa sınırı (Aylık 400 sayfa)',
        'Tüm formatlar açık',
        'Kaynakça oluşturma',
        'Lisanslama önerisi',
        'Standartlara uygunluk kontrolü'
      ],
      highlight: false
    },
    {
      name: 'Kurumsal',
      price: 'İletişime Geçin',
      description: 'Üniversiteler, şirketler ve kurumlar için',
      icon: <BusinessIcon />,
      features: [
        'Toplu lisanslama',
        'Özel şablonlar',
        'API entegrasyonu',
        'Sınırsız formatlama',
        'Sınırsız intihal kontrolü',
        'Sınırsız literatür taraması',
        'Kişiselleştirilmiş raporlar'
      ],
      highlight: false
    }
  ];

  const columns = ['freemium', 'basic', 'premium', 'enterprise'];

  const comparisonFeatures = [
    {
      name: 'Temel Şablonlar',
      freemium: 'Var',
      basic: 'Var',
      premium: 'Var',
      enterprise: 'Var',
    },
    {
      name: 'Premium Şablonlar',
      freemium: 'Yok',
      basic: 'Yok',
      premium: 'Var',
      enterprise: 'Var'
    },
    {
      name: 'Formatlama Seçenekleri',
      freemium: 'Kısıtlı',
      basic: 'Kısıtlı',
      premium: 'Tümü',
      enterprise: 'Tümü'
    },
    {
      name: 'Düzenleme Hakkı',
      freemium: 'Aylık 2 defa',
      basic: 'Aylık 2 defa',
      premium: 'Aylık 5 defa',
      enterprise: 'Sınırsız'
    },
    {
      name: 'Formatlama Hakkı',
      freemium: 'Aylık 2 defa',
      basic: 'Aylık 2 defa',
      premium: 'Aylık 5 defa',
      enterprise: 'Sınırsız'
    },
    {
      name: 'Sayfa Sınırı',
      freemium: 'Aylık 15 sayfa',
      basic: 'Aylık 400 sayfa',
      premium: 'Aylık 1500 sayfa',
      enterprise: 'Sınırsız'
    },
    {
      name: 'Doküman Kontrol Hakkı',
      freemium: 'Aylık 1 defa',
      basic: 'Aylık 3 defa',
      premium: 'Aylık 10 defa',
      enterprise: 'Sınırsız'
    },
    {
      name: 'Literatür Taraması',
      freemium: 'Yok',
      basic: 'Aylık 3 defa',
      premium: 'Aylık 10 defa',
      enterprise: 'Sınırsız'
    },
    {
      name: 'İntihal Kontrolü',
      freemium: 'Yok',
      basic: 'Aylık 3 defa',
      premium: 'Aylık 10 defa',
      enterprise: 'Sınırsız'
    },
    {
      name: 'Özel Formatlama',
      freemium: 'Yok',
      basic: 'Yok',
      premium: 'Var',
      enterprise: 'Var'
    },
    {
      name: 'Kaynakça Oluşturma',
      freemium: 'Yok',
      basic: 'Var',
      premium: 'Var',
      enterprise: 'Var'
    },
    {
      name: 'Lisanslama Önerisi',
      freemium: 'Yok',
      basic: 'Var',
      premium: 'Var',
      enterprise: 'Var'
    },
    {
      name: 'Standartlara Uygunluk Kontrolü',
      freemium: 'Yok',
      basic: 'Var',
      premium: 'Var',
      enterprise: 'Var'
    },
    {
      name: 'API Entegrasyonu',
      freemium: 'Yok',
      basic: 'Yok',
      premium: 'Yok',
      enterprise: 'Var'
    }
  ];

  const FeatureList = ({ features }) => (
    <List dense>
      {features.map((feature, index) => {
        const isKeyFeature = feature.includes('Formatlama') ||
          feature.includes('Sayfa sınırı') ||
          feature.includes('Doküman Kontrol') ||
          feature.includes('Literatür') ||
          feature.includes('İntihal') ||
          feature.includes('Özel formatlama') ||
          feature.includes('Düzenleme hakkı');

        return (
          <ListItem key={index} sx={{ py: 0.5 }}>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  component="span"
                  sx={{
                    fontWeight: isKeyFeature ? 600 : 400,
                    color: isKeyFeature ? 'text.primary' : 'text.secondary'
                  }}
                >
                  {feature}
                </Typography>
              }
            />
          </ListItem>
        );
      })}
    </List>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" component="h1" gutterBottom>
          Fiyatlandırma Planları
        </Typography>
        <Typography variant="h6" color="text.secondary">
          İhtiyaçlarınıza uygun planı seçin
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center" sx={{ mb: 8 }}>
        {pricingTiers.map((tier, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: tier.highlight ? `2px solid ${theme.palette.primary.main}` : undefined,
                  boxShadow: tier.highlight ? theme.shadows[4] : theme.shadows[1],
                  '&:hover': {
                    boxShadow: theme.shadows[8]
                  }
                }}
              >
                {tier.highlight && (
                  <Chip
                    label="En Popüler"
                    color="primary"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      zIndex: 1
                    }}
                  />
                )}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box display="flex" alignItems="center" mb={2}>
                    {tier.icon}
                    <Typography variant="h5" component="h2" sx={{ ml: 1 }}>
                      {tier.name}
                    </Typography>
                  </Box>
                  <Typography variant="h4" component="div" gutterBottom>
                    <Box
                      component="span"
                      sx={{
                        background: 'linear-gradient(45deg, #8B4513, #A0522D)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 700,
                        fontSize: tier.price == "$19" ? '2.5rem' : tier.price == "$9" ? "2rem" : '1.5rem',
                        display: 'inline-block',
                        textShadow: '0px 2px 4px rgba(0,0,0,0.1)'
                      }}
                    >
                      {tier.price}
                    </Box>
                    {tier.period && (
                      <Typography
                        component="span"
                        variant="body1"
                        sx={{
                          color: 'text.secondary',
                          ml: 1,
                          fontWeight: 500
                        }}
                      >
                        {tier.period}
                      </Typography>
                    )}
                  </Typography>
                  <Typography color="text.secondary" gutterBottom>
                    {tier.description}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  {/* <Typography variant="subtitle1" gutterBottom>
                    Özellikler
                  </Typography> */}
                  <FeatureList features={tier.features} />
                </CardContent>
                <CardActions sx={{ p: 2 }}>
                  <Button
                    fullWidth
                    variant={tier.highlight ? 'contained' : 'outlined'}
                    size="large"
                    onClick={() => {
                      if (tier.name === 'Kurumsal') {
                        router.push('/contact');
                      } else {
                        router.push('/signup');
                      }
                    }}
                  >
                    {tier.name === 'Kurumsal' ? 'İletişime Geçin' : 'Başla'}
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Comparison Table */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center">
          Paket Karşılaştırma
        </Typography>
        <TableContainer
          component={Paper}
          sx={{
            mt: 4,
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: theme.shadows[4],
            '& .MuiTableCell-root': {
              minHeight: "1.5rem",
              borderColor: theme.palette.divider,
              py: 2
            }
          }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: theme.palette.background.paper }}>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    color: theme.palette.text.primary
                  }}
                >
                  Özellik
                </TableCell>

                {['Freemium', 'Basic', 'Premium', 'Kurumsal'].map((plan, index) => (
                  <TableCell
                    key={index}
                    align="center"
                    sx={{
                      fontWeight: 600,
                      fontSize: '1.1rem',
                      color: theme.palette.text.primary,
                      position: 'relative',
                      '&:nth-child(4)': { // Premium column
                        bgcolor: theme.palette.primary.light,
                        color: theme.palette.primary.contrastText,
                        boxShadow: `0 0 20px ${theme.palette.primary.main}33`,
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: 4,
                          animation: 'gradient 3s ease infinite'
                        }
                      }
                    }}
                  >
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1
                    }}>
                      {index === 2 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                          style={{ display: "flex" }}
                        >
                          <StarIcon />
                        </motion.div>
                      )}

                      {plan}

                    </Box>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {comparisonFeatures.map((feature, index) => (
                <TableRow
                  key={index}
                  sx={{
                    '&:nth-of-type(odd)': {
                      bgcolor: theme.palette.action.hover
                    },
                    '&:hover': {
                      bgcolor: theme.palette.action.selected
                    }
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    {feature.name}

                    <Tooltip title="Bu özellik hakkında daha fazla bilgi">
                      <InfoIcon fontSize="small" color="action" />
                    </Tooltip>
                  </TableCell>

                  {columns.map((plan) => (
                    <TableCell
                      key={plan}
                      align="center"
                      sx={{
                        position: 'relative',
                        '&:nth-child(4)': { // Premium column
                          color: theme.palette.primary.main,
                          fontWeight: 500,
                          // background: `linear-gradient(45deg, ${theme.palette.primary.light}11, ${theme.palette.primary.light}11)`,
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            // background: `linear-gradient(45deg, ${theme.palette.primary.light}11, transparent)`,
                          }
                        }
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}
                      >
                        {feature[plan] === 'Var' && (
                          <CheckIcon color="success" />
                        )}
                        {feature[plan] === 'Yok' && (
                          <CloseIcon color="error" />
                        )}
                        {feature[plan] !== 'Var' && feature[plan] !== 'Yok' && feature[plan]}
                      </motion.div>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

PricingPage.acl = {
  action: 'read',
  permission: 'pricing'
};

export default PricingPage; 