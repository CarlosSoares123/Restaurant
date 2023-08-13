import * as R from './restaurant'
import * as GS from '../../globalStyle'

//icons
import { BsStar } from "react-icons/bs";


//Images
import img from '/restaurant.jpg'
import img2 from '/restaurant2.jpg'
import img3 from '/restaurant3.jpg'
import img4 from '/restaurant4.jpg'


export const Restaurant = () => {
  return (
    <R.restaurantContainer>
    
      <GS.titles>
      <h1 className='title'>Restautants</h1>
      <h2 className='subtitle'>Restautants</h2>
      </GS.titles>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vel dolorum expedita dolore nostrum inventore suscipit aliquid cumque?</p>
    
      <R.cards>
        <div className="card">
          
          <div className="star">
            <BsStar style={{fontSize: '20px', color: '#fff'}}/>
            <span style={{ color: '#fff'}}>9.8</span>
          </div>

          <figure>
            <img src={img} alt="#" />
          </figure>

          <div className="text">
            
          <div className="star">
            <BsStar style={{fontSize: '20px', color: '#fff'}}/>
            <span style={{ color: '#fff'}}>9.8</span>
          </div>

            <h3>Best Bakery</h3>
            
            <div className="span">
              <span>-50 min</span>
              <span>Sushi</span>
            </div>
            
          </div>
        </div>

        <div className="card">
          
          <div className="star">
            <BsStar style={{fontSize: '20px', color: '#fff'}}/>
            <span style={{ color: '#fff'}}>9.8</span>
          </div>

          <figure>
            <img src={img2} alt="#" />
          </figure>

          <div className="text">
            
            <h3>Best Bakery</h3>
            
            <div className="span">
              <span>-50 min</span>
              <span>Sushi</span>
            </div>
            
          </div>
        </div>

        <div className="card">
          
          <div className="star">
            <BsStar style={{fontSize: '20px', color: '#fff'}}/>
            <span style={{ color: '#fff'}}>9.8</span>
          </div>


          <figure>
            <img src={img3} alt="#" />
          </figure>

          <div className="text">
            
            <h3>Best Bakery</h3>
            
            <div className="span">
              <span>-50 min</span>
              <span>Sushi</span>
            </div>
            
          </div>
        </div>

        <div className="card">
          
          <div className="star">
            <BsStar style={{fontSize: '20px', color: '#fff'}}/>
            <span style={{ color: '#fff'}}>9.8</span>
          </div>

          <figure>
            <img src={img4} alt="#" />
          </figure>

          <div className="text">
            
            <h3>Best Bakery</h3>
            
            <div className="span">
              <span>-50 min</span>
              <span>Sushi</span>
            </div>
            
          </div>
        </div>
      </R.cards>


    </R.restaurantContainer>
  )
}
