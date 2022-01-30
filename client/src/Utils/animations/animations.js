export const titleVariants = {
    hidden :{
        opacity:0,
    },
    visible: {
        opacity: 1,
        transition: {
             duration : 1.5
        },
        // exit:{
        //     x:'-100vw',
        //     transition:{ ease: 'easeInOut'}
        // }
    }
}

export const searchFormVariants = {
    hidden :{
        opacity:0,
        y:20
    },
    visible: {
        opacity: 1,
        y:0,
        transition: {
            delay:0.5 , duration : 1.5
        },
        // exit:{
        //     x:'-100vw',
        //     transition:{ ease: 'easeInOut'}
        // }
    }
}

export const NavBarVariants = {
    hidden :{
        opacity:0,
        y:-220
    },
    visible: {
        opacity: 1,
        y:0,
        transition: {
            duration : 1, ease:"easeInOut" , mass:0.4,
            damping:8
        },
        // exit:{
        //     x:'-100vw',
        //     transition:{ ease: 'easeInOut'}
        // }
    }
}