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
  Close
} from '@mui/icons-material';
import { useRouter } from 'next/router';
import Link from 'next/link';

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
    { label: 'Templates', path: '/templates', icon: <Bookmark /> },
    { label: 'Dashboard', path: '/dashboard', icon: <Dashboard /> },
    { label: 'Features', path: '/features' },
    { label: 'Pricing', path: '/pricing' }
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
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                variant="h5"
                component={Link}
                href="/"
                sx={{
                  textDecoration: 'none',
                  color: theme.palette.primary.main,
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  '&:hover': {
                    color: theme.palette.primary.dark
                  }
                }}
              >
                Papira
              </Typography>
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
                      color: theme.palette.text.primary,
                      '&:hover': {
                        backgroundColor: 'transparent',
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
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton
                color="inherit"
                sx={{
                  color: theme.palette.text.primary,
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover
                  }
                }}
              >
                <Search />
              </IconButton>

              <IconButton
                color="inherit"
                sx={{
                  color: theme.palette.text.primary,
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover
                  }
                }}
              >
                <Badge badgeContent={3} color="primary">
                  <Notifications />
                </Badge>
              </IconButton>

              <Button
                variant="contained"
                startIcon={<Create />}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark
                  }
                }}
                onClick={() => router.push('/editor')}
              >
                New Document
              </Button>

              <IconButton
                color="inherit"
                onClick={handleMenu}
                sx={{
                  color: theme.palette.text.primary,
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover
                  }
                }}
              >
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: theme.palette.primary.main
                  }}
                >
                  M
                </Avatar>
              </IconButton>

              {/* Mobile Menu Button */}
              {isMobile && (
                <IconButton
                  color="inherit"
                  onClick={handleMobileMenuToggle}
                  sx={{
                    color: theme.palette.text.primary,
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover
                    }
                  }}
                >
                  {mobileMenuOpen ? <Close /> : <MenuIcon />}
                </IconButton>
              )}
            </Box>

            {/* User Menu */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                sx: {
                  mt: 1.5,
                  minWidth: 200,
                  borderRadius: 2,
                  boxShadow: theme.shadows[2],
                  border: `1px solid ${theme.palette.border.light}`
                }
              }}
            >
              <MenuItem onClick={handleClose}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Avatar sx={{ width: 24, height: 24, bgcolor: theme.palette.primary.main }}>M</Avatar>
                  <Typography variant="body2">My Profile</Typography>
                </Box>
              </MenuItem>
              <MenuItem onClick={handleClose}>My Documents</MenuItem>
              <MenuItem onClick={handleClose}>Settings</MenuItem>
              <MenuItem onClick={handleClose} sx={{ color: theme.palette.error.main }}>Logout</MenuItem>
            </Menu>
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