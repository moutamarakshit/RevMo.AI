import React from 'react';

function Paragraph({ setInputText }) {
  return (
    <div className="paragraph">
      <textarea
        className="search-box"
        placeholder="Paste your text here..."
        onChange={(e) => setInputText(e.target.value)}
      ></textarea>
    </div>
  );
}

export default Paragraph;
