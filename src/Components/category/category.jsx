//imgs
import pizza from '/category/pizza.png'
import sushi from '/category/sushi.png'
import burgers from '/category/burger.png'
import vegetarian from '/category/salad.png'
import asian from '/category/noodles.png'
import bakery from '/category/cake.png'

//styled
import * as C from './category.js'

//
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
//
import Slider from 'react-slick'


export const Category = () => {
  
  var settings = {
      dots: true,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
  return (
    <C.categoryContainer>
      <C.titles>
      <h1 className='title'>Categories</h1>
      <h2 className='subtitle'>Popular Categories</h2>
      </C.titles>
      
      <C.carrousel>
        <Slider {...settings}  style={{ width: '100%', height: '100%' }}>
          <C.box>
              <div className="container">
                
              <figure>
                <img src={pizza} alt="#" />
                {/* <span>42</span> */}
              </figure>
              
              <div className="description">
                <span>Pizza</span>
                <span>From 54</span>
              </div>
              
              </div>
          </C.box>

          <C.box>
            <div className="container">
                
              <figure>
                <img src={sushi} alt="#" />
                {/* <span>42</span> */}
              </figure>
              
              <div className="description">
                <span>Sushi</span>
                <span>From 54</span>
              </div>
              
              </div>
          </C.box>

          <C.box>
            <div className="container">
                
              <figure>
                <img src={burgers} alt="#" />
                {/* <span>42</span> */}
              </figure>
              
              <div className="description">
                <span>Burgers</span>
                <span>From 54</span>
              </div>
              
              </div>
          </C.box>

          <C.box>
            <div className="container">
                
              <figure>
                <img src={vegetarian} alt="#" />
                {/* <span>42</span> */}
              </figure>
              
              <div className="description">
                <span>Vegetarian</span>
                <span>From 54</span>
              </div>
              
              </div>
          </C.box>
          <C.box>
            <div className="container">
                
              <figure>
                <img src={asian} alt="#" />
                {/* <span>42</span> */}
              </figure>
              
              <div className="description">
                <span>Asian</span>
                <span>From 54</span>
              </div>
              
              </div>
          </C.box>

          <C.box>
            <div className="container">
                
              <figure>
                <img src={bakery} alt="#" />
                {/* <span>42</span> */}
              </figure>
              
              <div className="description">
                <span>Bakery</span>
                <span>From 54</span>
              </div>
              
              </div>
          </C.box>

        </Slider>
      </C.carrousel>
      
    </C.categoryContainer>
  )
}
