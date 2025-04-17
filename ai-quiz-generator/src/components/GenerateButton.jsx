import React from "react";

function GenerateButton({ setLoading, setOutput, loading, inputText, selectedTypes }) {
  const handleClick = async () => {
    if (!inputText || selectedTypes.length === 0) {
      setOutput("Please enter text and select at least one question type.");
      return;
    }
  
    setLoading(true);
  
    try {
      const response = await fetch("http://localhost:5000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputText: inputText,  // changed to match backend
          selectedTypes: selectedTypes,  // changed to match backend
        }),
      });
  
      const data = await response.json();
  
      // Log the raw output here
      console.log("GPT Raw Output:", data.quiz); // Log the raw quiz data
  
      setOutput(data.quiz || {});
    } catch (error) {
      console.log("Error generating quiz:", error);
      setOutput("Something went wrong 😢");
    }
  
    setLoading(false);
  };
  
  return (
    <div className="generate">
      <button className="gen-button" onClick={handleClick} disabled={loading}>
        {loading ? "Generating..." : "Generate"}
      </button>
    </div>
  );
}

export default GenerateButton;
