import { Box, Typography, Button, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Divider } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import DescriptionIcon from '@mui/icons-material/Description'
import QrCodeIcon from '@mui/icons-material/QrCode'
import TimelineIcon from '@mui/icons-material/Timeline'
import GroupIcon from '@mui/icons-material/Group'
import { useState } from 'react'

const MeetingTemplateInputs = () => {
  const [template, setTemplate] = useState('')
  const [options, setOptions] = useState({
    qrCode: true,
    timeline: true,
    attendeeList: true
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
        Toplantı Şablonu
      </Typography>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Şablon</InputLabel>
        <Select
          value={template}
          onChange={handleTemplateChange}
          label="Şablon"
        >
          <MenuItem value="meeting-card">Toplantı Kartı</MenuItem>
          <MenuItem value="invitation">Davetiye</MenuItem>
          <MenuItem value="agenda">Gündem</MenuItem>
          <MenuItem value="notes">Toplantı Notları</MenuItem>
          <MenuItem value="custom">Özel Şablon</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="outlined"
        component="label"
        startIcon={<CloudUploadIcon />}
        sx={{ mb: 3 }}
      >
        Toplantı Detaylarını Yükle
        <input
          type="file"
          hidden
          accept=".doc,.docx,.pdf,.xlsx,.csv,.txt"
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
        Ek Özellikler
      </Typography>

      <FormControlLabel
        control={
          <Checkbox
            checked={options.qrCode}
            onChange={handleOptionChange('qrCode')}
          />
        }
        label={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <QrCodeIcon fontSize="small" />
            QR Kod
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
            checked={options.attendeeList}
            onChange={handleOptionChange('attendeeList')}
          />
        }
        label={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <GroupIcon fontSize="small" />
            Katılımcı Listesi
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
        Toplantı Belgesi Oluştur
      </Button>
    </Box>
  )
}

export default MeetingTemplateInputs 