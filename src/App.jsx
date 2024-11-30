import { useState, useEffect } from 'react'
import './App.css'
import Insert from './component/Insert'

function App() {
  const [labels, setLabels] = useState("")
  const [uploadedURL, setUploadedURL] = useState()

  const handleUpload = async (event) => {
    const selectedFile = event.target.files[0]; // Access the selected file
    console.log("event target file", selectedFile);

    // Immediately upload the file using the selected file instead of waiting for `file` state
    if (selectedFile) {
      const data = new FormData();
      data.append("file", selectedFile);
      data.append("upload_preset", "u8jcxkjv"); //nama preset yg dibuat di cloudinary
      data.append("cloud_name", "dwqiibgrk"); //cloud name cloudinary

      try {
        // upload image via API with base URL depends on the cloud name (unique identifier assigned to your Cloudinary account)
        const res = await fetch(`https://api.cloudinary.com/v1_1/dwqiibgrk/image/upload`, {
          method: "POST",
          body: data,
        });

        const hasil = await res.json();
        console.log("Upload Response:", hasil);
        setUploadedURL(hasil.secure_url); // Store the secure URL of the uploaded file
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  useEffect(() => {
    if (uploadedURL) {
      console.log("Uploaded URL:", uploadedURL);
    }
  }, [uploadedURL]); // Run the effect whenever `uploadedURL` changes
  
  

  return (
    <div className='container'>
      <h1>Image Classification</h1>
      <h1>For Area Affected by Tidal Flood</h1>
      <h2 style={{fontWeight: "normal"}}>Upload image to detect area affected by tidal flood.</h2>

      <Insert />
        <input style={{marginTop:"24px"}} type='file' onChange={handleUpload} accept="image/x-png,image/jpeg" className='attachment' />
      
    </div>
  )
}

export default App
