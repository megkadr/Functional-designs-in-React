import { useState } from "react"
import {ArrowBigLeft, ArrowBigRight} from "lucide-react"
import ImageSliderProps from "../types/ImageSliderProps"
import Holidays from 'date-holidays';
export default function ImageSlider({imageUrls}: ImageSliderProps){
    const [imageIndex, setImageIndex] = useState(0)
    const hd = new Holidays('PL');
    const holidays = hd.getHolidays(2024);
    console.log(holidays);
    return(
        <div style={{ maxWidth: "1200px", width: "100%", height: "500px", margin: "0 auto"}}>
            <img src={imageUrls[imageIndex]} className="img-slider-img" />
            <button><ArrowBigLeft /></button>
            <button><ArrowBigRight /></button>
        </div>
    )
}