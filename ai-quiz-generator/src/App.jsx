import React, { useState } from 'react';
import OutputDisplay from './components/OutputDisplay';
import Spinner from './components/Spinner';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import Button from './components/Button';
import GenerateButton from './components/GenerateButton';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [output, setOutput] = useState('');  // Output from backend (quiz or error message)
  const [loading, setLoading] = useState(false);  // To handle loading state
  const [inputText, setInputText] = useState('');  // User input text for quiz generation
  const [selectedTypes, setSelectedTypes] = useState([]);  // Selected question types

  return (
    <ErrorBoundary>
      <div>
        <Header />
        <Paragraph setInputText={setInputText} />
        <div className="buttons">
          <Button
            id="sumbutton"
            className="sum-button"
            text="Summarize"
            typeCode="summarize"
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
          />
          <Button
            id="mcqbutton"
            className="mcq-button"
            text="MCQs"
            typeCode="mcq"
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
          />
          <Button
            id="fillbutton"
            className="blank-button"
            text="Fill Blanks"
            typeCode="fill"
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
          />
          <Button
            id="quesbutton"
            className="ques-button"
            text="Short Questions"
            typeCode="short"
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
          />
        </div>
        <GenerateButton
          loading={loading}
          setLoading={setLoading}
          setOutput={setOutput}
          inputText={inputText}
          selectedTypes={selectedTypes}
        />
        {loading ? <Spinner /> : <OutputDisplay output={output} />}
      </div>
    </ErrorBoundary>
  );
}

export default App;
