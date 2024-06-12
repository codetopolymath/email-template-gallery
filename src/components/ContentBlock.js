import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './ContentBlock.css';

function ContentBlock({ item }) {
  return (
    <Accordion sx={{ backgroundColor: '#f5f5f5', marginBottom: '10px' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ borderBottom: '1px solid #ddd', backgroundColor: '#e0e0e0' }} 
      >
        <Typography sx={{ fontWeight: 'bold', color: '#333' }}>Template: {item.name} (UID: {item.uid})</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: '20px' }}>
        <div className="content-block">
          <div className="content" dangerouslySetInnerHTML={{ __html: item.content }} />
          <div className="metadata">
            Created at: {new Date(item.created_at).toLocaleString()} | Updated at: {new Date(item.updated_at).toLocaleString()}
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default ContentBlock;