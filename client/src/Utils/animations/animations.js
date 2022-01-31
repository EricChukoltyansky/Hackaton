export const titleVariants = {
    hidden :{
        opacity:0,
        x:-10,
        y:10,
    },
    visible: {
        x:0,
        y:0,
        scale:1.1,
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
        y:-200
    },
    visible: {
        opacity: 1,
        y:10,
        transition: {
            delay:0.8 , duration : 1.5
        },

        // exit:{
        //     x:'-100vw',
        //     transition:{ ease: 'easeInOut'}
        // }
    },
    hover:{
        y:30,
        opacity:0.6
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
            damping:8, delay:0.8
        },
        // exit:{
        //     x:'-100vw',
        //     transition:{ ease: 'easeInOut'}
        // }
    }
}

export const footerVariants = {
    hidden :{
        opacity:0,
        // y:220
    },
    visible: {
        opacity: 1,
        // y:0,
        transition: {
            duration : 2, ease:"easeInOut" , mass:12,delay:0.7,
            damping:2
        },
    }
}

export const searchResultsVariants = {
    hidden :{
        opacity:0,
        y:'100vh'
    },
    visible: {
        opacity: 1,
        y:0,
        transition: {
            duration : 1, ease:"easeInOut" , mass:12 ,
            damping:2
        },
    }
}
export const radioButtonsVariants = {
    hidden :{
        opacity:0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration : 2.5, ease:"easeInOut" , mass:12 ,
            damping:2
        },
    }
}