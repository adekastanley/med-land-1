
// const tl = gsap.timeline()



const mm = gsap.matchMedia();
// mobile styles 
mm.add("(max-width: 1200px)",()=> {
    gsap.from('.hero', {
        opacity: 0,
        ease: 1,
        duration: .5,
        x: '70px'


    })

    gsap.from('.hero-text-container', {

        opacity: 0,
        duration: 1.5,
        x: '-70px'
    
    })
    gsap.from('.section-1', {
        opacity: 0,
        duration: 1.5,
        // x: '-70px'
    })
} )


// pc styles 
mm.add("(min-width: 1200px)",()=> {
    gsap.from('.hero-text-container', {

        opacity: 0,
        duration: 1.5,
        y: '40px'
    
    })

    gsap.from('.section-1', {
        opacity: 0,
        duration: 1.5,
        // x: '-70px'
    })
} )