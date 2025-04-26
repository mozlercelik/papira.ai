import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    Card,
    CardContent,
    CardMedia,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    useTheme,
} from '@mui/material';
import {
    AutoFixHigh,
    Speed,
    Security,
    IntegrationInstructions,
    CheckCircle,
    SmartToy,
    Description,
    Bookmark,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const features = [
    {
        title: 'Yapay Zeka Destekli Yazım',
        description: 'Gelişmiş yapay zeka teknolojimizle yüksek kaliteli içerik oluşturun',
        icon: <AutoFixHigh />,
        color: 'primary',
    },
    {
        title: 'Akıllı Şablonlar',
        description: 'Her amaç için profesyonelce tasarlanmış şablonlardan seçim yapın',
        icon: <Bookmark />,
        color: 'secondary',
    },
    {
        title: 'Gerçek Zamanlı İş Birliği',
        description: 'Ekibinizle gerçek zamanlı olarak birlikte çalışın',
        icon: <IntegrationInstructions />,
        color: 'info',
    },
    {
        title: 'Gelişmiş Güvenlik',
        description: 'Verileriniz kurumsal düzeyde güvenlik ile korunur',
        icon: <Security />,
        color: 'success',
    },
    {
        title: 'Yıldırım Hızında',
        description: 'Optimize edilmiş motorumuzla yıldırım hızında performans deneyimi',
        icon: <Speed />,
        color: 'warning',
    },
    {
        title: 'Akıllı Asistan',
        description: 'Yazarken akıllı öneriler ve iyileştirmeler alın',
        icon: <SmartToy />,
        color: 'error',
    },
];

const benefits = [
    'Yapay zeka destekli içerik oluşturma ile zaman kazanın',
    'Profesyonel belgeleri dakikalar içinde oluşturun',
    'Ekibinizle sorunsuz iş birliği yapın',
    'Çalışmalarınıza her yerden erişin',
    'Şablonları markanıza uygun özelleştirin',
    'Gerçek zamanlı geri bildirim ve öneriler alın',
];

const FeaturesPage = () => {
    const theme = useTheme();
    const router = useRouter();

    return (
        <Container maxWidth="lg">
            <Box sx={{ py: 8 }}>
                {/* Hero Section */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Typography variant="h2" component="h1" gutterBottom>
                            Modern Yazım İçin Güçlü Özellikler
                        </Typography>
                        <Typography variant="h5" color="text.secondary" paragraph>
                            Platformumuzun yazım deneyiminizi nasıl dönüştürebileceğini keşfedin
                        </Typography>
                    </motion.div>
                </Box>

                {/* Features Grid */}
                <Grid container spacing={4} sx={{ mb: 8 }}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: theme.shadows[8],
                                        },
                                        transition: 'all 0.3s ease-in-out',
                                    }}
                                >
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                mb: 2,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    bgcolor: `${feature.color}.light`,
                                                    color: `${feature.color}.main`,
                                                    p: 1,
                                                    borderRadius: 1,
                                                    mr: 2,
                                                }}
                                            >
                                                {feature.icon}
                                            </Box>
                                            <Typography variant="h6" component="h3">
                                                {feature.title}
                                            </Typography>
                                        </Box>
                                        <Typography color="text.secondary">
                                            {feature.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                {/* Benefits Section */}
                <Box sx={{ mb: 8 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Neden Platformumuzu Seçmelisiniz?
                    </Typography>
                    <List>
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckCircle color="success" />
                                    </ListItemIcon>
                                    <ListItemText primary={benefit} />
                                </ListItem>
                            </motion.div>
                        ))}
                    </List>
                </Box>

                {/* CTA Section */}
                <Box
                    sx={{
                        textAlign: 'center',
                        bgcolor: 'background.paper',
                        p: 4,
                        borderRadius: 2,
                        boxShadow: theme.shadows[2],
                    }}
                >
                    <Typography variant="h4" component="h2" gutterBottom>
                        Başlamaya Hazır mısınız?
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        Platformumuzla harika içerikler oluşturan binlerce kullanıcıya katılın.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<Description />}
                        onClick={() => router.push('/generator/projects')}
                        sx={{ mt: 2 }}
                    >
                        Hemen Yazmaya Başla
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

FeaturesPage.acl = {
    action: 'read',
    permission: 'features',
};

export default FeaturesPage; 