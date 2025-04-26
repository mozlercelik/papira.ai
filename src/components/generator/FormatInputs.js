import { useState } from 'react'
import { Box, Typography, Button, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Divider } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import DescriptionIcon from '@mui/icons-material/Description'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'


const FormatInputs = () => {
  const [format, setFormat] = useState('')
  const [options, setOptions] = useState({
    tableOfContents: true,
    references: true,
    appendices: false
  })

  const handleFormatChange = (event) => {
    setFormat(event.target.value)
  }

  const handleOptionChange = (option) => (event) => {
    setOptions({ ...options, [option]: event.target.checked })
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
        Format Seçimi
      </Typography>

      <FormControl fullWidth sx={{ my: 2 }}>
        <InputLabel>Format</InputLabel>
        <Select
          value={format}
          onChange={handleFormatChange}
          label="Format"
        >
          <MenuItem value="apa">APA</MenuItem>
          <MenuItem value="mla">MLA</MenuItem>
          <MenuItem value="chicago">Chicago</MenuItem>
          <MenuItem value="ieee">IEEE</MenuItem>
          <MenuItem value="custom">Özel Format</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="outlined"
        component="label"
        startIcon={<CloudUploadIcon />}
      >
        Özel Format Yükle
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
        startIcon={<CloudUploadIcon />}
      >
        Dosya Yükle
        <input
          type="file"
          hidden
          multiple
          accept=".pdf,.doc,.docx,.txt"
        />
      </Button>

      <Divider sx={{ my: 4 }} />

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
        Ek Seçenekler
      </Typography>

      <FormControlLabel
        control={
          <Checkbox
            checked={options.tableOfContents}
            onChange={handleOptionChange('tableOfContents')}
          />
        }
        label="İçindekiler Tablosu"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={options.references}
            onChange={handleOptionChange('references')}
          />
        }
        label="Kaynakça"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={options.appendices}
            onChange={handleOptionChange('appendices')}
          />
        }
        label="Ekler"
      />

      <Box sx={{ my: 2 }} />

      <Button
        variant="aiGradient"
        fullWidth
      >
        <AutoFixHighIcon sx={{ mr: 1 }} />
        Oluştur
      </Button>
    </Box>
  )
}

export default FormatInputs 