import { Box, Typography, Button, Paper, LinearProgress, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorIcon from '@mui/icons-material/Error'
import WarningIcon from '@mui/icons-material/Warning'
import InfoIcon from '@mui/icons-material/Info'
import { useState } from 'react'

const FeedbackPanel = () => {
  const [plagiarismScore, setPlagiarismScore] = useState(95)
  const [feedback, setFeedback] = useState([
    { type: 'success', text: 'Format doğru uygulandı' },
    { type: 'warning', text: 'Kaynakça eksik' },
    { type: 'error', text: 'Yazım hatası bulundu' }
  ])

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
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
        Geri Bildirim
      </Typography>

      {/* Plagiarism Check */}
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
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          İntihal Kontrolü
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
          <LinearProgress
            variant="determinate"
            value={plagiarismScore}
            sx={{
              flex: 1,
              height: 8,
              borderRadius: 4,
              backgroundColor: 'success.light',
              '& .MuiLinearProgress-bar': {
                backgroundColor: 'success.main'
              }
            }}
          />
          <Typography variant="body2" color="success.main">
            {plagiarismScore}%
          </Typography>
        </Box>
        <Button
          variant="outlined"
          size="small"
          fullWidth
          sx={{ mt: 1 }}
        >
          Detaylı Rapor
        </Button>
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

      {/* Literature Suggestions */}
      <Paper
        elevation={0}
        sx={{
          p: 2,
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Typography variant="subtitle2" sx={{ mb: 2 }}>
          Literatür Önerileri
        </Typography>
        <Button
          variant="contained"
          size="small"
          fullWidth
          sx={{ mb: 2 }}
        >
          Önerileri Göster
        </Button>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
          İlgili akademik makaleler burada listelenecek
        </Typography>
      </Paper>
    </Box>
  )
}

export default FeedbackPanel 