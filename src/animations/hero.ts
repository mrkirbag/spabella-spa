import { gsap } from 'gsap';

export const initHeroAnimations = () => {
    const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    heroTimeline
        .from('[data-hero-title]', {
            y: 68,
            opacity: 0,
            duration: 1.05,
            })
        .from(
            '[data-hero-badge]',
            {
                y: 24,
                opacity: 0,
                duration: 0.7,
            },
            '-=0.5'
        )
        .from(
            '[data-hero-thumb]',
            {
                y: 36,
                opacity: 0,
                scale: 0.92,
                stagger: 0.12,
                duration: 0.88,
                ease: 'back.out(1.25)',
            },
            '-=0.34'
        );

    gsap.to('[data-hero-bg]', {
        yPercent: 14,
        ease: 'none',
        scrollTrigger: {
        trigger: '#inicio',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        },
    });

    gsap.fromTo(
        '[data-hero-thumb]',
        {
            y: 0,
        },
        {
            y: -14,
            duration: 1.25,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            stagger: {
                each: 0.18,
                repeat: -1,
                yoyo: true,
            },
        }
    );
};
