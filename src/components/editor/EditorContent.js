import { Box, Paper } from '@mui/material'
import { useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the editor to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'

const EditorContent = ({ content, onContentChange, template }) => {
  const [editorContent, setEditorContent] = useState(content)

  const handleContentChange = (newContent) => {
    setEditorContent(newContent)
    onContentChange(newContent)
  }

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ align: [] }],
      ['link', 'image', 'video', 'blockquote', 'code-block'],
      ['clean']
    ]
  }

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
    'align',
    'blockquote',
    'code-block'
  ]

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <Paper
        elevation={0}
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: 'calc(100vh - 200px)',
          '& .ql-container': {
            minHeight: 'calc(100vh - 300px)',
            fontFamily: 'Times New Roman, serif',
            fontSize: '12pt',
            lineHeight: '1.5'
          },
          '& .ql-editor': {
            padding: '2.5cm 3cm 2.5cm 2.5cm'
          }
        }}
      >
        <ReactQuill
          theme="snow"
          value={editorContent}
          onChange={handleContentChange}
          modules={modules}
          formats={formats}
          style={{ flexGrow: 1 }}
        />
      </Paper>
    </Box>
  )
}

export default EditorContent 