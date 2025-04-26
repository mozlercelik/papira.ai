import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';

const MeetingEditor = ({ content }) => {
  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          flex: 1,
          overflow: 'hidden',
          position: 'relative',
          height: 'fit-content',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.02) 0px, rgba(0,0,0,0.02) 1px, transparent 1px, transparent 2px)',
            pointerEvents: 'none',
            opacity: 0.3
          }
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 3,
            minHeight: '100%',
            bgcolor: 'background.paper',
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
          {content ? (
            <Box sx={{
              '& h1, & h2, & h3, & h4, & h5, & h6': {
                mt: 2,
                mb: 1,
                fontWeight: 600,
                color: 'text.primary'
              },
              '& p': {
                mb: 2,
                color: 'text.secondary'
              },
              '& ul, & ol': {
                pl: 3,
                mb: 2,
                color: 'text.secondary'
              },
              '& code': {
                bgcolor: 'action.hover',
                p: 0.5,
                borderRadius: 1,
                fontFamily: 'monospace'
              },
              '& pre': {
                bgcolor: 'action.hover',
                p: 2,
                borderRadius: 1,
                overflow: 'auto',
                mb: 2
              },
              '& blockquote': {
                borderLeft: '4px solid',
                borderColor: 'divider',
                pl: 2,
                my: 2,
                color: 'text.secondary'
              },
              '& a': {
                color: 'primary.main',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }
            }}>
              <ReactMarkdown>{content}</ReactMarkdown>
            </Box>
          ) : (
            <Typography variant="body1" color="text.secondary">
              Belge içeriğini görmek için bir dosya yükleyin.
            </Typography>
          )}
        </Paper>
      </Box>
    </Box>
  );
};

export default MeetingEditor; 