import React,{useEffect} from 'react'
import Lottie from "react-lottie";
import animationData from "../assets/lotties/loading.json";
import gsap from 'gsap'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function LoadingOverlay() {

  useEffect(()=>{

    const tl = gsap.timeline();

    tl.to('.loading-overlay', 1.6, {css: {display: 'none'}, delay: .8} )

  },[])
  return (
    <div className='loading-overlay'>
      <Lottie
            className="loading"
            options={defaultOptions}
            height={500}
            width={500}
          />
    </div>
  )
}
