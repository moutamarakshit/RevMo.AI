import React from 'react';

const OutputDisplay = ({ output }) => {
  if (!output) return null;

  return (
    <div className="output-display">
      <h3>🧠 Generated Quiz</h3>
      {/* Just dump the raw text so you can see exactly what came back */}
      <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
        {output}
      </pre>
    </div>
  );
};

export default OutputDisplay;
