import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  CircularProgress,
  Chip
} from '@mui/material'
import {
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon,
  Warning as WarningIcon
} from '@mui/icons-material'
import { useState } from 'react'

const validationRules = {
  font: {
    size: '12pt',
    family: 'Times New Roman'
  },
  margins: {
    top: '2.5cm',
    bottom: '2.5cm',
    left: '3cm',
    right: '2.5cm'
  },
  spacing: {
    line: '1.5',
    paragraph: '6pt'
  },
  headings: {
    level1: '16pt',
    level2: '14pt',
    level3: '12pt'
  }
}

const EditorValidation = ({ content, onValidate }) => {
  const [validationResults, setValidationResults] = useState(null)
  const [isValidating, setIsValidating] = useState(false)

  const validateDocument = async () => {
    setIsValidating(true)
    // Mock validation - in a real app, this would call an API
    setTimeout(() => {
      const mockResults = {
        valid: true,
        issues: [
          {
            type: 'warning',
            message: 'Font size should be 12pt',
            location: 'Document settings',
            fix: 'Change font size to 12pt'
          },
          {
            type: 'error',
            message: 'Line spacing should be 1.5',
            location: 'Paragraph 1',
            fix: 'Adjust line spacing to 1.5'
          },
          {
            type: 'success',
            message: 'Margins are correctly set',
            location: 'Page setup',
            fix: null
          },
          {
            type: 'warning',
            message: 'Heading 1 should be 16pt',
            location: 'Introduction',
            fix: 'Adjust heading size to 16pt'
          }
        ]
      }
      setValidationResults(mockResults)
      setIsValidating(false)
    }, 1500)
  }

  return (
    <Box sx={{ mt: 2 }}>
      <Button
        variant="contained"
        onClick={validateDocument}
        disabled={isValidating}
        startIcon={isValidating ? <CircularProgress size={20} /> : null}
      >
        Validate Document
      </Button>

      {validationResults && (
        <Paper sx={{ mt: 2, p: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Validation Results
            </Typography>
            <Chip
              label={validationResults.valid ? 'Valid' : 'Invalid'}
              color={validationResults.valid ? 'success' : 'error'}
            />
          </Box>
          <List>
            {validationResults.issues.map((issue, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  {issue.type === 'success' && <CheckCircleIcon color="success" />}
                  {issue.type === 'warning' && <WarningIcon color="warning" />}
                  {issue.type === 'error' && <ErrorIcon color="error" />}
                </ListItemIcon>
                <ListItemText
                  primary={issue.message}
                  secondary={
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        {issue.location}
                      </Typography>
                      {issue.fix && (
                        <Typography variant="caption" color="primary">
                          Fix: {issue.fix}
                        </Typography>
                      )}
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  )
}

export default EditorValidation 