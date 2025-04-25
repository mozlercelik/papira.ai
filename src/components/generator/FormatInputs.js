import { Box, Typography, Button, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Divider } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import DescriptionIcon from '@mui/icons-material/Description'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import { useState } from 'react'

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
        Format Seçimi
      </Typography>

      <FormControl fullWidth sx={{ mb: 3 }}>
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
        sx={{ mb: 3 }}
      >
        Özel Format Yükle
        <input
          type="file"
          hidden
          accept=".doc,.docx,.pdf"
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

export default FormatInputs 