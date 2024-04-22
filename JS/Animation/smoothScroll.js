import { gsap, ScrollTrigger } from "/node_modules/gsap/all.js";

//LENIS SMOOTHSCROLL

document.addEventListener('DOMContentLoaded', (e)=>{
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time)=>{
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
})