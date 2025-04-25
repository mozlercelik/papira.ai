import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Tooltip,
  Divider
} from '@mui/material'
import {
  Save as SaveIcon,
  Download as DownloadIcon,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  FormatListBulleted,
  FormatListNumbered,
  InsertPhoto,
  TableChart,
  Code,
  FormatQuote,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
  FormatIndentIncrease,
  FormatIndentDecrease
} from '@mui/icons-material'

const EditorToolbar = () => {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={1}
      sx={{ bgcolor: 'background.paper' }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 1 }}>
          {/* Text Formatting */}
          <Tooltip title="Kalın">
            <IconButton>
              <FormatBold />
            </IconButton>
          </Tooltip>
          <Tooltip title="İtalik">
            <IconButton>
              <FormatItalic />
            </IconButton>
          </Tooltip>
          <Tooltip title="Altı Çizili">
            <IconButton>
              <FormatUnderlined />
            </IconButton>
          </Tooltip>
          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

          {/* Lists */}
          <Tooltip title="Madde İşaretli Liste">
            <IconButton>
              <FormatListBulleted />
            </IconButton>
          </Tooltip>
          <Tooltip title="Numaralı Liste">
            <IconButton>
              <FormatListNumbered />
            </IconButton>
          </Tooltip>
          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

          {/* Alignment */}
          <Tooltip title="Sola Hizala">
            <IconButton>
              <FormatAlignLeft />
            </IconButton>
          </Tooltip>
          <Tooltip title="Ortala">
            <IconButton>
              <FormatAlignCenter />
            </IconButton>
          </Tooltip>
          <Tooltip title="Sağa Hizala">
            <IconButton>
              <FormatAlignRight />
            </IconButton>
          </Tooltip>
          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

          {/* Indentation */}
          <Tooltip title="Girintiyi Artır">
            <IconButton>
              <FormatIndentIncrease />
            </IconButton>
          </Tooltip>
          <Tooltip title="Girintiyi Azalt">
            <IconButton>
              <FormatIndentDecrease />
            </IconButton>
          </Tooltip>
          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

          {/* Content Insertion */}
          <Tooltip title="Resim Ekle">
            <IconButton>
              <InsertPhoto />
            </IconButton>
          </Tooltip>
          <Tooltip title="Tablo Ekle">
            <IconButton>
              <TableChart />
            </IconButton>
          </Tooltip>
          <Tooltip title="Alıntı Ekle">
            <IconButton>
              <FormatQuote />
            </IconButton>
          </Tooltip>
          <Tooltip title="Kod Bloğu">
            <IconButton>
              <Code />
            </IconButton>
          </Tooltip>
        </Box>

        {/* Document Actions */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<SaveIcon />}
            size="small"
          >
            Kaydet
          </Button>
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            size="small"
          >
            İndir
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default EditorToolbar 