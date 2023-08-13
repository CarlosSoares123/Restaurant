
import * as H from './header.js'
import { BsCart, BsJustify, BsXLg } from "react-icons/bs";
import { useState } from 'react';




export const Header = () => {
  
  const [menu, setMenu] = useState(false)
  const [opacity, setOpacity] = useState(false)

  const openMenu = () => {
    console.log("Ola")
    setMenu(true)
    setOpacity(true)
  }
  const closeMenu = () => {
    setMenu(false)
    setOpacity(false)
  }

  return (
    <H.headerContainer>
      <h1>FooD</h1>
      
      <H.navBar visible={menu}>

        <div className="logo">
          <h1>FooD</h1>
          <BsXLg style={{fontSize: "25px", color: "#fff", cursor: "pointer"}} onClick={closeMenu}/>
        </div>

        <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Restaurants</a></li>
        <li><a href="#">Map</a></li>
        <li><a href="#">Submit</a></li>
        </ul>

      </H.navBar>

      <div className="buttons">
        
        <div className="sign">Sign Up</div>
        <BsCart className='icon'/>
        <BsJustify onClick={openMenu} className='icon menuBurger'/>
        

      </div>

      <H.overlay visible={opacity} />
    </H.headerContainer>
  )
}
