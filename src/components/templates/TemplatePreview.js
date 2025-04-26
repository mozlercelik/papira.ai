import React from 'react';
import { Box, Dialog, DialogContent, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const TemplatePreview = ({ open, onClose, template }) => {
  if (!template) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          overflow: 'hidden',
        },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            zIndex: 1,
            bgcolor: 'background.paper',
            '&:hover': {
              bgcolor: 'background.paper',
            },
          }}
        >
          <CloseIcon />
        </IconButton>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Box
            component="img"
            src={template.image}
            alt={template.title}
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
        </motion.div>
      </Box>
      <DialogContent>
        <Typography variant="h5" gutterBottom>
          {template.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {template.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {template.category}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default TemplatePreview; 