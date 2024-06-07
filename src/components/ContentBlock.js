import React from 'react';
import './ContentBlock.css';

function ContentBlock({ item }) {
  return (
    <div className="content-block">
      <header>Template: {item.template_name} (UID: {item.template_uid})</header>
      <div className="content" dangerouslySetInnerHTML={{ __html: item.content }} />
      <div className="metadata">
        Created at: {new Date(item.created_at).toLocaleString()} | Updated at: {new Date(item.updated_at).toLocaleString()}
      </div>
    </div>
  );
}

export default ContentBlock;
