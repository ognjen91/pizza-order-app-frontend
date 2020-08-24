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

inView('.animated.fadeInLeftElement')
    .on('enter', el => {
        el.classList.add("fadeInLeft");
    })

inView('.animated.fadeInRightElement')
    .on('enter', el => {
        el.classList.add("fadeInRight");
    })

inView('.animated.slideInUpElement')
    .on('enter', el => {
        el.classList.add("slideInUp");
    })

inView('.animated.slideInLeftElement')
    .on('enter', el => {
        el.classList.add("slideInLeft");
    })

inView('.animated.slideRightElement')
    .on('enter', el => {
        el.classList.add("slideInRight");
    })
