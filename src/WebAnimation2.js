import useWebAnimations, { bounce, rollIn, zoomInDown } from '@wellyshen/use-web-animations'
import React from 'react'

export const WebAnimation2 = () => {
    
    const {ref}=useWebAnimations({...bounce})
   // console.log("🚀 ~ file: WebAnimation2.js ~ line 7 ~ WebAnimation2 ~ ref", ref );
     
    return (
        <div>
           <h1 style={{height:'50px'}} ref={ref}>Aqib Ali Butt</h1>    
          
        </div>
    )
}
