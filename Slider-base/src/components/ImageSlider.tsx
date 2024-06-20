import { useState } from "react"
import {ArrowBigLeft, ArrowBigRight, Circle, CircleDot} from "lucide-react"
import ImageSliderProps from "../types/ImageSliderProps"
import Style from "./ImageSlider.module.css"

export default function ImageSlider({images}: ImageSliderProps){
    const [imageIndex, setImageIndex] = useState(0)

    function showNextImage(){
        setImageIndex(index =>{
            if(index === images.length - 1) return 0
            return index + 1
        })
    }

    function showPrevImage(){
        setImageIndex(index =>{
            if(index === 0) return images.length - 1
            return index - 1
        })
    }

    return(
        <section style={{ minWidth: "1200px", width: "100%", margin: "0 auto", aspectRatio: "12 / 6",position: "relative" }} aria-label="Image slider">
            <div style={{width: "100%", height: "100%", display: "flex", overflow: "hidden"}}>
                {images.map(({url, alt}, index)=>(
                    <img key={url} src={url} alt={alt} className={Style.imgSliderImg} style={{translate: `${-100 * imageIndex}%` }} aria-hidden={imageIndex !== index}/>
                ))}
            </div>
            <button onClick={showPrevImage} className={Style.imgSliderBtn} style={{left: 0}} aria-label="View Previous Image"><ArrowBigLeft aria-hidden /></button>
            <button onClick={showNextImage} className={Style.imgSliderBtn} style={{right: 0}} aria-label="View Next Image"><ArrowBigRight aria-hidden /></button>
            <div style={{position: "absolute", bottom: ".5rem", left: "50%", translate: "-50%", display: "flex", gap: ".25rem"}}>
                {images.map((_, index)=>(
                    <button 
                        key={index} 
                        onClick={() => setImageIndex(index)}
                        className={Style.imgSliderBtnDot} 
                        aria-label={`View Image ${index + 1}`}
                    >
                        {index === imageIndex ? <CircleDot aria-hidden /> : <Circle />}
                    </button>
                ))}
            </div>
        </section>
    )
}