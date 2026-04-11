import { gsap } from 'gsap';

export const initServicesAnimations = () => {
    gsap.from('[data-reveal]', {
        y: 56,
        opacity: 0,
        duration: 0.95,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#servicios',
            start: 'top 72%',
        },
    });

    gsap.from('[data-gallery-item]', {
        y: 34,
        opacity: 0,
        scale: 0.95,
        stagger: 0.1,
        duration: 0.75,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '#servicios',
            start: 'top 63%',
        },
    });

    gsap.from('[data-service-card]', {
        y: 44,
        opacity: 0,
        stagger: 0.14,
        duration: 0.82,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#servicios',
            start: 'top 78%',
        },
    });
};
