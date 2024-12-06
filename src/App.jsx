import { useState, useEffect } from 'react'
import './App.css'
import Insert from './component/Insert'

function App() {
  const [labels, setLabels] = useState("1") // if predicted labels are string format
  // const [labels, setLabels] = useState([]) // if predicted labels are in array
  const [loading, setLoading] = useState(false)
  const [uploadedURL, setUploadedURL] = useState("")


  // function to handle changes input file
  const handleUpload = async (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return;

    setLoading(true); // Start loading state
    setLabels("") //erase previous labels
    const data = new FormData();
    data.append("file", selectedFile);
    data.append("upload_preset", "u8jcxkjv");
    data.append("cloud_name", "dwqiibgrk");

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/dwqiibgrk/image/upload`, {
        method: "POST",
        body: data,
      });
      const hasil = await res.json();
      setUploadedURL(hasil.secure_url); // Set the uploaded image URL
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false); // Stop loading state
      setLabels("newLabels") // Set new labels
    }
  };
  
  

  return (
    <div className='container'>
      <h1>Image Classification</h1>
      <h1>For Area Affected by Tidal Flood</h1>
      <h2 style={{fontWeight: "normal"}}>Upload image to detect area affected by tidal flood.</h2>
      
      {/* box area to display image */}
      <Insert uploadedURL={uploadedURL} loadingValue={loading}/>
      
      {/* button to select img file */}
        <input style={{marginTop:"24px"}} type='file' onChange={handleUpload} accept="image/x-png,image/jpeg" className='attachment' />
      
      {/* labels prediction */}
      {(labels!=="" && uploadedURL!=="") ? 
        <div style={{textAlign:'left', marginTop:"32px"}}>
          <h3>Predicted Labels</h3>
          <p>{labels}</p>
        </div>
        : ""}
      
      
    </div>
  )
}

export default App
