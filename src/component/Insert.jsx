import img from "../assets/placeholder.svg"
import '../App.css'

function Insert({loadingValue}) {
  // console.log(loadingValue)
  return (
    <div className="img-container">

      {
        loadingValue ? <h2 className='loading'>Uploading...</h2>
        :
        <div>
          <img src={img} />
          <p>Click to upload or drag and drop</p>
        </div>
      }
        
    </div>
  )
}

export default Insert