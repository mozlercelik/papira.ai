// ** React Imports
import { useEffect, useState } from 'react'

// ** Layout Import
import BlankLayout from '@/layout/BlankLayout'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Spinner Import
import Spinner from '@/components/spinner'

// ** Hook Imports
import { useAuth } from '@/hooks/useAuth'

import { Box, Container, Typography, Button, Grid, Paper, TextField, Autocomplete, IconButton, Link } from '@mui/material'
import FadeIn from '@/components/animation/FadeIn'
import {
  School as SchoolIcon,
  Login as LoginIcon,
  PersonAdd as SignUpIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material'
import Hero from '@/components/home/Hero'
import CategorySection from '@/components/home/CategorySection'
import AIFeatures from '@/components/home/AIFeatures'

// Mock university data
const universities = [
  { name: 'Boğaziçi Üniversitesi', country: 'Türkiye' },
  { name: 'İstanbul Teknik Üniversitesi', country: 'Türkiye' },
  { name: 'Harvard University', country: 'USA' },
  { name: 'Stanford University', country: 'USA' },
  { name: 'University of Oxford', country: 'UK' }
]

export const getHomeRoute = role => {
  return '/home'
}

const Home = () => {
  // ** Hooks
  const auth = useAuth()
  const router = useRouter()
  const [selectedUniversity, setSelectedUniversity] = useState(null)

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    if (auth.user && auth.user.role) {
      const homeRoute = getHomeRoute(auth.user.role)

      // Redirect user to Home URL
      // router.replace(homeRoute)
    } else {
      // Redirect user to Login URL
      router.replace('/login')
    }
  }, [])

  const handleStartEditing = () => {
    if (selectedUniversity) {
      router.push('/editor')
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        bgcolor: 'background.default'
      }}
    >
      <Hero />
      <CategorySection />
      <AIFeatures />
    </Box>
  )
}

export default Home
