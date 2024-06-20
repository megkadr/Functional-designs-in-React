import './App.css'
import car1 from "./assets/car-1.jpg"
import car2 from "./assets/car-2.jpg"
import car3 from "./assets/car-3.jpg"
import car4 from "./assets/car-4.jpg"
import car5 from "./assets/car-5.jpg"
import ImageSlider from "./components/ImageSlider"

const IMAGES = [
  {url: car1, alt: "Car One"},
  {url: car2, alt: "Car Two"}, 
  {url: car3, alt: "Car Three"},
  {url: car4, alt: "Car Four"},
  {url: car5, alt: "Car Five"},
]

export default function App() {
  return <ImageSlider images={IMAGES}/>
}

