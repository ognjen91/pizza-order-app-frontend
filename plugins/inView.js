import inView from 'in-view'
inView.offset(200);

inView('.animated.tadaElement')
    .on('enter', el => {
        el.classList.add("tada");
    })

inView('.animated.pulseElement')
    .on('enter', el => {
        el.classList.add("pulse");
    })

inView('.animated.fadeInElement')
    .on('enter', el => {
        el.classList.add("fadeIn");
    })

inView('.animated.fadeInUpElement')
    .on('enter', el => {
        el.classList.add("fadeInUp");
    })

inView('.animated.fadeLeftUpElement')
    .on('enter', el => {
        el.classList.add("fadeInLeft");
    })

inView('.animated.fadeLeftRightElement')
    .on('enter', el => {
        el.classList.add("fadeInRight");
    })
