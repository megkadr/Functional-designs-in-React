import { useState } from "react"
import {ArrowBigLeft, ArrowBigRight} from "lucide-react"
import ImageSliderProps from "../types/ImageSliderProps"
import Style from "./ImageSlider.module.css"

export default function ImageSlider({imageUrls}: ImageSliderProps){
    const [imageIndex, setImageIndex] = useState(0)

    function showNextImage(){
        setImageIndex(index =>{
            if(index === imageUrls.length - 1) return 0
            return index + 1
        })
    }

    function showPrevImage(){
        setImageIndex(index =>{
            if(index === 0) return imageUrls.length - 1
            return index - 1
        })
    }

    return(
        <div style={{ minWidth: "1200px", width: "100%", margin: "0 auto", aspectRatio: "12 / 6",position: "relative" }}>
            <img src={imageUrls[imageIndex]} className={Style.imgSliderImg} />
            <button onClick={showPrevImage} className={Style.imgSliderBtn} style={{left: 0}}><ArrowBigLeft /></button>
            <button onClick={showNextImage} className={Style.imgSliderBtn} style={{right: 0}}><ArrowBigRight /></button>
        </div>
    )
}