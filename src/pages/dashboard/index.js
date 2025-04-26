import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Button,
} from '@mui/material';
import {
  TrendingUp,
  Description,
  Bookmark,
  MoreVert,
  CheckCircle,
  AccessTime,
  Error,
  Create,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const DashboardPage = () => {
  const router = useRouter();

  const stats = [
    {
      title: 'Total Documents',
      value: '24',
      icon: <Description />,
      color: 'primary',
    },
    {
      title: 'Templates Used',
      value: '12',
      icon: <Bookmark />,
      color: 'secondary',
    },
    {
      title: 'Success Rate',
      value: '92%',
      icon: <TrendingUp />,
      color: 'success',
    },
  ];

  const recentDocuments = [
    {
      id: 1,
      title: 'Project Proposal',
      status: 'completed',
      lastModified: '2 hours ago',
    },
    {
      id: 2,
      title: 'Meeting Notes',
      status: 'in-progress',
      lastModified: '5 hours ago',
    },
    {
      id: 3,
      title: 'Blog Post',
      status: 'error',
      lastModified: '1 day ago',
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle color="success" />;
      case 'in-progress':
        return <AccessTime color="warning" />;
      case 'error':
        return <Error color="error" />;
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Welcome back! Here's an overview of your activity.
        </Typography>

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        sx={{
                          bgcolor: `${stat.color}.light`,
                          color: `${stat.color}.main`,
                          mr: 2,
                        }}
                      >
                        {stat.icon}
                      </Avatar>
                      <Typography variant="h6" color="text.secondary">
                        {stat.title}
                      </Typography>
                    </Box>
                    <Typography variant="h4" component="div">
                      {stat.value}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Recent Documents */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card>
              <CardHeader
                title="Recent Documents"
                action={
                  <IconButton>
                    <MoreVert />
                  </IconButton>
                }
              />
              <CardContent>
                <List>
                  {recentDocuments.map((doc) => (
                    <motion.div
                      key={doc.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ListItem
                        button
                        onClick={() => router.push(`/generator/projects?id=${doc.id}`)}
                        sx={{
                          mb: 1,
                          borderRadius: 1,
                          '&:hover': {
                            bgcolor: 'action.hover',
                          },
                        }}
                      >
                        <ListItemIcon>{getStatusIcon(doc.status)}</ListItemIcon>
                        <ListItemText
                          primary={doc.title}
                          secondary={doc.lastModified}
                        />
                      </ListItem>
                    </motion.div>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Quick Actions */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardHeader title="Quick Actions" />
              <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={<Create />}
                    onClick={() => router.push('/generator/projects')}
                    fullWidth
                  >
                    New Document
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<Bookmark />}
                    onClick={() => router.push('/templates')}
                    fullWidth
                  >
                    Browse Templates
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

DashboardPage.acl = {
  action: 'read',
  permission: 'dashboard',
};

export default DashboardPage; 