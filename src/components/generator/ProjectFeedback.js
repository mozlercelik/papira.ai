import { Box, Typography, Button, Paper, List, ListItem, ListItemIcon, ListItemText, Divider, Chip } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorIcon from '@mui/icons-material/Error'
import WarningIcon from '@mui/icons-material/Warning'
import InfoIcon from '@mui/icons-material/Info'
import GroupIcon from '@mui/icons-material/Group'
import AssignmentIcon from '@mui/icons-material/Assignment'
import { useState } from 'react'

const ProjectFeedback = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Proje Planı Oluştur', status: 'completed' },
    { id: 2, title: 'Görev Listesi Hazırla', status: 'in-progress' },
    { id: 3, title: 'Zaman Çizelgesi Ekle', status: 'pending' }
  ])

  const [feedback, setFeedback] = useState([
    { type: 'success', text: 'Proje yapısı iyi organize edilmiş' },
    { type: 'warning', text: 'Risk analizi eksik' },
    { type: 'error', text: 'Bütçe tahmini belirtilmemiş' }
  ])

  const [collaborators, setCollaborators] = useState([
    { name: 'Ahmet Yılmaz', role: 'Proje Yöneticisi' },
    { name: 'Ayşe Demir', role: 'Geliştirici' },
    { name: 'Mehmet Kaya', role: 'Tasarımcı' }
  ])

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'success'
      case 'in-progress':
        return 'warning'
      case 'pending':
        return 'error'
      default:
        return 'default'
    }
  }

  return (
    <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Typography
        variant="h6"
        sx={{
          mb: 3,
          fontWeight: 600,
          color: 'text.primary',
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}
      >
        <InfoIcon />
        Proje Geri Bildirimi
      </Typography>

      {/* Task Tracking */}
      <Paper
        elevation={0}
        sx={{
          p: 2,
          mb: 3,
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Typography variant="subtitle2" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
          <AssignmentIcon fontSize="small" />
          Görev Takibi
        </Typography>
        <List dense>
          {tasks.map((task) => (
            <ListItem key={task.id} sx={{ px: 0 }}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                {task.status === 'completed' && <CheckCircleIcon color="success" />}
                {task.status === 'in-progress' && <WarningIcon color="warning" />}
                {task.status === 'pending' && <ErrorIcon color="error" />}
              </ListItemIcon>
              <ListItemText
                primary={task.title}
                primaryTypographyProps={{
                  variant: 'body2'
                }}
              />
              <Chip
                label={task.status === 'completed' ? 'Tamamlandı' : task.status === 'in-progress' ? 'Devam Ediyor' : 'Beklemede'}
                size="small"
                color={getStatusColor(task.status)}
              />
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* AI Feedback */}
      <Paper
        elevation={0}
        sx={{
          p: 2,
          mb: 3,
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Typography variant="subtitle2" sx={{ mb: 2 }}>
          AI Önerileri
        </Typography>
        <Button
          variant="contained"
          size="small"
          fullWidth
          sx={{ mb: 2 }}
        >
          Önerileri Al
        </Button>
        <List dense>
          {feedback.map((item, index) => (
            <ListItem key={index} sx={{ px: 0 }}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                {item.type === 'success' && <CheckCircleIcon color="success" />}
                {item.type === 'error' && <ErrorIcon color="error" />}
                {item.type === 'warning' && <WarningIcon color="warning" />}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  variant: 'body2',
                  color: item.type === 'success' ? 'success.main' : item.type === 'error' ? 'error.main' : 'warning.main'
                }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* Collaborators */}
      <Paper
        elevation={0}
        sx={{
          p: 2,
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Typography variant="subtitle2" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
          <GroupIcon fontSize="small" />
          İşbirlikçiler
        </Typography>
        <Button
          variant="contained"
          size="small"
          fullWidth
          sx={{ mb: 2 }}
        >
          İşbirlikçi Öner
        </Button>
        <List dense>
          {collaborators.map((collaborator, index) => (
            <ListItem key={index} sx={{ px: 0 }}>
              <ListItemText
                primary={collaborator.name}
                secondary={collaborator.role}
                primaryTypographyProps={{ variant: 'body2' }}
                secondaryTypographyProps={{ variant: 'caption' }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  )
}

export default ProjectFeedback 