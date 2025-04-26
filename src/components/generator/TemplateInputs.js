import { Box, Typography, Button, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Divider, ListSubheader } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import DescriptionIcon from '@mui/icons-material/Description'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import TimelineIcon from '@mui/icons-material/Timeline'
import TableChartIcon from '@mui/icons-material/TableChart'
import { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'

const templateOptions = [
  {
    category: "Başlangıç Aşaması (Planlama ve Analiz)",
    value: "project-proposal",
    label: "Proje Tanıtım Dokümanı",
    description: "Projenin amacı, hedefleri, beklenen çıktıları ve işlevselliğini tanımlar."
  },
  {
    category: "Başlangıç Aşaması (Planlama ve Analiz)",
    value: "requirements-gathering",
    label: "Gereksinim Toplama Dokümanı",
    description: "Kullanıcıların ve paydaşların gereksinimlerini toplar ve analiz eder."
  },
  {
    category: "Başlangıç Aşaması (Planlama ve Analiz)",
    value: "srs",
    label: "Sistem Gereksinimleri Belgesi (SRS)",
    description: "Projeye ait tüm teknik ve işlevsel gereksinimleri detaylı olarak belgelemek."
  },
  {
    category: "Tasarım Aşaması",
    value: "hld",
    label: "Yüksek Seviyeli Tasarım Dokümanı (HLD)",
    description: "Projenin genel mimarisini ve bileşenlerini tanımlar."
  },
  {
    category: "Tasarım Aşaması",
    value: "lld",
    label: "Düşük Seviyeli Tasarım Dokümanı (LLD)",
    description: "Her modülün detaylı tasarımını ve kodlama aşamasına yönelik talimatları içerir."
  },
  {
    category: "Tasarım Aşaması",
    value: "ui-ux-design",
    label: "Kullanıcı Arayüzü Tasarım Dokümanı",
    description: "Kullanıcı arayüzünün görsel ve işlevsel tasarımını belgelemek."
  },
  {
    category: "Geliştirme Aşaması",
    value: "coding-standards",
    label: "Kodlama Standartları Dokümanı",
    description: "Yazılımcıların takip edeceği kodlama kurallarını belirler."
  },
  {
    category: "Geliştirme Aşaması",
    value: "api-docs",
    label: "API Dokümantasyonu",
    description: "Geliştirilen API'ların nasıl kullanılacağını açıklayan bir rehber oluşturmak."
  },
  {
    category: "Test Aşaması",
    value: "test-plan",
    label: "Test Planı",
    description: "Test süreçlerini planlamak ve organize etmek."
  },
  {
    category: "Test Aşaması",
    value: "test-cases",
    label: "Test Senaryoları ve Sonuçları",
    description: "Her bir test senaryosunun detaylarını ve sonuçlarını kaydetmek."
  },
  {
    category: "Test Aşaması",
    value: "uat",
    label: "Kullanıcı Kabul Testi Dokümanı (UAT)",
    description: "Gerçek kullanıcıların sistemi test etmesini sağlamak ve onay almak."
  },
  {
    category: "Dağıtım ve Bakım Aşaması",
    value: "deployment-plan",
    label: "Dağıtım Planı",
    description: "Sistemin canlı ortama taşınmasını planlamak."
  },
  {
    category: "Dağıtım ve Bakım Aşaması",
    value: "user-manual",
    label: "Kullanıcı Kılavuzu",
    description: "Kullanıcıların platformu nasıl kullanacağını açıklamak."
  },
  {
    category: "Dağıtım ve Bakım Aşaması",
    value: "maintenance-support",
    label: "Bakım ve Destek Dokümanı",
    description: "Sistemin sürekli çalışır halde tutulması için gerekli bilgileri belgelemek."
  },
  {
    category: "Diğer Önemli Dokümanlar",
    value: "risk-management",
    label: "Risk Yönetimi Planı",
    description: "Proje boyunca karşılaşılabilen riskleri belirlemek ve çözüm önerileri sunmak."
  },
  {
    category: "Diğer Önemli Dokümanlar",
    value: "project-management",
    label: "Proje Yönetimi Dokümanı",
    description: "Projenin ilerlemesini takip etmek ve yönetmek."
  },
  {
    category: "Diğer Önemli Dokümanlar",
    value: "post-mortem",
    label: "Post-Mortem Raporu",
    description: "Projenin tamamlanmasının ardından yapılan değerlendirmeleri ve ders çıkarmaları belgelemek."
  }
]

const TemplateInputs = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [options, setOptions] = useState({
    ganttChart: true,
    timeline: true,
    tables: true
  })
  const theme = useTheme()

  const handleTemplateChange = (e, opt) => {
    console.log(e, opt);

    setSelectedTemplate(opt);
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
        Şablon Seçimi
      </Typography>

      <FormControl fullWidth sx={{ my: 2 }}>
        <InputLabel>Şablon</InputLabel>
        <Select
          displayEmpty
          value={selectedTemplate ? selectedTemplate.value : ''}
          // onChange={handleTemplateChange}
          label="Şablon"
          renderValue={selected => {
            const data = templateOptions.find(opt => opt.value === selected);

            return (
              <Box sx={{ width: '100%' }}>
                <Typography
                  variant="body1"
                  sx={{
                    display: 'block',
                    width: '100%',
                    wordBreak: 'break-word',
                    overflow: "auto",
                    lineClamp: 2,
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    maxWidth: '100%',
                  }}
                >
                  {data?.label}
                </Typography>
                {/* <Typography variant="caption" color="text.secondary">
                  {data?.description}
                </Typography> */}
              </Box>
            )
          }}
        >
          <Box sx={{ px: 2, py: 1, maxWidth: '320px' }}>
            {Array.from(new Set(templateOptions.map(opt => opt.category))).map(category => (
              <>
                <Typography variant="overline" color="text.secondary" sx={{ fontWeight: 700 }} key={category}>
                  {category}
                </Typography>

                {
                  templateOptions.filter(opt => opt.category === category).map(opt => (
                    <MenuItem key={opt.value} value={opt.value}
                      onClick={(e) => handleTemplateChange(e, opt)}
                      sx={{
                        alignItems: 'flex-start',
                        py: 1.5,
                        whiteSpace: 'normal',
                        '&::-webkit-scrollbar': {
                          display: 'none'
                        },
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                      }}
                    >
                      <Box sx={{ width: '100%' }}>
                        <Typography variant="subtitle1" fontWeight={600} sx={{ wordBreak: 'break-word' }}>
                          {opt.label}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ wordBreak: 'break-word' }}>
                          {opt.description}
                        </Typography>
                      </Box>
                    </MenuItem>
                  ))
                }
              </>
            ))}
          </Box>
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
          accept=".doc,.docx,.pdf,.ppt,.pptx"
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

        Proje Detayları
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

      <Box sx={{ my: 2 }} />

      <Button
        variant="aiGradient"
        fullWidth
      >
        <AutoFixHighIcon sx={{ mr: 1 }} />
        Belge Oluştur
      </Button>
    </Box>
  )
}

export default TemplateInputs 