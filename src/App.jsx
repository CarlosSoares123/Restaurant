import { Category } from "./Components/category/category.jsx"
import { Deals } from "./Components/deals/deals.jsx"
import { Header } from "./Components/header/header.jsx"
import { Hero } from './Components/hero/hero.jsx'
import { Map } from "./Components/map/map.jsx"
import { Restaurant } from "./Components/restauraunt/restaurant.jsx"
import { Styled } from "./globalStyle.js"



function App() {
  return (
    <>
    <Styled/>
    <Header/>
    <Hero/>
    <Category/>
    <Restaurant/>
    <Map/>
    <Deals/>
    </>
  )
}

export default App
