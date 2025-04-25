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

const Footer = () => {
  const theme = useTheme();

  const footerLinks = {
    product: [
      { label: 'Features', href: '/features' },
      { label: 'Templates', href: '/templates' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Documentation', href: '/docs' }
    ],
    company: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' }
    ],
    resources: [
      { label: 'Help Center', href: '/help' },
      { label: 'Community', href: '/community' },
      { label: 'Status', href: '/status' },
      { label: 'API', href: '/api' }
    ],
    legal: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Security', href: '/security' }
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
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.primary.main,
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                mb: 2
              }}
            >
              Papira
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Create beautiful documents with ease. The modern way to write, edit, and collaborate.
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

        <Divider sx={{ my: 4 }} />

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
            © {new Date().getFullYear()} Papira. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link
              href="/privacy"
              color="text.secondary"
              sx={{ textDecoration: 'none' }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              color="text.secondary"
              sx={{ textDecoration: 'none' }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
