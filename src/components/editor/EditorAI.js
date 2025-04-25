import {
  Box,
  Paper,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  CircularProgress,
  Chip,
  Tabs,
  Tab,
  Divider
} from '@mui/material'
import {
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  AutoFixHigh as AutoFixIcon,
  Plagiarism as PlagiarismIcon,
  Lightbulb as SuggestionIcon,
  FormatQuote as CitationIcon
} from '@mui/icons-material'
import { useState } from 'react'

const EditorAI = ({ content }) => {
  const [analysisResults, setAnalysisResults] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  const analyzeContent = async () => {
    setIsAnalyzing(true)
    // Mock AI analysis - in a real app, this would call an API
    setTimeout(() => {
      const mockResults = {
        plagiarism: {
          score: 15,
          status: 'low',
          matches: [
            {
              text: 'Sample text from source',
              source: 'Source 1',
              similarity: 15,
              citation: 'Author, A. (2023). Title. Journal, 1(1), 1-10.'
            }
          ]
        },
        suggestions: [
          {
            type: 'improvement',
            text: 'Consider adding more references to support your argument',
            location: 'Introduction',
            priority: 'high'
          },
          {
            type: 'warning',
            text: 'This section could be more concise',
            location: 'Methodology',
            priority: 'medium'
          }
        ],
        citations: [
          {
            type: 'missing',
            text: 'This statement needs a citation',
            location: 'Results section',
            suggestedCitation: 'Smith, B. (2022). Study on topic. Journal, 2(1), 20-30.'
          }
        ]
      }
      setAnalysisResults(mockResults)
      setIsAnalyzing(false)
    }, 2000)
  }

  return (
    <Box sx={{ mt: 2 }}>
      <Button
        variant="contained"
        startIcon={isAnalyzing ? <CircularProgress size={20} /> : <AutoFixIcon />}
        onClick={analyzeContent}
        disabled={isAnalyzing}
      >
        Run AI Analysis
      </Button>

      {analysisResults && (
        <Paper sx={{ mt: 2, p: 2 }}>
          <Tabs
            value={activeTab}
            onChange={(e, newValue) => setActiveTab(newValue)}
            sx={{ mb: 2 }}
          >
            <Tab icon={<PlagiarismIcon />} label="Plagiarism" />
            <Tab icon={<SuggestionIcon />} label="Suggestions" />
            <Tab icon={<CitationIcon />} label="Citations" />
          </Tabs>

          {activeTab === 0 && (
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
                  Plagiarism Check
                </Typography>
                <Chip
                  label={`Similarity Score: ${analysisResults.plagiarism.score}%`}
                  color={analysisResults.plagiarism.score > 20 ? 'error' : 'success'}
                />
              </Box>
              {analysisResults.plagiarism.matches.map((match, index) => (
                <Paper key={index} sx={{ p: 2, mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    {match.text}
                  </Typography>
                  <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                    Source: {match.source} ({match.similarity}% similar)
                  </Typography>
                  <Typography variant="caption" color="primary" display="block">
                    Suggested citation: {match.citation}
                  </Typography>
                </Paper>
              ))}
            </Box>
          )}

          {activeTab === 1 && (
            <List>
              {analysisResults.suggestions.map((suggestion, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    {suggestion.type === 'improvement' && (
                      <CheckCircleIcon color="success" />
                    )}
                    {suggestion.type === 'warning' && (
                      <WarningIcon color="warning" />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={suggestion.text}
                    secondary={
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          {suggestion.location}
                        </Typography>
                        <Chip
                          size="small"
                          label={`Priority: ${suggestion.priority}`}
                          color={suggestion.priority === 'high' ? 'error' : 'warning'}
                          sx={{ mt: 0.5 }}
                        />
                      </Box>
                    }
                  />
                </ListItem>
              ))}
            </List>
          )}

          {activeTab === 2 && (
            <List>
              {analysisResults.citations.map((citation, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CitationIcon color="warning" />
                  </ListItemIcon>
                  <ListItemText
                    primary={citation.text}
                    secondary={
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          {citation.location}
                        </Typography>
                        <Typography variant="caption" color="primary">
                          Suggested citation: {citation.suggestedCitation}
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
              ))}
            </List>
          )}
        </Paper>
      )}
    </Box>
  )
}

export default EditorAI 