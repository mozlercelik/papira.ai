import { useState } from 'react'
import {
  Box,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FadeIn from '@/components/animation/FadeIn'

const faqData = [
  {
    question: 'Ücretsiz plan ne kadar süre geçerli?',
    answer: 'Ücretsiz planımız süresiz olarak kullanılabilir. Ancak özellikler ve kullanım sınırlıdır.'
  },
  {
    question: 'Ödeme yöntemleri nelerdir?',
    answer: 'Kredi kartı, banka kartı ve havale/EFT ile ödeme yapabilirsiniz. Tüm ödemeleriniz SSL ile güvence altındadır.'
  },
  {
    question: 'İstediğim zaman plan değişikliği yapabilir miyim?',
    answer: 'Evet, dilediğiniz zaman planınızı yükseltebilir veya düşürebilirsiniz. Değişiklikler bir sonraki fatura döneminde geçerli olur.'
  },
  {
    question: 'Faturalama nasıl yapılıyor?',
    answer: 'Faturalama aylık olarak yapılır ve seçtiğiniz plana göre otomatik olarak yenilenir. İptal etmediğiniz sürece aboneliğiniz devam eder.'
  },
  {
    question: 'İade politikanız nedir?',
    answer: 'İlk 14 gün içinde herhangi bir sebep belirtmeden iade talep edebilirsiniz. İade talepleriniz 3-5 iş günü içinde işleme alınır.'
  }
]

const FAQ = () => {
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <FadeIn>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              fontWeight: 700,
              mb: 6
            }}
          >
            Sıkça Sorulan Sorular
          </Typography>

          {faqData.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                mb: 2,
                borderRadius: 2,
                '&:before': { display: 'none' },
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  '& .MuiAccordionSummary-content': {
                    my: 2
                  }
                }}
              >
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="text.secondary">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </FadeIn>
      </Container>
    </Box>
  )
}

export default FAQ 