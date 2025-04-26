import { Box, Button, CircularProgress, Grid, Paper, Typography, useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'
import MeetingTemplateInputs from '@/components/generator/MeetingTemplateInputs'
import MeetingEditor from '@/components/generator/MeetingEditor'
import MeetingFeedback from '@/components/generator/MeetingFeedback'
import { useState } from 'react'
import { AutoFixHigh } from '@mui/icons-material'

const StyledPaper = styled(Paper)(({ theme }) => ({
  height: 'fit-content',
  padding: "1.5rem",
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  background: 'linear-gradient(135deg, #fff 0%, #f8f8f8 100%)',
  position: 'relative',
  overflow: 'auto',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.02) 0px, rgba(0,0,0,0.02) 1px, transparent 1px, transparent 2px)',
    pointerEvents: 'none',
    opacity: 0.5
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)',
    pointerEvents: 'none',
    opacity: 0.3
  }
}))

const BusinessGenerator = () => {
  const theme = useTheme()
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('')

  const handleContentChange = (newContent) => {
    setContent(newContent)
  }

  const handleTemplateChange = (template) => {
    setSelectedTemplate(template)
  }
  const generateTechnicalSpec = () => {

    setLoading(true)
    const response = "## Teknik Şartname: Frontend Geliştirme Eğitimi\n\n### 1. Genel Açıklama\nBu teknik şartname, frontend geliştirme eğitimi kapsamında sunulacak hizmetlerin kapsamını, içeriğini ve gereksinimlerini tanımlamaktadır. Söz konusu eğitim programı, katılımcıların modern web geliştirme araçlarını öğrenmelerini ve uygulamalı projelerle deneyim kazanmalarını hedeflemektedir.\n\n### 2. Eğitim İçeriği\nEğitim süresince aşağıdaki konular işlenecektir:\n\n#### 2.1 HTML & CSS Temelleri\n- HTML etiketleri ve sayfa yapılandırması\n- CSS ile stillendirme\n- Responsive tasarım prensipleri\n\n#### 2.2 JavaScript Programlama\n- JavaScript temel kavramları (değişkenler, döngüler, fonksiyonlar)\n- DOM manipülasyonu\n- Olay yönetimi\n\n#### 2.3 Frontend Framework'leri\n- React.js veya Vue.js framework kullanımı\n- Bileşen tabanlı mimari (Component-based architecture)\n\n#### 2.4 Araçlar ve Teknolojiler\n- Sürüm kontrol sistemleri (Git ve GitHub)\n- Paket yöneticileri (npm, yarn)\n- API entegrasyonu ve veri yönetimi\n\n#### 2.5 Proje Geliştirme\n- Uygulamalı proje çalışmaları\n- Takım çalışması ve Agile metodolojisinin uygulanması\n\n### 3. Eğitim Yöntemi\nEğitim, teorik anlatımlar ve uygulamalı çalışmaların kombinasyonu şeklinde gerçekleştirilecektir. Her modül sonunda katılımcılar, değerlendirme sınavlarına tabi tutulacaktır.\n\n- Eğitim süresi: 8 hafta\n- Haftalık eğitim günü: 3 gün\n- Günlük eğitim süresi: 4 saat\n\n### 4. Eğitim Sonunda Kazanılan Yetkinlikler\nKatılımcılar, eğitimi tamamladıklarında aşağıdaki yetkinlikleri kazanmış olacaklardır:\n\n- Modern frontend teknolojileri kullanarak web uygulamaları geliştirme\n- Responsive tasarım ilkelerini uygulayabilme\n- JavaScript ve modern frontend framework'lerini etkin kullanma\n- Git ve benzeri sürüm kontrol sistemleriyle proje yönetimi\n- API entegrasyonu ve veri yönetimi konularında temel bilgi sahibi olma\n\n### 5. Eğitim Materyalleri\nEğitimde kullanılacak materyaller şunlardır:\n\n- PDF formatında sunum dosyaları\n- Örnek kodlar ve proje dosyaları\n- Ders notları ve kaynak kitap önerileri\n\n### 6. Eğitim Ortamı ve Gereksinimler\nEğitim, çevrimiçi platformlar veya fiziksel sınıf ortamlarında gerçekleştirilebilir. Katılımcıların aşağıdaki gereksinimlere sahip olması beklenmektedir:\n\n- Bilgisayar (Windows, macOS veya Linux)\n- İnternet bağlantısı\n- Kod editörü (örneğin, Visual Studio Code)\n\n### 7. Değerlendirme ve Sertifika\nHer modül sonunda gerçekleştirilecek değerlendirme sınavları ile katılımcıların bilgi düzeyleri ölçülecektir. Eğitimi başarıyla tamamlayan katılımcılara resmi bir sertifika verilecektir.\n\n### 8. İletişim Bilgileri\nEğitim programı ile ilgili her türlü soru ve talepler için aşağıdaki iletişim kanalları kullanılabilir:\n\n- **E-posta:** egitim@ornek.com\n- **Telefon:** +90 123 456 78 90"

    setTimeout(() => {
      setContent(response);
      setLoading(false);
    }, 2000);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 4,
        px: { xs: 2, sm: 3, md: 4 },
        bgcolor: 'background.default'
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: 700,
          fontFamily: '"Playfair Display", serif',
          color: 'text.primary',
          textAlign: 'center',
          position: 'relative',
          '&::after': {
            content: '""',
            display: 'block',
            width: '60px',
            height: '4px',
            background: theme.palette.primary.main,
            margin: '16px auto 0',
            borderRadius: '2px'
          }
        }}
      >
        Kurumsal Belge Oluşturucu
      </Typography>

      <Grid container spacing={3}>
        {/* Left Section - Inputs and Technical Specification Generator */}
        <Grid item xs={12} md={3}>
          <StyledPaper>
            <MeetingTemplateInputs
              onTemplateChange={handleTemplateChange}
              onContentChange={handleContentChange}
            />

            <Button
              variant="aiGradient"
              fullWidth
              onClick={generateTechnicalSpec}
              sx={{
                position: 'relative',
                overflow: 'hidden',
                color: theme => theme.palette.common.white,
                '&::after': loading ? {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 1.5s infinite',
                  '@keyframes shimmer': {
                    '0%': { backgroundPosition: '200% 0' },
                    '100%': { backgroundPosition: '-200% 0' }
                  }
                } : {}
              }}
            >
              {loading ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CircularProgress size={20} color="inherit" />
                  <Typography variant="body2" color="common.white">Oluşturuluyor...</Typography>
                </Box>
              ) : (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AutoFixHigh />
                  <Typography variant="body2" color="common.white">Oluştur</Typography>
                </Box>
              )}
            </Button>
          </StyledPaper>
        </Grid>

        {/* Middle Section - Editor */}
        <Grid item xs={12} md={6}>
          <MeetingEditor content={content} />
        </Grid>

        {/* Right Section - Feedback */}
        <Grid item xs={12} md={3}>
          <StyledPaper>
            <MeetingFeedback />
          </StyledPaper>
        </Grid>
      </Grid>
    </Box>
  )
}

BusinessGenerator.acl = {
  action: 'read',
  permission: 'business'
}

export default BusinessGenerator 