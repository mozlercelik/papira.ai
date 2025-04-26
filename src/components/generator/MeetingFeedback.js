import { Box, Typography, Button } from '@mui/material'
import GroupIcon from '@mui/icons-material/Group'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates'
import { useState } from 'react'

const MeetingFeedback = () => {
  const [feedback, setFeedback] = useState(null)

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
        <AnalyticsIcon />
        AI Analiz ve Öneriler
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Button
          startIcon={<AnalyticsIcon />}
          variant="outlined"
          fullWidth
        >
          AI Geri Bildirim
        </Button>

        <Button
          startIcon={<AnalyticsIcon />}
          variant="outlined"
          fullWidth
        >
          Belge Analizi
        </Button>

        <Button
          startIcon={<TipsAndUpdatesIcon />}
          variant="outlined"
          fullWidth
        >
          Toplantı İpuçları
        </Button>
      </Box>

      <Box
        sx={{
          mt: 3,
          flexGrow: 1,
          border: '1px dashed',
          borderColor: 'divider',
          borderRadius: 2,
          p: 2
        }}
      >
        {feedback ? (
          <div>{feedback}</div>
        ) : (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: 'center' }}
          >
            Analiz için yukarıdaki butonlardan birini seçin
          </Typography>
        )}
      </Box>
    </Box>
  )
}

export default MeetingFeedback 