import "./index.css"
import * as bootstrap from 'bootstrap'

export default function Slide(){
    return(

<div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img id="img-slide" src="https://i.imgur.com/G5KIMtb.png" className="d-block" alt="..."/>
    </div>
    <div className="carousel-item">
      <img id="img-slide" src="https://images.unsplash.com/photo-1503591099259-a96e250e0a67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block" alt="..."/>
    </div>
    <div className="carousel-item">
      <img id="img-slide" src="https://images.unsplash.com/photo-1521704042371-f13409bf0e6d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


    )
}