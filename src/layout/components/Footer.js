import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  useTheme,
  Divider
} from '@mui/material';
import {
  GitHub,
  Twitter,
  LinkedIn,
  Instagram
} from '@mui/icons-material';
import Image from 'next/image';

const Footer = () => {
  const theme = useTheme();

  const footerLinks = {
    product: [
      { label: 'Özellikler', href: '/features' },
      { label: 'Şablonlar', href: '/templates' },
      { label: 'Fiyatlandırma', href: '/pricing' }
    ],
    company: [
      { label: 'Hakkımızda', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'İletişim', href: '/contact' }
    ],
    legal: [
      { label: 'Gizlilik', href: '/privacy' },
      { label: 'Kullanım Koşulları', href: '/terms' }
    ]
  };

  const socialLinks = [
    { icon: <GitHub />, href: 'https://github.com' },
    { icon: <Twitter />, href: 'https://twitter.com' },
    { icon: <LinkedIn />, href: 'https://linkedin.com' },
    { icon: <Instagram />, href: 'https://instagram.com' }
  ];

  return (
    <Box
      id="footer"
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.border.light}`,
        py: 4,
        mt: 'auto'
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Image
                src="/images/logo-vertical.png"
                alt="Papira Logo"
                width={120}
                height={40}
                style={{
                  objectFit: 'contain'
                }}
              />
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Modern belge oluşturma ve işbirliği platformu.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: theme.palette.text.secondary,
                    '&:hover': {
                      color: theme.palette.primary.main
                    }
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <Grid item xs={6} md={2} key={category}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                  mb: 2,
                  textTransform: 'capitalize'
                }}
              >
                {category}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    color="text.secondary"
                    sx={{
                      textDecoration: 'none',
                      '&:hover': {
                        color: theme.palette.primary.main
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Copyright */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Papira. Tüm hakları saklıdır.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
