import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  TextField,
  InputAdornment
} from '@mui/material'
import {
  Description as DocumentIcon,
  School as SchoolIcon,
  Science as ScienceIcon,
  HistoryEdu as HistoryIcon,
  Search as SearchIcon
} from '@mui/icons-material'

const templates = [
  {
    id: 'thesis',
    title: 'Tez Şablonu',
    description: 'Yüksek lisans ve doktora tezleri için',
    icon: <SchoolIcon />
  },
  {
    id: 'article',
    title: 'Makale Şablonu',
    description: 'Akademik makaleler için',
    icon: <DocumentIcon />
  },
  {
    id: 'research',
    title: 'Araştırma Raporu',
    description: 'Araştırma projeleri için',
    icon: <ScienceIcon />
  },
  {
    id: 'literature',
    title: 'Literatür Taraması',
    description: 'Literatür tarama raporları için',
    icon: <HistoryIcon />
  }
]

const EditorSidebar = ({ selectedTemplate, onTemplateSelect }) => {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Şablonlar
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Düzenlemek istediğiniz belge türünü seçin
        </Typography>
        <TextField
          fullWidth
          size="small"
          placeholder="Şablon ara..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </Box>
      <Divider />
      <List>
        {templates.map((template) => (
          <ListItem key={template.id} disablePadding>
            <ListItemButton
              selected={selectedTemplate === template.id}
              onClick={() => onTemplateSelect(template.id)}
            >
              <ListItemIcon>{template.icon}</ListItemIcon>
              <ListItemText
                primary={template.title}
                secondary={template.description}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default EditorSidebar 