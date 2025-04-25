import {
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  TextField
} from '@mui/material'
import {
  Download as DownloadIcon,
  PictureAsPdf as PdfIcon,
  Description as WordIcon,
  Code as LatexIcon
} from '@mui/icons-material'
import { useState } from 'react'

const exportFormats = [
  {
    id: 'pdf',
    label: 'PDF Document',
    icon: <PdfIcon />,
    options: {
      quality: ['Standard', 'High', 'Print'],
      includeMetadata: true
    }
  },
  {
    id: 'docx',
    label: 'Word Document',
    icon: <WordIcon />,
    options: {
      compatibility: ['Word 2010+', 'Word 2007', 'Word 2003'],
      includeComments: true
    }
  },
  {
    id: 'latex',
    label: 'LaTeX Source',
    icon: <LatexIcon />,
    options: {
      template: ['Standard', 'Custom'],
      includeComments: true
    }
  }
]

const EditorExport = ({ content, onExport }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [isExporting, setIsExporting] = useState(false)
  const [selectedFormat, setSelectedFormat] = useState(null)
  const [exportOptions, setExportOptions] = useState({})

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleFormatSelect = (format) => {
    setSelectedFormat(format)
    setAnchorEl(null)
  }

  const handleExport = async () => {
    setIsExporting(true)
    try {
      // Mock export - in a real app, this would call an API
      await new Promise(resolve => setTimeout(resolve, 1500))
      onExport(selectedFormat.id, content, exportOptions)
      setSelectedFormat(null)
      setExportOptions({})
    } catch (error) {
      console.error('Export failed:', error)
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <Box>
      <Button
        variant="contained"
        startIcon={isExporting ? <CircularProgress size={20} /> : <DownloadIcon />}
        onClick={handleClick}
        disabled={isExporting}
      >
        Export Document
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {exportFormats.map((format) => (
          <MenuItem
            key={format.id}
            onClick={() => handleFormatSelect(format)}
            disabled={isExporting}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {format.icon}
              <Typography>{format.label}</Typography>
            </Box>
          </MenuItem>
        ))}
      </Menu>

      <Dialog
        open={Boolean(selectedFormat)}
        onClose={() => setSelectedFormat(null)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          Export as {selectedFormat?.label}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {selectedFormat?.options && Object.entries(selectedFormat.options).map(([key, value]) => (
              <FormControl key={key} fullWidth>
                <InputLabel>{key}</InputLabel>
                <Select
                  value={exportOptions[key] || ''}
                  label={key}
                  onChange={(e) => setExportOptions({ ...exportOptions, [key]: e.target.value })}
                >
                  {Array.isArray(value) ? (
                    value.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value={value}>{value ? 'Yes' : 'No'}</MenuItem>
                  )}
                </Select>
              </FormControl>
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSelectedFormat(null)}>Cancel</Button>
          <Button
            variant="contained"
            onClick={handleExport}
            disabled={isExporting}
          >
            {isExporting ? 'Exporting...' : 'Export'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default EditorExport 