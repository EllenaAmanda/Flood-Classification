import { useState } from 'react'
import './App.css'
import Insert from './component/Insert'

function App() {
  const [labels, setLabels] = useState("")
  const [image, setImage] = useState("")
  const [caption, setCaption] = useState("No image chosen")
  return (
    <div className='container'>
      <h1>Image Classification</h1>
      <h1>For Area Affected by Flood</h1>
      <h2 style={{fontWeight: "normal"}}>Upload image to detect area affected by flood.</h2>

      <Insert />
      <div style={{display: "inline-flex", gap:"24px", marginTop: "24px"}}>
        <button className='button'>Upload Image</button>
        <p style={{fontStyle: "italic"}}>{caption}</p>
      </div>
      
    </div>
  )
}

export default App
