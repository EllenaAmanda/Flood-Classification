import img from "../assets/placeholder.svg";
import "../App.css";

function Insert({ loadingValue, uploadedURL }) {
  // console.log(loadingValue)
  // console.log(uploadedURL);
  return (
    <div className="img-container">
      {loadingValue ? (
        <h2 className="loading">Uploading...</h2>
      ) : uploadedURL ? (
        <div>
          <img
            src={uploadedURL}
            alt="Uploaded"
            style={{ maxWidth: "100%", maxHeight: "480px" }}
          />
        </div>
      ) : (
        <div style={{padding:"16%"}}>
          <img src={img}/>
          <p>No image uploaded yet. Please upload an image.</p>
        </div>
      )}
    </div>
  );
}

export default Insert;
