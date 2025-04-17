import React, { useState } from 'react';
import '../index.css';

function Button({ id, className, text, typeCode, selectedTypes, setSelectedTypes }) {
  const handleClick = () => {
    setSelectedTypes((prev) => {
      return prev.includes(typeCode)
        ? prev.filter((x) => x !== typeCode)
        : [...prev, typeCode];
    });
  };

  const isSelected = selectedTypes.includes(typeCode);

  return (
    <button
      id={id}
      className={`${className} ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      {text}
      {isSelected && <span className="tick">✓</span>}
    </button>
  );
}

export default Button;
