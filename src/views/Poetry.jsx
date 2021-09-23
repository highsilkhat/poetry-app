import React, {useState} from 'react'
import { analyzePoetry } from '../services/analyzePoetry'

const Poetry = () => {
    const [textValue, setTextValue] = useState ("")
    const [results, setResults] = useState ([])
    
    const handleTextChange = (event) => {
        setTextValue(event.target.value)
    }

    const handleAnalyze = () => {
        setResults(analyzePoetry(textValue))
    }

    return (
        <div>
            <div>
                <textarea cols="100" rows="20" value={textValue} onChange={handleTextChange}></textarea>
            </div>
            <div>
                <button onClick={handleAnalyze}>Analyze Poetry</button>
            </div>
            <div>
                <ul>
                    {results.map(result =>
                    <li key={result.name}>
                        {result.name} {result.isMatch ? "matches!" : "doesn't match"}
                    </li>)}
                </ul>
            </div>
        </div>
    )
} 

export default Poetry