import useWebAnimations from '@wellyshen/use-web-animations'
import React from 'react'

export const WebAnimation1 = () => {
    
    const {ref,playState, getAnimation } =useWebAnimations({keyframes:[
        {transform:'translate(0px,0px)'},
        {transform:'translate(500px,0px)',backgroundColor:'#D5CABD'},
        {transform:'translate(600px,0px)'},
        {transform:'translate(0px,0px)'},
    ],
    timing:{duration:10000,delay:0,iterations:'Infinity'}});
    
    
    
    
    
    return (
        <div>
            <h1 >Moving Effect Playing State {playState}</h1>
            <button onClick={ ()=>getAnimation().play()}>Play</button>
            <button onClick={()=>getAnimation().pause()}>pause</button>
            <button onClick={()=>getAnimation().reverse()}>Reverse</button>
            <button onClick={()=>getAnimation().cancel()}>Cancel</button>
            <button onClick={()=>getAnimation().finish()}>Finish</button>
    
            <h2 ref={ref}>Moving Effect by UseAnimation</h2>

                    </div>
    )
}