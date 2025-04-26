import { Box, Grid, Paper, Typography, useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'
import FormatInputs from '@/components/generator/FormatInputs'
import DocumentEditor from '@/components/generator/DocumentEditor'
import FeedbackPanel from '@/components/generator/FeedbackPanel'

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

const AcademyGenerator = () => {
    const theme = useTheme()

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
                Akademik Belge Oluşturucu
            </Typography>

            <Grid container spacing={3}>
                {/* Left Section - Inputs */}
                <Grid item xs={12} md={3}>
                    <StyledPaper>
                        <FormatInputs />
                    </StyledPaper>
                </Grid>

                {/* Middle Section - Editor */}
                <Grid item xs={12} md={6}>
                    <StyledPaper>
                        <DocumentEditor />
                    </StyledPaper>
                </Grid>

                {/* Right Section - Feedback */}
                <Grid item xs={12} md={3}>
                    <StyledPaper>
                        <FeedbackPanel />
                    </StyledPaper>
                </Grid>
            </Grid>
        </Box>
    )
}

AcademyGenerator.acl = {
    action: 'read',
    permission: 'academy'
}
export default AcademyGenerator 