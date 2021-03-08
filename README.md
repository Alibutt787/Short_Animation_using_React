# Animation Using React
 ## Animation  using useRef() hook;
   `const inputEl = useRef(null);`
     ` inputEl.current.focus();`
 ## Animation using the liabry 
 ### $ yarn add @wellyshen/use-web-animations
### or
$ npm install --save @wellyshen/use-web-animations

   ### Using the following Methods 

  ``
    `const { ref, playState, getAnimation } = useWebAnimations({});`


  `const { ref } = useWebAnimations({ ...bounce });`
  

 `const { ref, animate } = useWebAnimations({});`