import { Box, Typography, Button, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Divider } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import DescriptionIcon from '@mui/icons-material/Description'
import QrCodeIcon from '@mui/icons-material/QrCode'
import TimelineIcon from '@mui/icons-material/Timeline'
import GroupIcon from '@mui/icons-material/Group'
import { useState } from 'react'
import { AutoFixHigh, CloudUpload } from '@mui/icons-material'

const MeetingTemplateInputs = ({ onTemplateChange, onContentChange }) => {
  const [template, setTemplate] = useState('')
  const [format, setFormat] = useState('')
  const [uploadedFileName, setUploadedFileName] = useState('')
  const [options, setOptions] = useState({
    qrCode: true,
    timeline: true,
    attendeeList: true
  })

  const handleTemplateChange = (event) => {
    const selectedTemplate = event.target.value
    setTemplate(selectedTemplate)
    onTemplateChange(selectedTemplate)
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setUploadedFileName(file.name)
      const reader = new FileReader()
      reader.onload = (e) => {
        const text = e.target.result
        onContentChange(text)
      }
      reader.readAsText(file)
    }
  }

  const handleOptionChange = (option) => (event) => {
    setOptions({ ...options, [option]: event.target.checked })
  }

  const handleFormatChange = (event) => {
    setFormat(event.target.value)
  }

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
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
        <DescriptionIcon />
        Şablon Seçimi
      </Typography>

      <FormControl fullWidth sx={{ my: 2 }}>
        <InputLabel id="template-select-label">Şablon Türü</InputLabel>
        <Select
          labelId="template-select-label"
          value={template}
          label="Şablon Türü"
          onChange={handleTemplateChange}
        >
          <MenuItem value="">Seçiniz</MenuItem>
          <MenuItem value="Teknik Şartname">Teknik Şartname</MenuItem>
          <MenuItem value="Toplantı Tutanağı">Toplantı Tutanağı</MenuItem>
          <MenuItem value="Proje Raporu">Proje Raporu</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="outlined"
        component="label"
        startIcon={<CloudUploadIcon />}
      >
        Özel Şablon Yükle
        <input
          type="file"
          hidden
          accept=".doc,.docx,.pdf"
        />
      </Button>

      {/* Kullanıcı Araştırma/Doküman Yükleme Alanı */}
      <Typography
        variant="h6"
        sx={{
          mt: 4,
          mb: 2,
          fontWeight: 600,
          color: 'text.primary',
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}
      >
        <DescriptionIcon />
        İçerik
      </Typography>

      <Button
        variant="outlined"
        component="label"
        startIcon={<CloudUpload />}
      >
        Dosya Yükle
        <input
          type="file"
          hidden
          accept=".txt"
          onChange={handleFileUpload}
        />
      </Button>

      {uploadedFileName && (
        <Typography
          variant="body2"
          sx={{
            mt: 1,
            color: 'success.main',
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >
          ✓ {uploadedFileName} başarıyla yüklendi
        </Typography>
      )}

      <Divider sx={{ my: 2, borderColor: '#ede0d4' }} />

      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontWeight: 700,
          color: 'text.primary',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          fontFamily: '"Playfair Display", serif'
        }}
      >
        Ek Özellikler
      </Typography>

      <FormControlLabel
        control={
          <Checkbox
            checked={options.qrCode}
            onChange={handleOptionChange('qrCode')}
            sx={{ color: '#bfa084' }}
          />
        }
        label={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <QrCodeIcon fontSize="small" sx={{ color: '#bfa084' }} />
            QR Kod
          </Box>
        }
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={options.timeline}
            onChange={handleOptionChange('timeline')}
            sx={{ color: '#bfa084' }}
          />
        }
        label={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <TimelineIcon fontSize="small" sx={{ color: '#bfa084' }} />
            Zaman Çizelgesi
          </Box>
        }
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={options.attendeeList}
            onChange={handleOptionChange('attendeeList')}
            sx={{ color: '#bfa084' }}
          />
        }
        label={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <GroupIcon fontSize="small" sx={{ color: '#bfa084' }} />
            Katılımcı Listesi
          </Box>
        }
      />

      <Box sx={{ mb: 2 }} />
    </Box>
  )
}

export default MeetingTemplateInputs 