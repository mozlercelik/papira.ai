import { Box, Typography, Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'
import { useState } from 'react'

const MeetingEditor = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(null)

  return (
    <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: 'text.primary',
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >
          <EditIcon />
          Toplantı Düzenleyici
        </Typography>
        <Button
          startIcon={isEditing ? <SaveIcon /> : <EditIcon />}
          variant="contained"
          size="small"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? 'Kaydet' : 'Düzenle'}
        </Button>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          border: '1px dashed',
          borderColor: 'divider',
          borderRadius: 2,
          p: 2,
          bgcolor: 'background.paper',
          position: 'relative'
        }}
      >
        {content ? (
          <div>{content}</div>
        ) : (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: 'center', mt: 4 }}
          >
            Şablon seçin ve içerik yükleyin
          </Typography>
        )}
      </Box>
    </Box>
  )
}

export default MeetingEditor 