import { Box, Typography, Paper, IconButton, Tooltip, Divider, Button } from '@mui/material'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
import TitleIcon from '@mui/icons-material/Title'
import ImageIcon from '@mui/icons-material/Image'
import TableChartIcon from '@mui/icons-material/TableChart'
import TimelineIcon from '@mui/icons-material/Timeline'
import GanttChartIcon from '@mui/icons-material/ShowChart'
import { useState } from 'react'

const ProjectEditor = () => {
  const [content, setContent] = useState('')

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Toolbar */}
      <Box
        sx={{
          borderBottom: '1px solid',
          borderColor: 'divider',
          display: 'flex',
          gap: 1,
          flexWrap: 'wrap'
        }}
      >
        <Tooltip title="Başlık">
          <IconButton>
            <TitleIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Kalın">
          <IconButton>
            <FormatBoldIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="İtalik">
          <IconButton>
            <FormatItalicIcon />
          </IconButton>
        </Tooltip>

        <Divider orientation="vertical" flexItem />

        <Tooltip title="Madde İşaretli Liste">
          <IconButton>
            <FormatListBulletedIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Numaralı Liste">
          <IconButton>
            <FormatListNumberedIcon />
          </IconButton>
        </Tooltip>

        <Divider orientation="vertical" flexItem />

        <Tooltip title="Resim Ekle">
          <IconButton>
            <ImageIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Tablo Ekle">
          <IconButton>
            <TableChartIcon />
          </IconButton>
        </Tooltip>

        <Divider orientation="vertical" flexItem />

        <Tooltip title="Gantt Şeması Ekle">
          <IconButton>
            <GanttChartIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Zaman Çizelgesi Ekle">
          <IconButton>
            <TimelineIcon />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Editor Content */}
      <Box
        sx={{
          flex: 1,
          p: 3,
          overflow: 'auto',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.02) 0px, rgba(0,0,0,0.02) 1px, transparent 1px, transparent 2px)',
            pointerEvents: 'none',
            opacity: 0.3
          }
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 3,
            minHeight: '100%',
            bgcolor: 'background.paper',
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Typography variant="body1" color="text.secondary">
            {content || 'Proje belgeniz burada görünecek.'}
          </Typography>
        </Paper>
      </Box>

      {/* Bottom Actions */}
      <Box
        sx={{
          p: 2,
          borderTop: '1px solid',
          borderColor: 'divider',
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 2
        }}
      >
        <Button variant="outlined" color="primary">
          Önizle
        </Button>
        <Button variant="contained" color="primary">
          Kaydet
        </Button>
      </Box>
    </Box>
  )
}

export default ProjectEditor 