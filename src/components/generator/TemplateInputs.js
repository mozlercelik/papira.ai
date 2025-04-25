import { Box, Typography, Button, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Divider } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import DescriptionIcon from '@mui/icons-material/Description'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import TimelineIcon from '@mui/icons-material/Timeline'
import TableChartIcon from '@mui/icons-material/TableChart'
import { useState } from 'react'

const TemplateInputs = () => {
  const [template, setTemplate] = useState('')
  const [options, setOptions] = useState({
    ganttChart: true,
    timeline: true,
    tables: true
  })

  const handleTemplateChange = (event) => {
    setTemplate(event.target.value)
  }

  const handleOptionChange = (option) => (event) => {
    setOptions({ ...options, [option]: event.target.checked })
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
        <DescriptionIcon />
        Şablon Seçimi
      </Typography>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Şablon</InputLabel>
        <Select
          value={template}
          onChange={handleTemplateChange}
          label="Şablon"
        >
          <MenuItem value="project-plan">Proje Planı</MenuItem>
          <MenuItem value="task-list">Görev Listesi</MenuItem>
          <MenuItem value="progress-report">İlerleme Raporu</MenuItem>
          <MenuItem value="presentation">Sunum</MenuItem>
          <MenuItem value="custom">Özel Şablon</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="outlined"
        component="label"
        startIcon={<CloudUploadIcon />}
        sx={{ mb: 3 }}
      >
        Özel Şablon Yükle
        <input
          type="file"
          hidden
          accept=".doc,.docx,.pdf,.ppt,.pptx"
        />
      </Button>

      <Divider sx={{ my: 2 }} />

      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontWeight: 600,
          color: 'text.primary',
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}
      >
        <FormatListBulletedIcon />
        Ek Özellikler
      </Typography>

      <FormControlLabel
        control={
          <Checkbox
            checked={options.ganttChart}
            onChange={handleOptionChange('ganttChart')}
          />
        }
        label={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <TimelineIcon fontSize="small" />
            Gantt Şeması
          </Box>
        }
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={options.timeline}
            onChange={handleOptionChange('timeline')}
          />
        }
        label={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <TimelineIcon fontSize="small" />
            Zaman Çizelgesi
          </Box>
        }
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={options.tables}
            onChange={handleOptionChange('tables')}
          />
        }
        label={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <TableChartIcon fontSize="small" />
            Tablolar
          </Box>
        }
      />

      <Box sx={{ flexGrow: 1 }} />

      <Button
        variant="contained"
        fullWidth
        sx={{
          mt: 2,
          py: 1.5,
          borderRadius: 2,
          background: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #1976D2 0%, #1565C0 100%)'
          }
        }}
      >
        Belgeyi Oluştur
      </Button>
    </Box>
  )
}

export default TemplateInputs 