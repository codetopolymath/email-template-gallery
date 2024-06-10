import React from 'react';
import './ContentBlock.css';

function ContentBlock({ item }) {
  return (
    <div className="content-block">
      <header className="content-block-header">
        <h2>Template: {item.name}</h2>
        <p>UID: {item.uid}</p>
      </header>
      <div className="content" dangerouslySetInnerHTML={{ __html: item.content }} />
      <div className="metadata">
        <p>
          <span className="metadata-created">Created at: {new Date(item.created_at).toLocaleString()}</span> | 
          <span className="metadata-updated">Updated at: {new Date(item.updated_at).toLocaleString()}</span>
        </p>
      </div>
    </div>
  );
}

export default ContentBlock;