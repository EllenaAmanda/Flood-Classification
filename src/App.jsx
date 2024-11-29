import { useState } from 'react'
import './App.css'
import Insert from './component/Insert'

function App() {
  const [labels, setLabels] = useState("")
  const [imageURL, setImageURL] = useState("")
  const [caption, setCaption] = useState("No image chosen")
  return (
    <div className='container'>
      <h1>Image Classification</h1>
      <h1>For Area Affected by Tidal Flood</h1>
      <h2 style={{fontWeight: "normal"}}>Upload image to detect area affected by tidal flood.</h2>

      <Insert />
      <div style={{display: "inline-flex", gap:"24px", marginTop: "24px"}}>
        <input type='file' accept="image/x-png,image/jpeg" className='attachment' />
        {/* <p style={{fontStyle: "italic"}}>{caption}</p> */}
      </div>
      
    </div>
  )
}

export default App
