import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Avatar,
  useTheme,
  useMediaQuery,
  Badge,
  Container,
  useScrollTrigger,
  Slide
} from '@mui/material';
import {
  Menu as MenuIcon,
  AccountCircle,
  Create,
  Search,
  Notifications,
  Bookmark,
  Dashboard,
  Close,
  Paid,
  AutoFixHigh,
  Description
} from '@mui/icons-material';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Navbar = () => {
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { label: 'Şablonlar', path: '/templates', icon: <Bookmark /> },
    { label: 'Panel', path: '/dashboard', icon: <Dashboard /> },
    { label: 'Özellikler', path: '/features', icon: <AutoFixHigh /> },
    { label: 'Fiyatlandırma', path: '/pricing', icon: <Paid /> }
  ];

  return (
    <HideOnScroll>
      <AppBar
        id="navbar"
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: scrolled ? 'rgba(253, 250, 245, 0.98)' : 'rgba(253, 250, 245, 0.95)',
          backdropFilter: 'blur(8px)',
          borderBottom: `1px solid ${theme.palette.border.light}`,
          transition: 'all 0.3s ease-in-out',
          height: 64
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              justifyContent: 'space-between',
              height: '100%',
              px: { xs: 0, md: 0 }
            }}
          >
            {/* Logo and Brand */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Link href="/" passHref style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <img
                  src="/images/logo-vertical.png"
                  alt="Papira Logo"
                  style={{
                    width: "160px",
                    height: "auto",
                    objectFit: 'contain'
                  }}
                />
              </Link>
            </Box>

            {/* Navigation Links - Desktop */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 2 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.path}
                    component={Link}
                    href={item.path}
                    startIcon={item.icon}
                    sx={{
                      color: router.pathname === item.path ? theme.palette.primary.main : theme.palette.text.primary,
                      '&:hover': {
                        color: theme.palette.primary.main
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* Right Side Actions */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Button
                variant="contained"
                startIcon={<Create />}
                onClick={() => router.push('/generator/business')}
              >
                Yeni Belge
              </Button>

              {isMobile ? (
                <IconButton
                  color="inherit"
                  onClick={handleMobileMenuToggle}
                  sx={{ ml: 1 }}
                >
                  {mobileMenuOpen ? <Close /> : <MenuIcon />}
                </IconButton>
              ) : (
                <>
                  {/* <IconButton color="inherit">
                    <Search />
                  </IconButton> */}
                  <IconButton>
                    <Badge badgeContent={4} color="error">
                      <Notifications />
                    </Badge>
                  </IconButton>

                  <IconButton
                    onClick={handleMenu}
                    sx={{ ml: 1 }}
                  >
                    <AccountCircle />
                  </IconButton>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>

        {/* Mobile Menu */}
        {isMobile && mobileMenuOpen && (
          <Box
            sx={{
              position: 'fixed',
              top: 64,
              left: 0,
              right: 0,
              backgroundColor: theme.palette.background.paper,
              borderBottom: `1px solid ${theme.palette.border.light}`,
              zIndex: 1100,
              py: 2,
              px: 2
            }}
          >
            {navItems.map((item) => (
              <MenuItem
                key={item.path}
                component={Link}
                href={item.path}
                onClick={handleMobileMenuToggle}
                sx={{
                  py: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover
                  }
                }}
              >
                {item.icon}
                {item.label}
              </MenuItem>
            ))}
          </Box>
        )}
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar; 