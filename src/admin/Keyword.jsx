import React, { useState } from 'react'

function Keyword() {
    const [keywords, setKeywords] = useState([]);
    const [keywordsInput, setKeywordsInput] = useState('');
  return (
    <div>
  <label className="block mb-2">Keywords Suggestion</label>
  <textarea
    className="w-full p-2 border rounded"
    rows="2"
    value={keywordsInput}
    onChange={(e) => setKeywordsInput(e.target.value)}
  />
  <button
    className="bg-orange-500 text-white px-4 py-2 rounded mt-2"
    onClick={() => {
      if (keywordsInput.trim() !== '') {
        setKeywords([...keywords, keywordsInput.trim()]);
        setKeywordsInput('');
      }
    }}
  >
    +
  </button>
  <div className="flex flex-wrap gap-2 mt-4">
    {keywords.map((keyword, index) => (
      <button
        key={index}
        className="bg-gray-200 p-2 rounded"
        onClick={() => {
          setKeywords(keywords.filter((i) => i !== index));
        }}
      >
        {keyword}
      </button>
    ))}
  </div>
</div>
  )
}

export default Keyword