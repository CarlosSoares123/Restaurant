import * as H from './hero'
//Images
import img from '/hero.png'
import img2 from '/hero2.png'
import img3 from '/hero3.png'
//Icons
// import { BsFacebook, BsWhatsapp, BsTwitter } from "react-icons/bs";


export const Hero = () => {
  return (
    <H.hero_container>

      <div className="container_text">
        <div className="text">
          <h3>Best food in town.</h3>
          <h2>
            Delivery Food from the Best Restaurants.
          </h2>
        </div>
      
        <div className="search">
      <span>Food and Restaurants...</span>
      <button>Search</button>
        </div>

      </div>

      <div className="imgs">
      <figure>
        <img src={img} alt="img"  />
      </figure>
      <figure>
        <img src={img2} alt="img" />
      </figure>
      <figure>
        <img src={img3} alt="img" />
      </figure>
      </div>

    </H.hero_container>
  )
}
