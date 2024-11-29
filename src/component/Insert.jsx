import img from "../assets/placeholder.svg"
import '../App.css'

function Insert() {
  return (
    <div className="img-container">
        <img src={img} />
        <p>Click to upload or drag and drop</p>
    </div>
  )
}

export default Insert