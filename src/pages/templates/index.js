import React, { useState } from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import TemplatePreview from '../../components/templates/TemplatePreview';

const templates = [
    {
        id: 1,
        title: 'Social Media Post',
        description: 'Create engaging social media posts for various platforms',
        image: '/templates/social-media.jpg',
        category: 'Social Media',
    },
    {
        id: 2,
        title: 'Email Newsletter',
        description: 'Design professional email newsletters for your subscribers',
        image: '/templates/email-newsletter.jpg',
        category: 'Email',
    },
    {
        id: 3,
        title: 'Blog Post',
        description: 'Write compelling blog posts with proper formatting',
        image: '/templates/blog-post.jpg',
        category: 'Content',
    },
    {
        id: 4,
        title: 'Product Description',
        description: 'Create detailed and attractive product descriptions',
        image: '/templates/product-description.jpg',
        category: 'E-commerce',
    },
];

const TemplatesPage = () => {
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [previewOpen, setPreviewOpen] = useState(false);

    const categories = ['All', ...new Set(templates.map(template => template.category))];

    const filteredTemplates = selectedCategory === 'All'
        ? templates
        : templates.filter(template => template.category === selectedCategory);

    const handleTemplateClick = (template) => {
        setSelectedTemplate(template);
        setPreviewOpen(true);
    };

    const handleUseTemplate = () => {
        router.push(`/generator?template=${selectedTemplate.id}`);
        setPreviewOpen(false);
    };

    return (
        <Container maxWidth="lg">
            <Box sx={{ py: 8 }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Templates
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" paragraph>
                    Choose from our collection of professionally designed templates
                </Typography>

                <Box sx={{ mb: 4, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={selectedCategory === category ? 'contained' : 'outlined'}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </Box>

                <Grid container spacing={4}>
                    {filteredTemplates.map((template) => (
                        <Grid item xs={12} sm={6} md={4} key={template.id}>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Box
                                    sx={{
                                        bgcolor: 'background.paper',
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        boxShadow: 1,
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => handleTemplateClick(template)}
                                >
                                    <Box
                                        component="img"
                                        src={template.image}
                                        alt={template.title}
                                        sx={{
                                            width: '100%',
                                            height: 200,
                                            objectFit: 'cover',
                                        }}
                                    />
                                    <Box sx={{ p: 3 }}>
                                        <Typography variant="h6" gutterBottom>
                                            {template.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {template.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <TemplatePreview
                open={previewOpen}
                onClose={() => setPreviewOpen(false)}
                template={selectedTemplate}
            />
        </Container>
    );
};

TemplatesPage.acl = {
    action: 'read',
    permission: 'templates'
}

export default TemplatesPage; 