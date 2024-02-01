import "./index.css"

export default function Slide(){
    return(

<div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img id="img-slide" src="https://i.pinimg.com/564x/b4/4e/bd/b44ebd204a04b2da18e1a5b5dbb96b72.jpg" class="d-block" alt="..."/>
    </div>
    <div class="carousel-item">
      <img id="img-slide" src="https://www.receiteria.com.br/wp-content/uploads/file-de-frango-parmegiana-06-730x548.jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img id="img-slide" src="https://coolwallpapers.me/th700/447380-food-desktop-wallpaper.jpg" class="d-block" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


    )
}